# The Django authentication system

------

- Django authentication system(인증 시스템)

  ⇒ 인증(Authentication) 과 권한(Authorization) 부여를 함께 제공(처리)

- 필수 구성은 settings.py에 이미 포함되어 있으며 INSTALLED_APPS에서 확인 가능

  - django.contrib.auth

📌 **Authentication(인증)**

▫️ 신원 확인

▫️ 사용자가 자신이 누구인지 확인하는 것

📌 **Authorization(권한, 허가)**

▫️ 권한 부여

▫️ 인증된 사용자가 수행할 수 있는 작업을 결정

------

## Substituting a custom User model

🔸 “Custom User Model로 대체하기”

▫️ Django는 기본적인 인증 시스템과 여러가지 필드가 포함된 User Model을 제공, 대부분의 개발 환경에서 기본 User Model을 Custom User Model로 대체함

▫️ 개발자들이 작성하는 일부 프로젝트에서는 django에서 제공하는 built-in User model의 기본 인증 요구사항이 적절하지 않을 수 있음

ex) 서비스 회원가입 시 username 대신 email을 식별 값으로 사용하는 경우, Django의 User Model은 기본적으로 username을 식별 값으로 사용하기 때문에 적합하지 않음.

ex) 프로젝트가 진행 된 상황에서 바꿔야 하는 경우, 바꾸기 엄청 어려움

▫️ 그래서 애초에 처음부터 User Model을 쓰지말고 Custom 해서 확장 가능성을 열어두고, 일단 대체해서 사용

▫️ Django는 현재 프로젝트에서 사용할 User Model을 결정하는 AUTH_USER_MODEL 설정 값으로 Default User Model을 재정의 할 수 있도록 함

------

------

## AUTH_USER_MODELJ

🔸 프로젝트에서 User를 나타낼 때 사용하는 모델

🔸 프로젝트가 진행되는 동안(모델을 만들고 마이그레이션 한 후) 변경할 수 없음

🔸 프로젝트 시작 시 설정하기 위한 것이며, 참조하는 모델은 첫 번째 마이그레이션에서 사용할 수 있어야함.

▫️ 즉, 첫번째 마이그레이션 전에 확정 지어야 하는 값

▫️ 다음과 같은 기본 값을 가지고 있음

```python
# settings.py

AUTH_USER_MODEL = 'auth.User'
```

settings.py에 보이지 않음. 사실 settings.py는 global_settings.py를 상속받아 재정의 하는 파일임. 부모에 기본 값이 정의되어 있음

🎀  `auth.User` auth 앱의 User 모델 클래스

: 기본 내장 앱 auth의 User 모델을 가리키는게 아니라 만든 accounts앱의 대체된 User Model로 이 설정 값을 바궈주고 시작해야 함

------

## How to substituting a custom User model

### 대체하기

1️⃣

▫️ AbstractUser를 상속받는 커스텀 User 클래스 작성

▫️ 기존 User 클래스도 AbstractUser 를 상속받기 때문에 User 클래스도 완전히 같은 모습을 가지게 된다.

AbstractUser 핵심적인 유저모델을 구성하는 모든 코드를 들고있음

그러면 AbstractUser 얘만 import 받으면 현재 있는 built in 유저랑 동일한 유저모델을 만들 수 있음

import하고  class 상속받으면 대체된 것!

```python
# accounts/models.py

from django.contrib.auth.models import AbstracUser

class User(AbstractUser):
		pass
```

2️⃣

▫️Django 프로젝트에서 User를 나타내는데 사용하는 모델을 우리가 만든 앱의 커스텀 User로 바꿔주기

```python
# settings.py

AUTH_USER_MODEL = 'accounts.User'
```

프로젝트 중간에는 바꿀 수 없음.

바꾸게 되면 데이터 베이스 초기화 해야함.

이미 내장앱으로ㅓ 만들어진 테이블들ㅇ ㅣ만들어 졌고 그거랑 연계되어 있는 테이블들이 다 의존성을 가져버렸기 때문에 없애고 시작해야함.

3️⃣

▫️admin.py에 커스텀 User 모델을 등록

▫️기본 User 모델이 아니기 때문에 등록하지 않으면 admin site에 출력되지 않음

```python
# accounts/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

admin.site.register(User, UserAdmin)
```

------

### [참고] User 모델 상속 관계

### [참고] AbstractUser

▫️ “관리자 권환과 함께 완전한 기능을 가지고 있는 User model을 구현하는 추상 기본클래스”

▫️Abstract base classes (추상 기본 클래스)

▫️ 몇 가지 공통 정보를 여러 다른 모델에 넣을 때 사용하는 클래스

▫️ 데이터베이스 테이블을 만드는 데 사용되지 않으며, 대신 다른 모델의 기본 클래스로 사용되는 경우 해당 필드가 하위 클래스의 필드에 추가 됨

------

### [주의] 프로젝트 중간에 AUTH_USER_MODEL 변경하기

▫️ 모델 관계에 영향을 미치기 때문에 훨씬 더 어려운 작업이 필요

▫️ 중간 변경은 권장하지 않음(프로젝트 처음에 진행하기)

------

### 데이터베이스 초기화

1️⃣ migrations 파일 삭제

▫️migrations 폴더 및 __ init __.py 는 삭제하지 않음

▫️ 번호가 붙은 파일만 삭제

2️⃣ db.splite3 삭제

3️⃣ migrations 진행

▫️makemigrations

▫️migrate

------

## User 모델 대체

❗Django는 새 프로젝트를 시작하는 경우 비록 User 모델이 충분 하더라도 커스텀 User 모델을 설정하는 것을 강력하게 권장한다(highly recommended)

❗ 커스텀 User 모델은 기본 User 모델과 동일하게 작동하면서도 필요한 경우 나중에 맞춤 설정할 수 있기 때문이다.

▫ 단, User 모델 대체 작업은 프로젝트의 모든 migrations 혹은 첫 migrate를 실행하기 전에 이 작업을 마쳐야 한다.