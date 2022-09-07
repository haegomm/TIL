# Django ModelForm

---

- Form Class와 Model이랑 중복되는 부분이 많음
  
  - [forms.py](http://forms.py)
  
  ```python
  class ArticleForm(forms.Form):
      title = forms.CharField(max_length=10)
      content = forms.CharField(widget=forms.Textarea)
  ```
  
  - [models.py](http://models.py)
  
  ```python
  rom django.db import models
  
  # Create your models here.
  class Article(models.Model):
      title = models.CharField(max_length=10)
      content = models.TextField()
      created_at = models.DateTimeField(auto_now_add=True)
      updated_at = models.DateTimeField(auto_now=True)
  
      def __str__(self):
          return self.title
  ```

- 사용자의 입력을 받는게 modelfiled와 동일한 데이터를 받을 거라면, 동일한 filed에 맵핑을 시키고 싶다면(그런 form이 필요하다면) model을 기반으로 한 form을 만들어준다. ⇒ modelform

- modelform 에서 중요한 점은 기존에 설정한 model에 대한 정보를 이미 들고가는 형태의 form이기 때문에 재정의할 필요가 없음!

---

### ModelForm 선언

▫️ forms 라이브러리에서 파생된 ModelForm 클래스를 상속받음

▫️ 정의한 ModelForm 클래스 안에 Meta 클래스를 선언

▫️ 어떤 모델을 기반으로 form을 작성할 것인지에 대한 정보를 Meta 클래스에 지정

- articles/forms.py

```python
from django import forms
from .models import Article

class Articles(forms.ModelForm):

    class Meta:
        model = Article        # 어떤 모델을 기반으로 할지
        fields = '__all__'     # 어떤 모델필드 중 어떤 것을 출력할지
```

❗호출하지 않음❗

`model = Article` 은 `model = Article()` 와 같이 호출하지 않음!

인스턴스 값을 할당하는 것이 아니라 Article 이라는 클래스의 참조값 자체를 사용하는 것! 등록한다고 생각하면 됨~!

---

> ModelForm에서의 ***Meta Class***

▫️ ModelForm의 정보를 작성하는 곳

▫️ ModelForm을 사용할 경우 참조 할 모델이 있어야 하는데, Meta class의 model 속성이 이를 구성함

❗model 과 fields 클래스 변수명은 바꾸면 안됨! ModelForm이라는 구조 자체가 저렇게 설계되어있기 때문에 변수명은 저렇게 써줘야 함! ❗

▫️ 참조하는 모델에 정의된 field 정보를 Form에 적용함

▫️ fileds 속성에 ‘**all**’ 를 사용하여 모델의 모든 필드를 포함할 수 있음

▫️ 또는 exlude라는 속성을 사용하여 모델에서 포함하지 않을 필드를 지정할 수 있음

❔ 왜 빼는 거지? 빼는 경우는 어떤 경우?

- 사용자로 부터 입력을 받는게 아니라 다른 요청들, 객체 데이터에서 추출한다거나 view함수에서 별도로 처리한다거나 할 때, 별도로 데이터를 따로 넣고싶을 때 사용자로 부터 입력을 받지 않겠다고 하는 것!
- articles/forms.py

```python
class Articles(forms.ModelForm):

    class Meta:
        model = Article
                exclude = ('title',)
```

❗fields와 exclude를 함께 작성해도 되나, 권장하지 않음

---

### [참고]

> Meta data

▫️ “데이터를 표현하기 위한 데이터”

결국 클래스 이름을 `class Meta:` Meta라고 한 것은 `class ArticleForm(forms.ModelForm):` 도 정보인데 이것에 대한 정보를 또 작성하는 것이라서 데이터의 데이터라는 의미로 Meta 라는 클래스 이름을 갖게 된 것!

---

> 참조 값과 반환 값

▫️ 호출하지 않고 이름만 작성하는 방식의 의미

```python
class Articles(forms.ModelForm):

    class Meta:
        model = Article
                fields = '__all__'
```

▫️ 호출을 하지 않는다? model이 인스턴스가 아니라는 것!

▫️ 함수의 이름을 그대로 출력하는 것과 호출 후의 결과를 비교 **↓↓↓**

```python
def greeting():
    return '안녕하세요'

print(greeting)    # <function greeting at 0x10761caf0>
print(greeting())  # 안녕하세요
```

▫️ 첫번째 결과는 함수의 참조 값을 출력

▫️ 두번째 결과는 함수의 반환 값을 출력

▫️ 언제 참조 값을 사용하나?

- 함수를 호출하지 않고 함수 자체를 그대로 전달하여, 다른 함수에서 “필요한 시점에” 호출하는 경우

```python
# urls.py
urlpatterns = [
    path('', views.index, name='index'),
]
```

- view 함수의 참조 값을 그대로 넘김으로써, path 함수가 내부적으로 해당 view 함수를 “필요한 시점에” 사용하기 위해서
  
  (값만 그대로 가지고 있다가 다른 곳에서 필요한 시점에 호출할게~!)

▫️클래스도 Article이라는 클래스를 “호출하지 않고(== model을 인스턴스로 만들지 않고)” 작성하는 이유는 ArticleForm이 해당 클래스를 필요한 시점에 사용하기 위함이다!

▫️ 그리고 아래의 경우에는 인스턴스가 필요한 것이 아닌, 실제 Article 모델의 참조 값을 통해 해당 클래스의 필드나 속성 등을 내부적으로 참조하기 위한 이유도 있음

```python
class Articles(forms.ModelForm):

    class Meta:
        model = Article  
        fields = '__all__'
```

🚫 Meta라는 내부 클래스에 모델 정보를 작성한다. 문법적으로 접근하지 말자🚫

---

---

## ModelForm with view functions

```python
def create(request):
    form = ArticleForm(request.POST)
    if form.is_valid():
        form.save()
        return redirect('articles:detail') # 통과되면 저장 후 상세페이지로
    return redirect('articels:new')        # 통과 못되면 작성페이지로
```

▫️ 원래 사용자로 부터 입력받는 데이터를 이렇게**↓↓** 받았음

```python
title = request.POST.get('title')
content = request.POST.get('content')
```

근데 만약에 입력받는 데이터가 10개~ 100개 늘어나면 일대일로 코드가 늘어남.

데이터는 결국 `request.POST` 라는 속성 값에 들어있다. 그래서 Modelform은 request의 POST 데이터를 첫번째 인자로 한 방에 받는다.

그러면 그 안에 있는 데이터들은 모델정보를 이미 알고 있기 때문에 알아서 맵핑된다.

▫️ `form = ArticleForm(request.POST)`

→ 데이터를 통해서 인스턴스가 만들어졌음.

이 인스턴스를 저장하기 전에 검증을 진행함. 유효성 검증!!

⇒ `form.is_valid()`

---

### “is_valid( )” method

▫️ 유효성 검사를 실행하고, 데이터가 유효한지 여부를 boolean으로 반환

▫️ 데이터 유효성 검사를 보장하기 위한 많은 테스트에 대해 Django는 is_valid( ) 를 제공하여 개발자의 편의를 도움

▫️ is valid 에서 봐야할 것들을 추가할 수 있음. max_length 같은 것!

▫️ field 마다 봐야할 것들이 내부적으로 들어가있음. Char와 Text 같은 ~!

▫️ `form.save()`

ModelForm에서 save 메서드를 호출하면 생성된 객체가 return 됨!

그걸 article 변수로 할당!

```python
def create(request):
    form = ArticleForm(request.POST)
    if form.is_valid():
        form.save()
        return redirect('articles:detail', article.pk)
    return redirect('articels:new') 
```

---

### form 인스턴스의 errors 속성(1/3)

▫️ is_valid( )의 반환 값이 False인 경우 form 인스턴스의 errors 속성에 값이 작성되는데, 유효성 검증을 실패한 원인이 딕셔너리 형태로 저장된다.

- articles/views.py

```python
def create(request):
    form = ArticleForm(request.POST)
    if form.is_valid():
        article = form.save()
        return redirect('articles:detail', article.pk)
    print(f'에러: {form.errors}')
    return redirect('articles:new')
```



---

### The “save()” method

▫️ form 인스턴스에 바인딩 된 데이터를 통해 데이터베이스 객체를 만들고 저장

▫️ ModelForm의 하위 클래스는 키워드 인자 instance 여부를 통해 생성할 지, 수정할 지를 결정함

- 제공되지 않은 경우 save( )는 지정된 모델의 새 인스턴스를 만듦(CREATE)
- 제공되면 save( )는 해당 인스턴스를 수정(UPDATE)

```python
# CREATE
form = ArticleForm(request.POST)
form.save()

#UPDATE
form = ArticleForm(request.POST, instance=article)
form.save()
```

- 아무것도 입력하지 않았을 때 뜨는 팝업 → required

▫️ 이 같은 특징을 통해 다음과 같은 구조로 코드를 작성하면 유효성 검증을 실패 했을 때 사용자에게 실패한 결과 메세지를 출력해줄 수 있다.

```python
def create(request):
        form = ArticleForm(request.POST)
        if form.is_valid():
            article = form.save()
            return redirect('articles:detail', article.pk)
        context = {
            'form':form,
        }
        return render(request, 'articles/new.html', context)
```

---

### UPDATE

▫️ ModelForm의 인자 instance는 수정 대상이 되는 객체(기존 객체)를 지정

1️⃣ request.POST

사용자가 form을 통해 전송한 데이터 (새로운 데이터)

2️⃣ instance

수정이 되는 대상

- articles/views.py(edit)

```python
def edit(request, pk):
        article = Article.objects.get(pk=pk)
        form = ArticleForm(instance=article)
        context = {
            'article':article,
            'form':form,
        }
        return render(request, 'articles/edit.html',context)
```

- articles/edit.html

```python
% extends 'base.html' %}

{% block content %}
  <h1>EDIT</h1>
  <form action="{% url 'articles:update' article.pk %}" method="POST">
    {% csrf_token %}
    {{ form.as_p }}
    <input type="submit">
  </form>
  <hr>
  <a href="{% url 'articles:detail' article.pk %}">뒤로가기</a>
{% endblock content %}
```

- articles/views.py(update)

```python
def update(request, pk):
    article = Article.objects.get(pk=pk)
    form = ArticleForm(request.POST, instance=article)
    if form.is_valid():
        form.save()
        return redirect('articles:detail', article.pk)
    context = {
        'form': form,
    }
    return render(request, 'articles/edit.html', context)
```

❔❔ `form = ArticleFrom(request.POST, instance=aritcle)` 에서 (data=)request.POST, date를 생략하고 있는데 왜 instance는 생략이 안될까?

⇒ data는 baseModelForm(최상위)에서 첫번째 인자다. instance는 뒷쪽에 있어서 명시하지 않으면 클래스가 files로 인식해버리게 된다.



---

### Form과 ModelForm

❗ModelForm이 Form보다 더 좋은 것이 아니라 각자 역할이 다른 것❗

### 🎈 Form

▫️ 사용자로부터 받는 데이터가 ***DB와 연관되어 있지 않는 경우***에 사용

▫️ DB에 영향을 미치지 않고 **단순 데이터만 사용**되는 경우

(ex. 로그인, 사용자의 데이터를 받아 인증 과정에서만 사용 후 별도로 DB에 저장하지 않음)

🎈 ModelForm

▫️ 사용자로부터 받는 데이터가 ***DB와 연관되어 있는 경우***에 사용

▫️ 데이터의 유효성 검사가 끝나면 데이터를 각각 어떤 레코드에 맵핑해야 할지 이미 알고 있기 때문에 곧바로 save() 호출이 가능

(ex.회원가입)
