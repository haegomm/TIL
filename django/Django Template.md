# Django Template

- “데이터 표현을 제어하는 도구이자 표현에 관련된 로직”



## Django Template Language(DTL)

🔸 Django template에서 사용하는  built-in template system

🔸 조건, 반복, 변수 치환, 필터 등의 기능 제공

- Python 처럼 일부 프로그래밍 구조(if, for 등)을 사용할 수 있지만

  ❌ Python 코드로 실행되는 것이 아님!! ❌

⚠️ Django template 시스템은 단순히 Python이 HTML에 포함 된 것이 아님!

🔸 로직❌ 표현⭕을 위한 것



## DTL Syntax

### {{ Variable }}

- 변수명은 영어, 숫자와 밑줄의 조합으로 구성가능

  BUT, 밑줄로 시작할 수 없음

- dot(.)을 사용하여 변수 속성 접근

- render()의 세번째 인자

  {’key’:value} 와 같이 딕셔너리 형태로 넘겨줌

  여기서 정의한 key에 해당하는 문자열이 template에서 사용 가능한 변수명이 됨

  

------



### {{ Variable | filter }}

- 표시할 변수를 수정 할 때 사용
- 60개의 built-in template filter 를 제공
- chained가 가능하며 일부 필터는 인자를 받기도 함

------



### {% tag %}

- 출력 텍스트를 만들거나, 반복 또는 논리(for, if 와 같은 것)를 수행하여 제어 흐름을 만드는 등

  변수보다 복잡한 일들을 수행

- 일부 태그는 시작과 종료 태그 필요

- 약 24개의 built-in template tags를 제공

------



### {# comments #}

- Django template에서 주석을 표현하기 위해 사용
- 한 줄 주석에만 사용 할 수 있음(줄 바꿈 허용 안됨)
- 여러 줄 주석 ⇒ `{% comment %} 여러 줄 주석 {% endcomment %}`

------



# Template inheritance

🔸 코드의 재사용성

🔸 템플릿 상속을 사용하면 사이트의 모든 공통 요소를 포함하고, 하위 템플릿이 재정의 할 수 있는 블록을 정의하는 ‘skeleton’ 템플릿을 만들 수 있음

------



### {% extens ‘’ %}

- 자식(하위)템플릿이 부모 템플릿을 확장한다는 것을 알림

❗ 반드시 템플릿 최상단에 작성 되어야 함 (즉, 2개 이상 사용할 수 없음!)❗



### {% block content %}

### {% endblock content %}

- 하위 템플릿에서 재지정할 수 있는 블록
- 즉, 하위 템플릿이 채울 수 있는 공간
- 가독성을 높이기 위해 선택적으로 endblock 태그에 이름을 지정할 수 있음

------



### base 템플릿 경로 추가하기

- [settings.py](http://settings.py)

```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates',],
				...
```