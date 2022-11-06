# Model

---

🔸 Django는 Model을 통해 데이터에 접근하고 조작

*model과 db는 다름!!*

*db는 django에 포함되지 않음*

🔸 사용하는 데이터들의 필수적인 필드들과 동작들을 포함

🔸 저장된 데이터베이스의 구조( layout)

🔸 일반적으로 각각의 모델은 하나의 데이터 베이스 테이블에 매핑(mapping,

하나의 값을 다른 값으로 대응시키는 것)

모델 클래스 1개 == 데이터베이스 테이블 1개

---

-----

## Model 작성하기

✒️ [models.py](http://models.py) 작성

🔸 모델 클래스를 작성하는 것은 데이터베이스 테이블의 스키마를 정의하는 것

🔸 모델 클래스 == 테이블 스키마

❗ id 칼럼(필드)는 테이블 생성시 Django가 자동으로 생성❗

---

-----

## Model 이해하기

🔸 각 모델은 django.models.Model 클래스의 서브 클래스

▫️ 즉, 각 모델은 django.db.models 모듈의 Model 클래스를 상속받아 구성

▫️ 클래스 상속 기반 형태의 Django 프레임워크 개발

→ 프레임워크에서는 잘 만들어진 도구를 가져다가 잘 쓰는 것~!

---

🔸 models 모듈을 통해 어떠한 타입의 DB 필드(컬럼)을 정의할 것인지 정의

▫️ Article에는 어떤 데이터 구조가 필요한지 정의

▫️ 클래스 변수(인스턴스) title과 content은 DB 필드를 나타냄

---

1️⃣ 클래스 변수(속성) 명

▫️ DB 필드의 이름

---

2️⃣ 클래스 변수 값 (models 모듈의 Field 클래스)

▫️ DB 필드의 데이터 타입

---

---

## Django Model Field

▫️ Django는 모델 필드를 통해 테이블의 필드(컬럼)에 저장할 데이터 유형(INT, TEXT 등) 을 정의

▫️ 데이터 유형에 따라 다양한 모델 필드를 제공

→ DataField(), CharField(), IntegerField() 등



### CharField(max_length=None, **options)

▫️ 길이의 제한이 있는 문자열을 넣을 때 사용

▫️ max_length(최대255)

▫️ 필드의 최대 길이(문자)

▫️ CharField의 필수 인자

▫️ 데이터베이스와 Django의 유효성 검사(값을 검증하는 것)에서 활용됨



### TextField(**options)

▫️ 글자의 수가 많을 때 사용

▫️ max_length 옵션 작성 시 사용자 입력 단계에서는 반영 되지만,

모델과 데이터베이스 단계에는 적용되지 않음(CharField를 사용해야 함)

▫️ 실제로 저장될 때 길이에 대한 유효성을 검증하지 않음
