## SQL

🔸 “Structured Query Language”

🔸 RDBMS의 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어

🔸 RDBMS에서 데이터베이스 스키마를 생성 및 수정할 수 있으며, 테이블에서의 자료 검색 및 관리도 할 수 있음

🔸 데이터베이스 객체에 대한 처리를 관리하거나 접근 권한을 설정하여 허가된 사용자만 RDBMS를 관리할 수 있도록 할 수 있음

🔸 많은 데이터베이스 관련 프로그램들이 SQL 을 표준으로 채택하고 있음

🔹 SQL은 데이터베이스와 상호작용하는 방법



------

### SQL Commands

💛 D**D**L - 데이터 **정의** 언어(Data Definition Language)

- 관계형 데이터베이스 **구조**(테이블, 스키마)를 정의(**생성**, **수정** 및 **삭제**)하기 위한 명령어
- ***CREATE, DROP, ALTER***

💛 D**M**L -  데이터 **조작** 언어(Data Manipulation Language)

- 데이터를 조작(**추가**, **조회**, **변경**, **삭제**)하기 위한 명령어
- ***INSERT, SELECT, UPDATE, DELETE***

💛 DCL - 데이터 제어 언어(Data Control Language)

- 데이터의 보안, 수행제어, 사용자 권하 부여 등을 정의하기 위한 명령어
- GRANT, REVOKE, COMMIT, ROLLBACK



------

### SQL Syntax

🔸 모든 SQL 문satement은 SELECT, INSERT, UPDATE 등과 같은 키워드 인자로 시작하고, 하나의 statement는 세미콜론(:)으로 끝남

- 세미콜론은 각 SQL 문을 구분하는 표준 방법

🔸 SQL 키워드는 대소문자를 구분하지 않음

- SQL문에서 SELECT == select
- 하지만 대문자 작성 권장





###### [참고] Satement & Clause

- Statement(문)
  - 독립적으로 실행할 수 있는 완전한 코드 조각
  - satement는 clause 로 구성됨
- Clause(절)
  - satement의 하위 단위

```sql
SELECT column_name FROM table_name;
```

- SELECT statement라 부름
- 2개의 clause로 구성
  - SELECT column_name
  - FROM table_name