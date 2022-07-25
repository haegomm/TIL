
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
    ```
  
  y = minus_and_product(4, 5)
  print(y) # (-1, 20)
  print(type(y)) # <class 'tuple'>
  
  ```
  
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
          ```
        
        add(2) # 1개만 기본값 설정
      
      def add(x, y = 0): #순서대로 들어가니깐 x에 2가 들어가고 y는 없어도 자동으로 0
      
          x = 2
          return x + y
      
      ```
      
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
      ```
    
    a, b, *rest = numbers # 1, 2를 제외한 나머지를 rest에 대입
    print(a, b, rest) # 1 2 [3, 4, 5]
    
    a, *rest, e = numbers # 1, 5를 제외한 나머지를 rest에 대입
    print(rest) # [2, 3, 4]
    
    ```
    
    ```

- Asterisk(*)와 가변 인자
  
  - *는 시퀀스 언패킹 연산자라고도 불리며, 말 그대로 시퀀스를 풀어 헤치는 연산자
    - 주로 튜플이나 리스트를 언패킹하는데 사용
    - *를 활용하여 가변 인자를 만들 수 있음

- 가변 키워드 인자(**kwargs)
  
  - 몇 개의 키워드 인자를 받을지 모르는 함수를 정의할 때 유용
  - **kwargs는 딕셔너리르로 묶여 처리되며, parameter에 **를 붙여 표현
  - 문자열로 쓰면 안됨. 'father' X , father O

## 함수의 입력

- 직접 변수의 이름으로 특정 아규먼트를 전달할 수 있음

아무것도  없으면 기본이 포지셔닝 아규먼트

--------------------------------

input  한 줄, 문자열

int input 문자열에도 적용

print 출력할 수 있는 함수이며, 자동적으로 줄바꿈 발생

콤마(,)를 이용해 여러 인자를 넣으면 공백을 기준으로 출력

end : print의 본질을 바꾼다 : print는 줄바꿈을 바꿔줌. 그러나 end를 사용해서 그 줄바꿈이라는 본질을 다른 행동으로 바꿔줌

sep 구분자 : 공백이 구분자였는데 sep으로 설정해서 바꿔줌.

---

재귀함수

좁은 범위의 하위로 내려가야 마지막이 있음.

자기 자신을 반복하면서 하위까지 내려가서 해결하고 다시 올라오는.

재귀로 표현할 수 있다면 반복문으로 표현 가능하고, 반복문으로 표현할 수 있다면 재귀로 표현가능

재귀는 반복문보다 대채적으로 더 직관적이고 코드가 간결하다. 그러나 시간적/공간적 효율이 떨어진다. 따라서 문제와 상황에 따라 더 적절한걸 선택

재귀 작성 방법

1. 종료조건

가장 하위 문제에 도달 시 재귀를 종료할 수 있는 조건문

2. 점화식

재귀함수를 호출하는 식 . 좁은 범위의 하위 문제 정의