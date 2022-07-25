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
--------
