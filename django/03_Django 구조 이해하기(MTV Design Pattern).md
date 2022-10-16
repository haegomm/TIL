# Django 구조 이해하기(MTV Design Pattern)



## Design Pattern

- 자주 사용되는 소프트웨어 구조를 일반적으로 구조화 해둔 것



### MVC

🔸 Model View Controller

- 하나의 큰 프로그램은 이 세가지로 구분되어 있다.

🔸 Model : 데이터와 관련된 로직을 관리

🔸 View : 레이아웃과 화면 처리(보여지는 것)

🔸 Controller : model과 view 부분으로 연결

- 이걸 장고 버전으로 옮기면 MTV



## Django’s Design Pattern

### MTV



🔸 Model

- 데이터 관련된 로직
- 데이터의 구조를 정의한다.
- 데이터베이스의 기록을 관리



🔸Template

- 레이아웃과 화면 처리
- 화면상의 사용자 인터페이스 구조와 레이아웃 정의
- MVC View



🔸 View

- 모델과 템플릿과 관련한 로직을 처리해서 응답을 반환

- 클라이언트의 요청에 대해 처리를 분기하는 역할

- 동작

  → 데이터가 필요하면, model에 접근해서 데이터를 가져오고

  가져온 데이터를 template로 보내 화면을 구성하고

  구성된 화면을 응답으로 만들어 클라이언트에게 반환