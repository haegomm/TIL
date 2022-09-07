# Django Form

## The Django Form Class

🔸 Django form 관리 시스템의 핵심

django form은 사용자가 보내는 데이터에 대한 주효 유효성 검사 도구다.

---

### Form Class 선언

▫️ Form Class를 선언하는 것은 Model Class 를 선언하는 것과 비슷

비슷한 이름의 필드 타입을 많이 가지고 있음

(이름만 같을 뿐 같은 필드는 아님!)

▫️ Model과 마찬가지로 상속을 통해 선언

(forms 라이브러리 Form 클래스를 상속받음)

▫️ 앱 폴더에 forms.py를 생성 후 ArticleForm Class 선언

```python
# articles/forms.py

from django import forms

class AricleForm(forms.Form):
    title = forms.CharField(max_length=10)
    content = forms.CharField()
```

⚡ Form Class를 forms.py에 작성하는 것은 규약이 아니다

파일 이름이 달라도 되고 [models.py](http://models.py) 나 다른 어디에도 작성이 가능!

다만 더 나은 유지보수의 관점!

그리고 관행적으로 forms.py파일 안에 작성하는 것을 권장하고 있다.

### ‘new’ view 함수 업데이트

- articles/views.py

```python
from .forms import ArticleForm # 명시적 상대경로

def new(request):
    form = AritcleForm()
    context = {
        'form':form,
    }
    return render(request, 'articles/new.html', context)
```

- articles/new.html

```python
{% extends 'base.html' %}

{% block content %}
  <h1>NEW</h1>
  <form action="{% url 'articles:create' %}" method="POST">
    {% csrf_token %}
    {{ form.as_p }}
    <input type="submit">
  </form>
  <hr>
  <a href="{% url 'articles:index' %}">뒤로가기</a>
{% endblock content %}
```

▫️ 업데이트 후 출력을 확인해 보면

view함수에서 정의한 AricleForm의 인스턴스(form)하나로 input과 label 태그가 모두 렌더링 되는 것을 확인할 수 있다.

각 태그의 속성 값들 또한 자동으로 설정되어 있다.

### Form rendering options

- <label> & <input> 쌍에 대한 3가지 출력 옵션

1️⃣ as_p( )

▫️ 각 필드가 단락(<p> 태그)으로 감사져서 렌더링

2️⃣ as_ul( )

▫️ 각 필드가 목록 항목(<li> 태그)으로 감싸져서 렌더링

▫️ <ul> 태그는 직접 작성해야 함

3️⃣ as_table( )

▫️ 각 필드가 테이블(<tr> 태그) 행으로 감싸져서 렌더링

### Django의 2가지 HTML input 요소 표현

1️⃣ Form fields

`forms.CharField( )`

▫️ 입력에 대한 유효성 검사 로직을 처리

▫️ 템플릿에서 직접 사용됨

2️⃣ Widgets

`forms.CharField(widget=forms.Textarea)`

▫️ 웹 페이지의 HTML

❕input 요소의 **단순한 출력 부분 담당**❕

▫️ Widgets은 반드시 form fields에 할당 됨

---

---

## Widgets

- Django의 HTML input element의 표현 담당
- 단순히 HTML 렌더링을 처리하는 것이며 유효성 검증과 아무런 관계가 없음
  - “웹 페이지에서 input element의 단순 raw한 렌더링만을 처리하는 것일 뿐”

> Textarea 위젯 적용해보기

- articles/forms.py

```python
class ArticleForm(forms.Form):
    title = forms.CharField(max_length=10)
    content = forms.CharField(widget=forms.Textarea)
```

> dropdown 위젯 적용해보기

- articles/forms.py

```python
class ArticleForm(forms.Form):
     NATION_A = 'kr'
     NATION_B = 'ch'
     NATION_C = 'jp'
     NATION_CHOICES = [
         (NATION_A, '한국'),
         (NATION_B, '중국'),
         (NATION_C, '일본'),
     ]

     title = forms.CharField(max_length=10)
     content = forms.CharField(widget=forms.Textarea)
     nation = forms.ChoiceField(choices=NATION_CHOICES)
```
