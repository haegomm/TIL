# Namespace



## URL namespace

🔍 URL namespace를 사용하면 서로 다른 앱(ex. articles, pages)에서

동일한 URL 이름(ex. index)을 사용하는 경우에도

이름이 지정된 URL을 고유하게 사용 할 수 있음.

🔸 **app_name** attribute를 작성해 URL namespace를 설정

- articles/urls.py

```python
**app_name** = 'articles'
urlpatterns = [
		...,
]
```

- URL tag의 변화

**{% url** ‘index’ **%}   →   {% url** ‘articles:index’ **%}**

‼️app_name을 지정한 이후에는 url 태그에서 반드시 ***app_name : url_name*** 형태로만 사용해야함‼️

안그러면 NoReverceMatch 에러 발생

------

------



## Template namespace

🔸 Django는 기본적으로 app_name/template/ 경로에 있는 templates 파일들만 찾을 수 있으며, settings.py의 INSTALLED_APPS에 작성한 app 순서로 template을 검색 후 렌더링 함

🔸 바로 이 속성 값이 해당 경로를 활성화 하고 있음

- [settings.py](http://settings.py)

```python
TEMPLATES = [
		{
				...,
				'APP_DIRS':True,
				...
		},
]
```



### | 디렉토리 생성을 통해 물리적인 이름공간 구분

🔸 Django templates의 기본 경로에 app과 같은 이름의 폴더를 생성해 폴더 구조를 app_name/templates/app_name/ 형태로 변경

🔸 Django templates의 기본 경로 자체를 변경할 수는 없기 때문에 물리적으로 이름 공간을 만드는 것

- articles/views.py

```python
return render(request, 'articles/index.html')
```