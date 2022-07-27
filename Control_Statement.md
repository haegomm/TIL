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

## 반복문의 종류

- while 문
  - 종료 조건에 해당하는 코드를 통해 반복문을 종료시켜야 함
- for 문
  - 반복가능한 객체를 모두 순회하면 종료 (별도의 종료 조건이 필요없음)
- 반복 제어
  - break, continue, for - else

------

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