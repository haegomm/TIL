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
  else: 
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
    ```
  
  *else는 꼭 안써도 됨. 조건이 다 false인 경우 실행하고 싶은 코드가 있는 경우 쓰면 됨.*
  
  ---
  
   조건 표현식
  
  - 일반적으로 조건에 따라 값을 정할 때 활용
  
  - 삼항 연산자 로 부르기도 함
    
    ```python
    true인 경우 값 if 조건 else false인 경우 값
    ```

--------

--------

# 반복문

- 특정 조건을 만족 할 때까지 같은 동작을 계속 반복하고 싶을 때 사용

## 반복문의 종류

- while 문
  - 종료 조건에 해당하는 코드를 통해 반복문을 종료시켜야 함
- for 문
  - 반복가능한 객체를 모두 순회하면 종료 (별도의 종료 조건이 필요없음)
- 반복 제어
  - break, continue, for - else

------

## 

## While 문

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

## for 문

- 횟수 셀 때 많이 사용, 컨테이너에 여러 데이터가 담겨있을 때 하나씩 꺼내서 사용

- for문은 시퀀스(string, tuple, list. range)를 포함한 순회 가능한 객체(iterable)의 요소를 모두 순회

- 처음부터 끝까지 모두 순회하므로 별도의 종료 조건이 필요하지 않음

- Iterable
  
  - 순회할 수 있는 자료형(string, list, dict, tuple, range, set 등)
    - dictionary 순회 : dictionary는 기본적으로 key를 순회하며, key를 통해 값을 활용
  
  - 순회형 함수(range, enumerate)

- for문 문자열(string) 순회
  
  ```python
  chars = input()
  
  for char in chars:
          print(char)
  
  #or
  
  for idx in range(len(chars)):
          print(chars[idx]) 
  ```

- 딕셔너리 순회
  
  - key를 순회하며, key를 통해 값을 활용
  
  ```python
  grades = {'john' : 80, 'eric' : 90}
  for student in grades:
      print(student) 
  #딕셔너리는 키 값을 순회하기 때문에 키 값인 john과 eric만 출력됨.
  
  #키값과 벨류를 같이 출력하고 싶을 때
  grades = {'john' : 80, 'eric' : 90}
  for student in grades:
      print(student)
  ```
  
  - 추가 메서드를 활용한 딕셔너리 순회
    
    - key() : key로 구성된 결과
    
    - values() : value로 구성된 결과
    
    - items() : (key, value)의 튜플로 구성된 결과
      
      ```python
      grades = {'john' : 80, 'eric' : 90}
      for student, grade in grades.items(): #items을 써서 key랑 values뽑아서 key는 student에 values는 grade에 넣음.
          print(student, grade)
      ```
    
    

- enumerate 순회
  
  - enumerate()
    
    - 인덱스와 객체를 쌍으로 담은 열거형(enumerate) 객체 반환
      
      - (index, value)형태의 tuple로 구성된 열거 객체를 반환
      - enumerate를 하면 index랑 값(데이터)를 뽑아옴
      
      ```python
      members = ['민수', '영희', '철수']
      
      for idx, number in enumerate(members):
              print(idx, number)   
      ```



- dictionary comprehension
  
  - 표현식과 제어문을 통해 특정한 값을 가진 딕셔너리를 간결하게 생상하는 방법
    
    ```python
    { key : value for 변수 in interable }
    { key : value for 변수 in interable if 조건식 }# 1~            
    ```

    ```python
    cobic_dict = {}

    for number in range(1, 4)
          cubic_dict[number] = number ** 3
    print(cubic_dict)

    # {1: 1, 2: 8, 3: 27}
    ```

    ```
    cubic_dict = {number: number ** 3 number in range(1, 4)}
    print(cubic_dict)

    # {1: 1, 2: 8, 3: 27}
    ```
    위의 두 코드는 같음.



- 반복문 제어
  
  - break
    - 반복문을 종료
    
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

- 함수를 왜 배울까?
  - Decomposition 분해
    - 기능을 분해하고 재사용 가능하게 만들기 때문에

  - Abstraction 추상화
    - 복잡한 내용을 모르더라도 사용할 수 있도록함.
    - 재사용성과 가독성, 생산성

--------
## 함수의 결과값(Output)

- 값에 따른 함수의 종류
  - Void function
    - 명시적인 return값이 없는 경우, None을 반환하고 종료
    - print(값을 출력만 하고 값을 반환하지는 않음)
      ```python
      print('hello python')
      ```
  
  - Value returning function
    - 함수 실행 후, return문을 통해 값 반환
    - return을 하게 되면, 값 반환 후 함수가 바로 종료
      ```python
      float('3.14')
      ```
  **print 함수와 return의 차이점*
    *print 를 호출(사용)할 때마다 값이 출력됨(주로 테스트를 위해 사용)*
    *데이터 처리를 위해서는 return 사용*
<br/><br/>

***주의***

 *REPL환경(jupyter notebook)에서는 마지막으로 작성된 코드의 리턴 값을 보여주므로 같은 동작을 하는 것으로 착각할 수 있음*

- 튜플을 활용하여 두 개 이상의 값 반환
  - 반환 값으로 튜플 사용
  ```python
  def minus_and_product(x, y):
      return x - y, x * y #문자열, 문자열 하면 자동으로 튜플로 묶여서 반환됨

  y = minus_and_product(4, 5)
  print(y) # (-1, 20)
  print(type(y)) # <class 'tuple'>
  ```

- 함수 반환 정리
  - return X -> None (-> void)
  - return O -> 하나를 반환 -> 여러 개를 원하면, Tuple 활용(혹은 리스트와 같은 컨테이너 활용)

--------

## 함수의 입력(Input)

- **Parameter와 Argument**
  - **Parameter**
    - 함수를 **선언**할 때, 함수 내부에서 사용되는 **변수**
  
  - **Argument** : 함수를 **호출** 할 때, 넣어주는 **값**
    - 함수 호출 시 함수의 parameter를 통해 전달되는 값
    - argument는 소괄호 안에 할당 func_name(argument)
      - 필수 argument : 반드시 전달되어야 하는 argument
      - 선택 argument : 값을 전달하진 않아도 되는 경우는 기본값이 전달

    - positional argument : argument 첫번째가 parameter 첫번째로 들어감
  
    - keyword argument : 직접 변수의 이름으로 특정 argument를 전달
      - *keyword argument 다음에 positional argument를 활용 할 수 없음*
        - *add(x = 2, 5) -> Error 발생!*
  
    - default argument values
      - 기본값을 지정하여 함수 호출 시 argument 값을 설정하지 않도록 함
        - 정의된 것 보다 더 적은 개수의 argument들로 호출될 수 있음
      ```python
      def add(x, y = 0):
          return x + y

        add(2) # 1개만 기본값 설정

      def add(x, y = 0): #순서대로 들어가니깐 x에 2가 들어가고 y는 없어도 자동으로 0
          x = 2
          return x + y
      ```

- 가변 인자(*args)
  - 여러 개의 positional argument를 하나의 필수 parameter로 받아서 사용
  - 몇 개의 positional argument를 받을지 모르는 함수를 정의할 때 유용
  
- 패킹 / 언패킹
  - 패킹
    - 여러 개의 데이터를 묶어서 변수에 할당하는 것
  ```python
  numbers = (1, 2, 3, 4, 5)
  print(numbers) # (1, 2, 3, 4, 5)
  ```

  - 언패킹
    - 시퀀스 속의 요소들을 여러 개의 변수에 나누어 할당하는 것
   ```python
   numbers = (1, 2, 3, 4, 5)
   a, b, c, d, e = numbers
   print(a, b, c, d, e) # 1 2 3 4 5
   ```
    - 언패킹시 변수의 개수와 할당하고자 하는 요소의 갯수가 동일해야함
    - 왼쪽의 변수에 asterisk(*)를 붙이면, 할당하고 남은 요소를 리스트에 담을 수 있음
    ```python
    numbers = (1, 2, 3, 4, 5) # 패킹

    a, b, *rest = numbers # 1, 2를 제외한 나머지를 rest에 대입
    print(a, b, rest) # 1 2 [3, 4, 5]

    a, *rest, e = numbers # 1, 5를 제외한 나머지를 rest에 대입
    print(rest) # [2, 3, 4]
    ```

- Asterisk(*)와 가변 인자
  - *는 시퀀스 언패킹 연산자라고도 불리며, 말 그대로 시퀀스를 풀어 헤치는 연산자
    - 주로 튜플이나 리스트를 언패킹하는데 사용
    - *를 활용하여 가변 인자를 만들 수 있음

- 가변 키워드 인자(**kwargs)
  - 몇 개의 키워드 인자를 받을지 모르는 함수를 정의할 때 유용
  - **kwargs는 딕셔너리르로 묶여 처리되며, parameter에 **를 붙여 표현
  - 문자열로 쓰면 안됨. 'father' X , father O

