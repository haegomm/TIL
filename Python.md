# Python Basis
## 변수(Variable)
- 데이터 저장(1개)
- 복잡한 값들 쉽게 사용(추상화)
- 
--------
--------

## 식별자
- 변수 이름 규칙
  - 영문 알파벳, (_), 숫자로 구성
  - 첫 글자에 숫자 X
  - 길이 제한 x, 대소문자 구별
  - 이미 파이썬에서 등록해 놓은 키워드는 예약어로 사용 X
    - ['False' , 'None' , 'True' , '__peg_parser' , 'and' , 'as', 'assert' , 'async' , 'await' , 'break' , 'class' , 'continue' , 'def' , 'del' , 'elif' , 'else' , 'except' , 'finally' , 'for' , 'from' , 'global' , 'if' , 'import' , 'in' , 'is' , 'lambda' , 'nonlocal' , 'not' , 'or' , 'pass' , 'raise' , 'return' , 'try' , 'while' , 'with' , 'yield']
  - 내장 함수나 모듈 등의 이름도 사용 x

--------
--------

## 연산자

- 산술 연산자(Arithmetic Operator)
  - 덧셈 +
  - 뺄셈 -
  - 곱셉 *
  - 나눗셈 /
  - 몫 //
  - ** 거듭제곱

--------
--------

## 자료형

- 수치형
  - int 정수
  - float 부동소수점, 실수
- 문자열 str
- 불린형 True or False
  - and는 2개 다 True면 True
  - or는 1개라도 True면 True
- None 값이 없음을 표현

--------
--------

## 컨테이너

- 여러 개의 데이터를 담을 수 있는 것(객체)으로, 서로 다른 자료형을 저장할 수 있음
- sequence : 인덱스로 접근 할 수 있는 것
  - 리스트, 튜플, 레인지
- non - sequence : 인덱스로 접근 할 수 없는 것
  - 세트, 딕셔너리

<br/><br/>

- 가변형(mutable) 값 수정 O
  - 리스트, 세트, 딕셔너리
- 불변형(immutable) 값 수정 X
  - 튜플, 레인지

--------
- sequence
  - list [] <가변 자료형>
    - 여러 개의 값을 순서가 있는 구조로 저장
    
      *슬라이싱*

      인덱스와 콜론 사용하여 문자열의 특정 부분만 잘라낼 수 있음
      [이상 : 미만 : 간격]
    
    - .append() : 맨 뒤에 대입
    - .extend() : 추가
    - list_a[인덱스] = '다른 값' : 기존 리스트 값 변경

  - tuple () <불변 자료형>
    - 여러 개의 값을 순서가 있는 구조로 저장
      
      *리스트와의 차이 점은 생성 후, 담고 있는 값 변경 불가하다는 것*
      
    - 생성 주의 사항
      - 단일 항목의 경우 값 뒤에 쉼표!

- non - sequence
  - set {} <가변 자료형>
    - 중복되는 요소 없이, 순서에 상관없는 데이터들의 묶음
    - 데이터 중복 허용 X
    - 순서가 없기 때문에 인덱스 이용한 접근 불가능
    - |: 합집합
    
        &: 교집합

        -: 차집합

        ^: 대칭차집합(합집합 - 교집합)

  - dictionary {"key" : "value"} <가변 자료형>
    - 키 - 값(key - value) 쌍으로 이뤄진 자료형
    - key
      - 변경 불가능한 데이터만 활용 가능
      - string, integer, float, boolean, tuple, range
    - values
      - 어떠한 형태든 관계없음

--------
--------
## 형 변환
- 암시적 형 변환
  - 의도 x, 파이썬
- 명시적 형 변환
  - 의도 O, 개발자

--------
# 제어문
- 조건문
- 반복문

- 기본적으로 위에서 아래로
- 코드를 선택적으로 실행 or 반복
- 순서도로 표현 가능
--------
## 조건문
- 참/거짓을 판단할 수 있는 조건식과 함께 사용
  
- 기본 형식
  ```
  if 조건 == True:
      # run this code block
  elseP: 
      # run this code block
  ```
*if 쓰고 실행 코드 적을 때 무조건 들여쓰기 4space*
*input 무조건 문자열이기 때문에 int로 감싸줘야함*

- 복수 조건문
  - elif 활용하여 표현
  ```python
  if 조건:
      # code block
  elif 조건:
      # code block
  elif 조건:
      # code block
  elif:
      # code block
  ```
  - 동시에 검사하는 것이 아니라 1개씩 검사하는 것

- 중첩 조건문
  - 조건문 안의 조건문
  ```
  if 조건:
      # code block
      if 조건:
          # code block
  else:
      # code block
  ````
- 조건 표현식
  - 일반적으로 조건에 따라 값을 정할 때 활용
  - 삼항 연산자 로 부르기도 함
  ```python
  true인 경우 값 if 조건 else false인 경우 값
  ```
--------
--------
# 반복문
- 특정 조건을 만족 할 때까지 같은 동작을 계속 반복하고 싶을 때 사용
<br><br>

## 반복문의 종류
- while 문
  - 종료 조건에 해당하는 코드를 통해 반복문을 종료시켜야 함
- for 문
  - 반복가능한 객체를 모두 순회하면 종료 (별도의 종료 조건이 필요없음)
- 반복 제어
  - break, continue, for - else

### While 문
- 조건식이 참인 동안 반복적으로 코드 실행
  - *while 문은 무한 루프를 하지 않도록 종료 조건이 반드시 필요!!*
  ```python
  while 조건:
      # code block
  ```

- 복합 연산자
  - 연산과 할당을 합친 것
  ```python
  a = a + 1
  a += 1
  ```

--------
### for 문
- 횟수 셀 때? 많이 사용, 컨테이너에 여러 데이터가 담겨있을 때 하나씩 꺼내서 사용
- for문은 시퀀스(string, tuple, list. range)를 포함한 순회 가능한 객체(iterable)의 요소를 모두 순회
  - 처음부터 끝까지 모두 순회하므로 별도의 종료 조건이 필요하지 않음

- Iterable
  - 순회할 수 있는 자료형


- 반복문 제어
  - break
    - 반복문 종료
  - continue
    - continue 이후 코드 블록은 수행하지 않고, 다음 반복을 수행
  - for-else
    - 끝까지 반복문을 실행한 이후에 else 문 실행
      - break를 통해 중간에 종료되는 경우 else 문은 실행되지 않음
  - pass
    - 아무것도 하지 않음(문법적으로 필요하지만, 할 일이 없을 때 사용) - 깍두기
  
--------
--------
# 함수
- 함수 기본 구조
  - 선언(생성)과 호출(사용) (define & call)
  - 입력 (input)
  - 문서화 (Docstring)
  - 범위 (Scope)
  - 결과값 (Output)

재료 - 파라미터

--------
## 함수의 입력
- 직접 변수의 이름으로 특정 아규먼트를 전달할 수 있음

아무것도  없으면 기본이 포지셔닝 아규먼트
