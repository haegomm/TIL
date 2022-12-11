# CRUD with view functions

---

---

## 준비

### 1️⃣ base 템플릿 작성

🔸 bootstrap CDN 및 템플릿 추가 경로 작성

- templates/base.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="<https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css>" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">  <title>Document</title>
  <title></title>
</head>
<body>
  <div class="container">
    {% block content %}
    {% endblock content %}
  </div>
  <script src="<https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js>" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>
```

- crud/settings.py

```python
TEMPLATES = [
    {
        ...,
        'DIRS': [BASE_DIR / 'templates',],
				...
]
```

------

### 2️⃣ url 분리 및 연결

- crud/urls.py

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
		path('admin/', admin.site.urls),
    path('articles/', include('articles.urls')),
]
```

- articles/urls.py

```python
from django.urls import path

app_name = 'articles'
urlpatterns = [
]
```

------

### 3️⃣ index 페이지 작성

- articles/urls.py

```python
from django.urls import path
from . import views

app_name = 'articles'
urlpatterns = [
    path('', views.index, name='index'),
]
```

- articles/views.py

```python
def index(request):
		return render(request, 'articles/index.html')
```

- templates/articles/index.html

```html
{% extends 'base.html' %}

{% block content %}
  <h1>Articles</h1>
{% endblock content %}
```

------

------

## READ 1 (index page)

### 1️⃣ 전체 게시글 조회

🔸 index 페이지에서는 전체 게시글을 조회해서 출력한다.

- articles/views.py

```python
from django.shortcuts import render
from .models import Article

def index(request):
    articles = Article.objects.all()
    context = {
        'articles': articles,
    }
    return render(request, 'articles/index.html', context)
```

- templates/articles/index.html

```html
{% extends 'base.html' %}

{% block content %}
  <h1>Articles</h1>
  <hr>
  {% for article in articles %}
    <p>글 번호 : {{ article.pk }}</p>
    <p>제목 : {{ article.title }}</p>
    <p>내용 : {{ article.content }}</p>
    <hr>
  {% endfor %}
{% endblock content %}
```

------

------

## CREATE

🔸 CREATE 로직을 구현하기 위해서는 2개의 함수가 필요

1. 사용자의 

   입력

   을 받을 

   페이지

   를 

   렌더링

    하는 함수

   - “new” view function

2. 사용자가 입력한 데이터를 전송 받아 

   DB

   에 

   저장

   하는 함수

   - “create” view function

### 1️⃣ New

- articles/urls.py

```python
from django.urls import path
from . import views

app_name = 'articles'
urlpatterns = [
    path('', views.index, name='index'),
    path('new/', views.new, name='new'),
]
```

- articles/views.py

```python
def new(request):
		return render(request, 'articles/new.html')
```

- templates/articles/new.html

```html
{% extends 'base.html' %}

{% block content %}
  <h1>NEW</h1>
  <form action="{% url 'articles:create' %}" method="GET">
    <label for="title">Title: </label>
    <input type="text" name="title" id="title"><br>
    <label for="content">Content: </label>
    <input type="text" name="content" id="content"><br>
    <input type="submit">
  </form>
  <hr>
  <a href="{% url 'articles:index' %}">뒤로가기</a>
{% endblock content %}
```

🔸 new 페이지로 이동할 수 있는 하이퍼 링크 작성

- templates/articles/index.html

```html
{% extends 'base.html' %}

{% block content %}
  <h1>Articles</h1>
  <a href="{% url 'articles:new' %}">NEW</a>
  <hr>
    ...
{% endblock content %}
```

------

### 2️⃣ Create

- articles/urls.py

```python
from django.urls import path
from . import views

app_name = 'articles'
urlpatterns = [
		...
    path('create/', views.create, name='create'),
]
```

- articles/views.py

```python
def create(request):
    # 사용자의 데이터를 받아서
    title = request.GET.get('title')
    content = request.GET.get('content')

    # DB에 저장
    # 1
    # article = Article()
    # article.title = title
    # article.content = content
    # article.save()

    # 2
    article = Article(title=title, content=content)
    article.save()

    # 3
    # Article.objects.create(title=title, content=content)

    # return render(request, 'articles/index.html')
    # return redirect('/articles/')
    # return redirect('articles:index')
    return render(request, 'articles/create.html')
```

🎀 2번째 생성 방식 사용 이유

🤗 추후 데이터가 저장되기 전에 유효성 검사 과정을 진행하기 위함

🤗 유효성 검사가 진행된 후에 save 메서드가 호출되는 구조를 택하기 위함

- 게시글 작성 후 index 페이지로 돌아가도록 함
- articles/views.py

```python
def create(request):

		title = request.GET.get('title')
    content = request.GET.get('content')

		article = Article(title=title, content=content)
    article.save()

	 return render(request, 'articles/index.html')
```

⛔ 2가지 문제점 발생

1. 게시글 작성 후 index 페이지가 출력되지만 게시글은 조회되지 않음
   - create 함수에서 index.html 문서를 렌더링 할 때 context 데이터와 함께 렌더링 하지 않았기 때문
   - index 페이지 url로 다시 요청을 보내면 정상적으로 출력됨
2. 게시글 작성 후 URL은 여전히 create에 머물러 있음
   - index view 함수를 통해 렌더링 된 것이 아니기 때문
   - index view 함수의 반환 값이 아닌 단순히 index 페이지만 render 되었을 뿐

### 💫  “redirect()”

```
  🔸 인자에 작성된 곳으로 요청을 보냄
```

🔸 사용 가능한 인자

1. view name(URL pattern name) `return redirect('articles:index)`
2. absolute or relative URL `return redirect('/articles/')`

🔸 동작 원리

1. 클라이언트가 create url로 요청을 보냄
2. create view 함수의 redirect 함수가 302 status code를 응답
   1. 해당 상태 코드를 응답 받으면 브라우저는 사용자를 해당 URL의 페이지로 이동시킴
3. 응답 받은 브라우저는 redirect 인자에 담긴 주소(index)로 사용자를 이동시키기 위해 index url로 Django에 재요청
4. index page 를 정상적으로 응답 받음(200 status code : 정상)

- articles/views.py ***(redirect 로 수정)***

```python
from django.shortcuts import render, redirect

def create(request):

		title = request.GET.get('title')
    content = request.GET.get('content')

		article = Article(title=title, content=content)
    article.save()

	 return redirect('articles:index')
```

### HTTP request method

### GET 재검토

🔸 현재는 게시글이 작성될 때 /articles/create/?title=11&content=22 와 같은 URL로 요청이 보내짐

🔸 GET 은 쿼리 스트링 파라미터로 데이터를 보내기 때문에 url을 통해 데이터를 보냄 **(????)**

🔸 하지만 현재 요청은 데이터 조회가 아니라 작성을 요청

🔸 HTTP 는 request method를 정의, 주어진 리소스에 수행하길 원하는 행동 나타냄

------

### ***GET***

- 특정 리소스 가져오도록 요청할 대 사용
- 반드시 데이터를 가져올 때만 사용
- DB에 변화 주지 않음
- CRUD에서 R

### ***POST***

- 서버로 데이터 전송할 때 사용
- 서버에 변경사항 만듦
- 리소스를 생성/변경하기 위해 데이터를 HTTP body에 담아 전송
- GET의 쿼리 스트링 파라미넡와 다르게 URL로 보내지지 않음
- CRUD 에서 C/U/D

------

### 💞 POST method 로 바꾸기

- templates/articles/new.html

```html
{% extends 'base.html' %}

{% block content %}
  <h1>NEW</h1>
  <form action="{% url 'articles:create' %}" method="POST">
    <label for="title">Title: </label>
    <input type="text" name="title" id="title"><br>
    <label for="content">Content: </label>
    <input type="text" name="content" id="content"><br>
    <input type="submit">
  </form>
  <hr>
  <a href="{% url 'articles:index' %}">뒤로가기</a>
{% endblock content %}
```

- articles/views.py

```python
from django.shortcuts import render, redirect

def create(request):

		title = request.POST.get('title')
    content = request.POST.get('content')

		article = Article(title=title, content=content)
    article.save()

	 return redirect('articles:index')
```

### csrf_token

🔸 CSRF

- Cross-Site-Request-Forgery
  - “사이트 간 요청 위조”
  - 사용자가 자신의 의지와 무관하게 공격자가 의도한 행동을 하여 특정 웹페이지를 보안에 취약하게 하거나 수정, 삭제 등의 작업을 하게 만드는 공격 방법

🔸 CSRF 공격 방어

- “Security Token 사용 방식(CSRF Token)”
  - 사용자의 데이터에 임의의 난수 값(token)을 부여해 요청마다 해당 난수 값을 포함시켜 전송 시키도록 함
  - 이후 서버에서 요청 받을 때마다 전달된 token 값이 유효한지 검증
  - 일반적으로 데이터 변경이 가능한 POST, PATCH, DELETE Method 등에 적용
  - Django는 DTL에서 csrf_token 템플릿 태그를 제공

------

### | {% csrf_token %}

- 해당 태그가 없다면 Django 서버는 요청에 대해 40
- 템플릿에서 내부 URL로 향하는 Post form 을 사용하는 경우에 사용
  - 외부 URL로 향하는 POST form에 대해서는 CSRF 토큰이 유출 되어 취약성을 유발할 수 있기 때문에 사용해서는 안됨
- 해당 POST 요청이 내가 보낸 것 인지 검증
- templates/articles/new.html

```html
{% extends 'base.html' %}

{% block content %}
  <h1>NEW</h1>
  <form action="{% url 'articles:create' %}" method="POST">
		{% csrf_token %}
    ...
  </form>
  <hr>
  <a href="{% url 'articles:index' %}">뒤로가기</a>
{% endblock content %}
```

------

------

## READ 2 (detail page)

### 1️⃣ urls

🔸 URL로 특정 게시글을 조회할 수 있는 번호를 받음

- articles/urls.py

```python
from django.urls import path
from . import views

app_name = 'articles'
urlpatterns = [
		...
    path('<int:pk>/', views.detail, name='detail'),
]
```

### 2️⃣ views

🔸 Article.object.get(**pk**=**pk**)에서

(왼) **pk** 는 DB에 저장된 레코드의 id 컬럼

(오) **pk** 는 variable routing 을 통해 받은 pk

- articles/views.py

```python
def detail(request, pk):
    # variable routing으로 받은 pk 값으로 데이터를 조회
    article = Article.objects.get(pk=pk)
    context = {
        'article': article,
    }
    return render(request, 'articles/detail.html', context)
```

### 3️⃣ templates

- templates/articles/detail.html

```html
{% extends 'base.html' %}

{% block content %}
  <h1>DETAIL</h1>
  <h2>{{ article.pk }}번째 글입니다.</h2>
  <hr>
  <p>제목 : {{ article.title }}</p>
  <p>내용 : {{ article.content }}</p>
  <p>작성 시각 : {{ article.created_at }}</p>
  <p>수정 시각 : {{ article.updated_at }}</p>
  <hr>
  <a href="{% url 'articles:index' %}">뒤로가기</a>
{% endblock content %}
```

- templates/articles/index.html

```html
{% extends 'base.html' %}

{% block content %}
  <h1>Articles</h1>
  <a href="{% url 'articles:new' %}">NEW</a>
  <hr>
  {% for article in articles %}
    <p>글 번호 : {{ article.pk }}</p>
    <p>제목 : {{ article.title }}</p>
    <p>내용 : {{ article.content }}</p>
    <a href="{% url 'articles:detail' article.pk %}">상세 페이지</a>
    <hr>
  {% endfor %}
{% endblock content %}
```

### 4️⃣ redirect 인자 변경

- articles/views.py

```python
def create(request):
    ...
    return redirect('articles:detail', article.pk)
```

------

------

## DELETE

### 1️⃣ urls

🔸 삭제하고자 하는 특정 글을 조회 후 삭제해야 함

- articles/urls.py

```python
app_name = 'articles'
urlpatterns = [
		...,
    path('<int:pk>/delete/', views.delete, name='delete'),
]
```

------

### 2️⃣ views

- articles/views.py

```python
def delete(request, pk):
    article = Article.objects.get(pk=pk)
    article.delete()
    return redirect('articles:index')
```

------

### 3️⃣ templates

🔸 detail 페이지에 작성하며 DB에 영향을 미치기 때문에 POST method 사용

- templates/articles/detail.html

```html
{% extends 'base.html' %}

{% block content %}
  <h1>DETAIL</h1>
  <h2>{{ article.pk }}번째 글입니다.</h2>
  <hr>
  <p>제목 : {{ article.title }}</p>
  <p>내용 : {{ article.content }}</p>
  <p>작성 시각 : {{ article.created_at }}</p>
  <p>수정 시각 : {{ article.updated_at }}</p>
  <form action="{% url 'articles:delete' article.pk %}" method="POST">
    {% csrf_token %}
    <input type="submit" value="DELETE">
  </form>
  <hr>
  <a href="{% url 'articles:index' %}">뒤로가기</a>
{% endblock content %}
```

------

------

## UPDATE

🔸 수정은 CREATE 로직과 마찬가지로 2개의 view 함수가 필요

1. 사용자의 

   입력

   을 받을 

   페이지

   를 

   렌더링

    하는 함수

   - “edit” view function

2. 사용자가 입력한 데이터를 전송 받아 

   DB

   에 

   저장

   하는 함수

   - “update” view function

### 1️⃣ Edit, Update

- articles/urls.py

```python
app_name = 'articles'
urlpatterns = [
		...,
    path('<int:pk>/edit/', views.edit, name='edit'),
		path('<int:pk>/update/', views.update, name='update'),
]
```

- articles/views.py

```python
def edit(request, pk):
    article = Article.objects.get(pk=pk)
    context = {
        'article': article,
    }
    return render(request, 'articles/edit.html', context)

def update(request, pk):
    article = Article.objects.get(pk=pk)
    article.title = request.POST.get('title')
    article.content = request.POST.get('content')
    article.save()
    return redirect('articles:detail', article.pk)
```

- articles/edit.html

🔸 html 태그의 value 속성을 사용해 기존에 입력 되어 있던 데이터를 출력

```html
{% extends 'base.html' %}

{% block content %}
  <h1>EDIT</h1>
  <form action="{% url 'articles:update' article.pk %}" method="POST">
    {% csrf_token %}
    <label for="title">Title: </label>
    <input type="text" name="title" id="title" value="{{ article.title }}"><br>
    <label for="content">Content: </label>
    <textarea name="content" id="content">{{ article.content }}</textarea>
    <input type="submit">
  </form>
  <hr>
  <a href="{% url 'articles:detail' article.pk %}">뒤로가기</a>
{% endblock content %}
```

- articles/detail.html

```html
{% extends 'base.html' %}

{% block content %}
  <h1>DETAIL</h1>
		...
  <a href="{% url 'articles:edit' article.pk %}">EDIT</a>
  <form action="{% url 'articles:delete' article.pk %}" method="POST">
    {% csrf_token %}
    <input type="submit" value="DELETE">
  </form>
  <hr>
  <a href="{% url 'articles:index' %}">뒤로가기</a>
{% endblock content %}
```