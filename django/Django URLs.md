# Django URLs



## Variable routing

🔸 ***URL 주소를 변수로 사용***하는 것을 의미

🔸 URL의 일부를 변수”<>”로 지정하여 view 함수의 인자로 넘길 수 있음

🔸 즉, 변수 값에 따라 하나의 path()에 여러 페이지를 연결 시킬 수 있음

- url.py

```python
# str
urlpatterns = [
		path('hello/<name>/', views.hello),
	]

# int +경아언니 설명+
urlpatterns = [
		path('<int:id>/', views.hello),
	]
```

http://127.0.0.1:8000/fruits/2/  페이지가 요청되면 http://127.0.0.1:8000/fruits/[int:pk](int:pk)/ 가 적용되어 pk에 2가 저장되고 views.hello 함수실행

```

```

- articles/views.py

```python
def hello(request, name):
		context = {
				'name': name,
	}
	return render(request, 'hello.html', context)
# +경아언니 설명+

def hello(request, id):
		article = Article.objects.get(id=id)
		context = {
				'article': article,
	}
	return render(request, 'article/hello.html', context)
```

hello 함수 호출 시 전달되는 매개변수가 request 외에 id가 추가 됨 매개변수 id에는 URL 매핑시 저장된 id가 전달됨 http://127.0.0.1:8000/fruits/2/ 페이지가 요청되면 매개변수 id에 2가 세팅되어 hello 함수 실행

```

```

- hello.html

```html
{% extends 'base.html' %}
{% block content %}
  <h1>만나서 반가워요 {{ name }}님!</h1>
{% endblock content %}
```

### [참고] Routing(라우팅)

- 어떤 네트워크 안에서 통신 데이터를 보낼 때 최적의 경로를 선택하는 과정

------

------

## App URL mapping

- 앱이 많아졌을 때 urls.py를 각 app에 매핑하는 방법을 이해하기
- app의 view 함수가 많아지면서 사용하는 path() 또한 많아지고,
- app 또한 더 많이 작성되기 때문에 프로젝트의 urls.py에서 모두 관리하는 것은 프로젝트 유지보수에 좋지 않음
- 하나의 프로젝트의 여러 앱이 존재한다면, 각각의 앱 안에 urls.py을 만들고 프로젝트 urls.py에서 각 앱의 [urls.py](http://urls.py) 파일로 URL 매핑을 위탁할 수 있음
- app1/urls.py

```python
from django.urls import path
```

- app2/urls.py

```python
from django.urls import path
```

------

## Including other URLconfs

🔸 urlpattern은 언제든지 다른 URLconf 모듈을 포함(include)할 수 있음

‼️ include되는 앱의 urls.py에 urlpatterns가 작성되어 있지 않다면 에러가 발생.

빈리스트라도 작성되어 있어야 함!

- firstpjt/urls.py

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
		path('admin/', admin.site.urls),
		path('articles/', **include**('articles.urls')),
		path('pages/', **include**('pages.urls')),
]
```

### | include

- 다른 URLconf(app1/urls.py)들을 참조할 수 있도록 돕는 함수
- 함수 include()를 만나게 되면 URL의 그 시점까지 일치하는 부분을 잘라내고, 남은 문자열 부분을 후속 처리를 위해 include된 URLconf로 전달



------

------

## Naming URL patterns

🔸 DTL의 Tag 중 하나인 URL 태그를 사용해서 “path()”함수에 작성한 name을 사용할 수 있음

🔸 이를 통해 URL 설정에 정의된 특정한 경로들의 의존성을 제거할 수 있음

🔸 Django는 URL에 이름을 지정하는 방법을 제공함으로써 view 함수와 템플릿에서 특정 주소를 쉽게 참조할 수 있도록 도움

### | {% url ‘’ %}

- 주어진 URL 패턴 이름 및 선택적 매개 변수와 일치하는 절대 경로 주소를 반환
- 템플릿에 URL을 하드 코딩하지 않고도 DRY 원칙을 위반하지 않으면서 링크를 출력하는 방법

```html
<a href="{% url 'index' %}">BACK</a>
```

### [참고] DRY 원칙

- Don’t Repeat Yourself 의 약어
- 더 품질 좋은 코드를 작성하기 위해서 알고, 따르면 좋은 소프트웨어 원칙들 중 하나로 “소스 코드에서 동일한 코드를 반복하지 말자” 라는 의미