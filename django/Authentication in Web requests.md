# Authentication in Web requests

------

## Login

🔸 로그인은 Session을 Create하는 과정

------

### AuthenticationForm

🔹 로그인을 위한 built-in form

▫️ 로그인 하고자 하는 사용자 정보를 입력 받음

▫️ 기본적으로 username과  password를 받아 데이터가 유효한지 검증

🔹 request를 첫번째 인자로 취함

------

### 로그인 페이지 작성

- accounts/urls.py

```python
from django.urls import path
from . import views

app_name = 'accounts'
urlpatterns = [
	path('login/', views.login, name='login'
]
```

- accounts/views.py

```python
from django.shortcuts import render, redirect
from django.contrib.auth import login as auth_login
from django.contrib.auth.forms import AuthenticationForm

def login(request):
		if request.method == 'POST':
				form = AuthenticationForm(request, request.POST)
				# form = AuthenticationForm(request, data=request.POST)
				if form.is_valid():
						auth_login(request, form.get_user())
						return redirect('articles: index')
		else:
				form = AuthenticationForm()
		context = {
				'form': form
		}0
		return render(request, 'accounts/login.html', context)
```

🔹 view 함수 login과의 충돌을 방지하기 위해 import한 login 함수 이름을 auth_login으로 변경해서 사용

🔹 get_user()

▫️ AuthenticationForm의 인스턴스 매서드

▫️ 유효성 검사를 통과했을 경우 로그인 한 사용자 객체를 반환

- accounts/login.html

```python
{% extends 'base.html' %}

{% block content %}
  <h1>LOGIN</h1>
  <form action="" method="POST">
    {% csrf_token %}
    {{ form.as_p }}
    <input type="submit">
  </form>
{% endblock content %}
```

------

### login()

🔹 login(request, user, backend = None)

🔹 인증된 사용자를 로그인 시키는 로직으로 view 함수에서 사용됨

🔹 현재 세션에 연결하려는 인증 된 사용자가 있는 경우 사용

🔹 HttpRequest 객체와 User 객체가 필요

------