# ORM

----

🔸 Object-Relational-Mapping

🔸 객체 지향 프로그래밍에서 데이터베이스를 연동할 때,

객체 지향 프로그래밍 언어를  사용하여 *호환되지 않는 유형의 시스템 간*에(Django ↔ SQL)

*데이터를 변환하는 프로그래밍 기술*

🔸 Django는 내장 Django ORM을 사용



## ORM 장단점과 사용 이유

😊 장점

▫ SQL을 잘 알지 못해도 객체지향 언어로 DB 조작 가능

▫ 객체 지향적 접근으로 인한 높은 생산성



😥 단점

▫ ORM 만으로 완전한 서비스를 구현하기 어려운 경우가 있음



👀 사용 이유

▫  “생산성”

▫ DB를 객체(object)로 조작하기 위해 ORM을 사용

------



## 추가 필드 정의



### Model 변경사항 반영하기

▫ models.py에 변경사항이 생겼을 때 추가 모델 필드 작성 후 다시 한번 makemigrations 진행

```
python manage.py makemigrations
```

▫기존에 id, title, content 컬럼을 가진 테이블에 2개의 컬럼이 추가되는 상황

▫ Django 입장에서는 이미 존재하는 테이블에 새로운 칼럼이 추가되는 요구 사항을 받았는데

이 컬럼들은 기본적으로 빈 값으로 추가될 수 없음

▫ 그래서 Django는 우리에게 추가되는 컬럼에 대한 기본 값을 설정해야 하니 어떻게 어떤 값을 설정할 것인지를 물어보는 과정을 진행



▫ 각 보기 번호의 의미

1. 다음 화면으로 넘어가서 새 컬럼의 기본 값을 직접 입력하는 방법
2. 현재 과정에서 나가고 모델 필드에 default 속성을 직접 작성하는 방법

▫ “1”을 입력 후 Enter ( created_at 필드에 대한 default 값 설정)



▫다음 화면에서 아무것도 입력하지 않고 Enter를 입력하면

Django에서 기본적으로 파이썬의 timezone 모듈의 now 메서드 반환 값을 기본 값으로 사용하도록 해줌

▫ 새로운 설계도(마이그레이션 파일)가 만들어진 것을 확인

▫ 새로운 설계도를  생성했기 때문에 DB와 동기화를 진행해야 함

```
python manage.py migrate
```

(아직 DB에는 변경사항을 반영하지 않았기 때문)



### **‼반드시‼ 기억해야 할 migration 3단계**

1️⃣ models.py에서 변경사항이 발생하면

2️⃣ migrations 파일 생성 (설계도 생성)

```
makemigrations
```

3️⃣ DB 반영 (모델과 DB의 동기화)

```
migrate
```

------



### ✔ DateTimeField()

▫ Python의 datetime.datetime 인스턴스로 표시되는 날짜 및 시간을 값으로 사용하는 필드

▫ DateField를 상속받는 클래스

▫선택인자

1️⃣ **auto_now_add**

▫최초  생성 일자(Useful for creation of timestamps)

▫Django ORM 최초 insert(테이블에 데이터 입력)시에만 현재 날짜와 시간으로 갱신(테이블에 어떤 값을 최초로 넣을 때)

2️⃣ **auto_now**

▫최초 수정 일자(Useful for “last-modified” timetamps)

▫Django ORM 이 save를 할 때마다 현재 날짜와 시간으로 갱신

------

------



### Model 이란

### “웹 애플리케이션의 데이터를 구조화 하고 조작 하기 위한 도구”