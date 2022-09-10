


# Handing HTTP requests

---

- HTTP request 처리에 따른 view 함수 구조 변화
- new-create 와 edit-update의 view 함수 역할 공통점과 차이점

> 공통점

▫️ new-create ⇒ CREATE 로직을 구현

▫️ edit-update ⇒ UPDATE 로직을 구현

> 차이점

▫️ new와 edit은 GET 요청에 대한 처리만을(페이지 렌더링), create와 update는 POST 요청에 대한 처리만을(실제 DB 조작) 진행

- 이 공통점과 차이점을 기반으로, 하나의 view함수에서 method에 따라 로직이 분리되도록 변경

---

## Create

🔸 new와 create view 함수를 합침

🔸 각각의 역할은 request.method 값을 기준으로 나뉨

- articles/views.py

```python
def create(request):
        if request.method == 'POST':
                form = ArticleForm(request.POST)
                if form.is_valid():
                        article = form.save()
                        return redirect('aritcles.detail', article.pk)
        else:
                form = ArticleForm()
        context = {
                'form':form,
        }
        return render(request, 'articles/new.html',context)
```

(불필요해진 new의 view함수와 url path 삭제)

(new.html → create.html 이름변경 및 action 속성 값 수정)

(new.html → create.html 이름변경으로 인한 템플릿 경로 수정)

(index 페이지에 있던 new 관련 링크 수정)

‼️ ***context의 들여쓰기 위치*** ‼️

▫️ 만약에

```python
def create(request):
        if request.method == 'POST':
                form = ArticleForm(request.POST)
                if form.is_valid():
                        article = form.save()
                        return redirect('aritcles.detail', article.pk)
        else:
                form = ArticleForm()
                context = {
                        'form':form,
                }
                return render(request, 'articles/new.html',context)
```

이렇게 작성하게 되면 if form.is_valid(): 에서 통과하지 못했을 때(false일 때), 이어질 코드가 없게 됨

▫️ 그러나 다음과 같이 작성하면

```python
def create(request):
        if request.method == 'POST':
                form = ArticleForm(request.POST)
                if form.is_valid():
                        article = form.save()
                        return redirect('aritcles.detail', article.pk)
        else:
                form = ArticleForm()
        context = {
                'form':form,
        }
        return render(request, 'articles/new.html',context)
```

if form.is_valid(): 에서 통과하지 못했을 때(false) 에러 정보가 담긴 form 인스턴스가 context로 넘어 갈 수 있게 됨!! 그래서 들여쓰기를 저렇게 해줘야 한다~!

---

## Update

🔸 edit과 update view 함수를 합침

- articles/views.py

```python
def update(request, pk):
        article = Article.objects.get(pk=pk)
        if request.method == 'POST':
                form = ArticleForm(request.POST, instance=article)
                if form.is_valid():
                        form.save()
                        return redirect('articles:detail', article.pk)
        else:
                form = ArticleForm(instance=aritcle)
        context = {
                'form':form,
                'article': article,
        }
        return render(request, 'articles/update.html', context)
```

(불필요해진 edit의 view함수와 url path 삭제)

(edit.html → update.html 이름변경으로 인한 관련 정보 수정)

(index 페이지에 있던 new 관련 링크 수정)

🔸 POST 요청에 대해서만 삭제가 가능하도록 수정

- articles/views.py

```python
def delete(request, pk):
        article = Article.objects.get(pk=pk)
        if request.method == 'POST':
                article.delete()
                return redirect('articles:index')
        return redirect('articles:detail', article.pk)
```

---

‼️ `if request.method == 'POST':` 왜 POST를 먼저? ‼️

⭐ `else:` 는 ‘GET이라면’ ❌ ‘POST가 아니라면’ ⭕

```python
def create(request):
        if request.method == 'POST':
                form = ArticleForm(request.POST)
                if form.is_valid():
                        article = form.save()
                        return redirect('aritcles.detail', article.pk)
        else:
                form = ArticleForm()
        context = {
                'form':form,
        }
        return render(request, 'articles/new.html',context)
```

🔹 if 문은 DB 로직이고 else 문은 DB와 큰 연관이 없다.

🔹 POST를 먼저 보겠다는 것은 POST일 때만 DB관련 코드를 동작 시키고자 함이다.

반면 POST가 아니라면(GET이거나 다른 메서드이거나) DB에 영향이 크게 없는 else문으로 보낸다.

🎀 핵심 🎀

: DB에 접근하는 핵심코드들은 POST 일 때만으로 따로 빼버리고

그게 아닌 일반적인 코드들은 else문으로 보낸다.
