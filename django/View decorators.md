# View decorators

- View decorators를 사용해 view 함수를 단단하게 만들어보자~!
- django.views.decorators.http의 데코레이터를 사용하여 요청 메서드를 기반으로 접근을 제한할 수 있다

---

> 데코레이터(Decorator)

▫️ 기존에 작성된 함수에 기능을 추가하고 싶을 때, 해당 함수를 수정하지 않고 기능을 추가해주는 함수

▫️ Django는 다양한 HTTP 기능을 지원하기 위해 view 함수에 적용 할 수 있는 여러 데코레이터를 제공

---

### [참고] 405 Method Not Allowed

🔸 요청 방법이 서버에게 전달 되었으나 사용 불가능한 상태

(ex. 요청은 왔는데 너 메인페이지 달라고 했으면 GET으로 요청해야해 라고 하는 것)

---

## require_http_methods()

🔸 View 함수가 특정한 요청 method만 허용하도록 하는 데코레이터

- [views.py](http://views.py)

```python
from django.views.decorators.http import require_http_methods

@require_http_methods(['GET', 'POST'])
def create(request):
        pass

@require_http_methods(['GET', 'POST'])
def update(request, pk):
        pass
```

---

## require_POST()

🔸 View 함수가 POST 요청 method만 허용하도록 하는 데코레이터

- [views.py](http://views.py)

```python
from django.views.decorators.http import require_http_method,require_POST

@require_POST
def delete(request, pk)
        article = Article.objects.get(pk=pk)
        article.delete()
        return redirect('articles:index')
```

🔸 url로 delete 시도 후 서버 로그에서 405 http status code 확인해보기



---

### require_safe()

🔸 require_GET 이 있지만 Django에서는 require_safe를 사용하는 것을 권장

- [views.py](http://views.py)

```python
from django.views.decorators.http import require_http_methods, require_POST, require_safe

@require_safe
def index(request):
        ...

@require_safe
def detail(request, pk):
        ...
```
