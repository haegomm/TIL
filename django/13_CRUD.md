# CRUD



## CREATE

### 데이터 객체를 만드는 3가지 방법

1️⃣

1. article = Article()
   - 클래스를 통한 인스턴스 생성
2. article.title
   - 클래스 변수명과 같은 이름의 인스턴스 변수를 생성 후 값 할당
   - save 메서드를 호출해야 DB에 데이터가 저장 됨(레코드 생성)
3. article.save()
   - 인스턴스로 save 메서드 호출

2️⃣ 인스턴스 생성 시 초기 값을 함께 작성하여 생성

3️⃣ QuerySet API 중 create() 메서드 활용



### The [“save()”](https://www.notion.so/Django-ModelForm-63d5ce49f06141069c3c60c057843784) method

🔸 “saving object”

🔸 객체를 데이터베이스에 저장함

🔸 데이터 생성 시, save를 호출하기 전 id 값은 None

​	- id 값은 Django가 아니라 데이터베이스에서 계산되기 때문

🔸 단순히 모델 클래스를 통해 인스턴스를 생성하는 것은 DB에 영향을 미치지 않기 때문에 반드시 save 를 호출해야 테이블에 레코드가 생성됨



------

------



## READ

### all()

🔸 전체 데이터 조회



### get()

🔸 단일 데이터 조회

🔸 객체를 찾을 수 없으면 DoesNotExist 예외를 발생시키고, 둘 이상의 객체를 찾으면 MultipleObjectsReturned 예외를 발생시킴

🔸 위와 같은 특징을 가지고 있기 때문에 **primary key와 같이 고유성을 보장하는 조회에서 사용해야 함**



### filter()

🔸 지정된 조회 매개 변수와 일치하는 객체를 포함하는 새 QuerySet을 반환



### Field lookups

🔸 특정 레코드에 대한 조건을 설정하는 방법

🔸 QuerySet 메서드 filter(), exclude() 및 get()에 대한 키워드 인자로 지정됨



------

------



## UPDATE

### update 과정

1️⃣ 수정하고자 하는 article 인스턴스 객체를 조회 후 반환 값을 저장

2️⃣ article 인스턴스 객체의 인스턴스 변수 값을 새로운 값으로 할당

3️⃣ save() 인스턴스 메서드 호출



```python
article = Article.objects.get(pk=1)    # 수정하고자 하는 article 인스턴스 객체 조회 후 반환 값 저장
article.title = 'hi'                   # 인스턴스 변수 변경
article.save()                         # 저장

article.title
>>> 'hi'
```

------

------



## DELETE

### Delete 과정

1️⃣ 삭제하고자 하는 article 인스턴스 객체를 조회 후 반환 값을 저장

2️⃣ delete() 인스턴스 메서드 호출

```python
article = Article.objects.get(pk=1)    # 삭제하고자 하는 article 인스턴스 객체 조회 후 반환 값 저장
article.delete()                       # 삭제
```



##### [참고] **str**()

- 표준 파이썬 클래스의 메서드인 str()을 정의하여 각각의  object가 사람이 읽을 수 있는 문자열을 반환(return)하도록 할  수 있음