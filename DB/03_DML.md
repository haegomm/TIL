# DML

- DML을 통해 데이터 조작(CURD)

---

---

### | sqlite3 사용하기

1. 시작하기
    
    `sqlite3` 
    

1. 데이터베이스 파일 열기
    
    `sqlite> .open mydb.sqlite3` or
    
    `sqlite3 mydb.sqlite3`
    
2. sqlite3 종료하기
    
    `sqlite> .exit`
    

이외는 `.help` 로 찾아보기

---

### | CSV 파일 SQLite 테이블로 가져오기

1. DML.sql 파일 생성

1. 테이블 생성

```sql
CREATE TABLE users ( name TEXT NOT NULL, ... );
```

1. 데이터베이스 파일 열기

`sqlite mydb.sqlite3`

1. 모드(.mode)를 csv로 설정

`sqlite> .mode csv`

1. .import 명령어 사용하여 csv 데이터를 테이블로 가져오기

`sqlite> .import users.csv users`

1. import 된 데이터 확인하기

## Simple query

- SELECT 문 사용하여 단일 테이블 데이터 조회

### SELECT statement

### SELECT

```sql
SELECT column1, column2 FROM table_name;
```

🔸 특정 테이블에서 데이터 조회 위해 사용

🔸 문법 규칙

1. SELECT 절에서 컬럼 또는 쉼표로 구분된 컬럼 목록을 지정
2. FROM 절(clause)에서 데이터를 가져올 테이블을 지정

- 이름, 나이 조회
    
    ```sql
    SELECT name, age FROM users;
    ```
    

- 전체 데이터 조회(*asterisk)
    
    ```sql
    SELECT * FROM users;
    ```
    

- rowid
    
    ```sql
    SELECT rowid, name FROM users;
    ```
    

---

## Sorting rows

### Sorting rows

### ORDER BY

🔸 SELECT 문에 추가하여 결과 정렬

🔸 ORDER BY 절은 FORM 절 뒤에 위치

🔸 하나 이상의 컬럼을 기준으로 결과를 오름차순, 내림차순으로 정렬할 수 있음

- ASC : 오름차순(기본값)
- DESC: 내림차순

- 이름, 나이를 나이가 어린 순서로 조회

```sql
SELECT name, age FROM users ORDER BY age ASC;
SELECT name, age FROM users ORDER BY age;
```

- 이름, 나이를 나이가 많은 순서로 조회

```sql
SELECT name, age FROM users ORDER BY age DESC;
```

- 이름, 나이, 계좌 잔고를 나이가 어린순으로,
    
    만약 같은 나이라면 계좌 잔고가 많은 순으로 정렬해서 조회
    

```sql
SELECT name, age, balance FROM users
ORDER BY age ASC, balance DESC;
```

🔸 ORDER BY 절은 하나 이상의 컬럼을 정렬할 경우

첫 번째 열을 사용하여 정렬하고,

그런 다음 두번째 컬럼을 사용하여 정렬 되어있는 행을 정렬하는 방식

[참고] Sorting NULLs

- NULL의 정렬 방식
- 정렬과 관련하여 SQLite 는 **NULL을 제일 작은 값으로 간주**
- 즉, ASC를 사용하는 경우 결과의 시작부분에 NULL이 표시되고, DESC를 사용하는 경우 결과의 끝에 NULL이 표시됨

## Filtering data

- 데이터를 필터링하여 중복 제거, 조건 설정 등 쿼리 제어

### Clause

### SELECT DISTINCT clause

```sql
SELECT DISTINCT select_list FROM table_name;
```

🔸 조회 결과에서 **중복 행 제거**

🔸 DISTINCT 절은 SELECT 에서 선택적으로 사용할 수 있는 절

🔸 문법 규칙

1. DISTINCT 절은 SELECT 키워드 바로 뒤에 나타나야 함
2. DISTINCT 키워드 뒤에 컬럼 또는 컬럼 목록을 작성

- 중복 없이 모든 지역 조회

```sql
SELECT DISTINCT country FROM users
```

- 지역 순으로 오름차순 정렬하여 중복없이 모든 지역 조회

```sql
SELECT DISTINCT country FROM users ORDER BY country;
```

- 이름과 지역이 중복 없이 모든 이름과 지역 조회

```sql
SELECT DISTINCT name, country FROM users;
```

⚠️ 각 컬럼의 중복을 따로 계산하는게 아니라 두 컬럼을 하나의 집합으로 보고 중복 제거

- 이름과 지역 중복 없이 지역 순으로 오름차순 정렬하여 모든 이름과 지역 조회

```sql
SELECT DISTINCT name, country FROM users ORDER BY country;
```

[참고] NULL with DISTINCT

- SQLite는 **NULL 값을 중복으로 간주**
- NULL 값이 있는 컬럼에 DISTINCT 절을 사용하면 SQLite는 NULL 값의 한 행을 유지

---

### WHERE clause

```sql
SELECT column_list FROM table_name WHERE search_condition;
```

🔸 조회 시 특정 검색 조건 지정

🔸 WHERE 절은 SELECT 문에서 선택적으로 사용할 수 있는 절

- SELECT 문 외에도 UPDATE 및 DELETE 문에서 WHERE 절 사용 가능

🔸 FROM 절 뒤에 작성

🔸 논리연산자, LIKE, IN, BETWEEN

### operators

### 논리연산자

🔸 일부 표현식의 truth를 테스트 할 수 있음

🔸 1, 0 또는 NULL 값을 반환

🔸 SQLite는 Boolean 데이터 타입을 제공하지 않음

1 ⇒ TRUE

0 ⇒ FALSE

🔸 ALL, AND, ANY, BETWEEN, IN, LIKE, NOT, OR 등

- 나이가 30 이상인 사람들 이름, 나이, 계좌 잔고 조회

```sql
SELECT name, age, balance FROM users WHERE age >= 30;
```

- 나이 30살 이상, 계좌 잔고 50만원 초과인 사람들 이름, 나이, 계좌 잔고 조회

```sql
SELECT name, age, balance FROM users WHERE age >= 30 AND balance > 500000;
```

---

### LIKE

🔸 패턴 일치 기반 데이터 조회

🔸 SELECT, DELETE, UPDATE 문의 WHERE 절에서 사용

🔸 기본적으로 대소문자 구분하지 않음

- ‘A’ LIKE ‘a’  ⇒  true

---

💙 SQLite 는 패턴 구성을 위한 2개의 **와일드카드(wildcards)** 제공

1️⃣ %

0 개 이상의 문자가 올 수 있음을 의미

2️⃣ _

단일(1개) 문자가 있음을 의미

---

### | %

🔸 영%

== 영, 영미, 영미리 등

🔸 %도

== 도, 수도, 경기도 등

🔸 %강원%

== 강원, 강원도, 강원도에 살아요 등

---

### | _

🔸 영_

== 영미, 영수, 영호 (2자리인 문자열과 일치)

🔸 _도

== 수도, 과도

---

💛 종합

| 패턴 | 의미 |
| --- | --- |
| 2% | 2로 시작하는 패턴 |
| %2 | 2로 끝나는 패턴 |
| %2% | 2를 포함하는 패턴 |
| _2% | 첫번째 자리에 아무 값 하나 있고
두번째가 2로 시작하는 패턴 (최소 2자리) |
| 1_ _ _  | 1로 시작하는 4자리 패턴 (반드시 4자리) |
| 2_%_% or 2_ _% | 2로 시작하고 최소 3자리인 패턴 (3자리 이상) |

[참고] “wildcards” character

- 파일을 지정할 때, 구체적인 이름 대신에 여러 파일을 동시에 지정할 목적으로 사용하는 특수 기호
    - *, ? 등
- 주로 특정한 패턴이 있는 문자열 혹은 파일을 찾거나, 긴 이름을 생략할 때 쓰임
- 텍스트 값에서 알 수 없는 문자를 사용할 수 있는 특수 문자로,
    
    유사하지만 동일한 데이터가 아닌 여러 항목을 찾기에 매우 편리한 문자
    
- 지정된 패턴 일치를 기반으로 데이터를 수집하는 데도 도움이 될 수 있음

---

- 이름에 ‘호’가 포함되는 사람들 이름 조회

```sql
SELECT name FROM users WHERE name LIKE '%호%';
```

- 이름이 ‘준’으로 끝나는 사람들 이름 조회

```sql
SELECT name FROM users WHERE name LIKE '%준';
```

- 서울 지역 전화번호를 가진 사람들의 이름과 전화번호 조회

```sql
SELECT name, phone FROM users WHERE phone LIKE '02-%';
```

- 나이가 20대인 사람들 이름과 나이 조회

```sql
SELECT name, age FROM users WHERE age LIKE '2_';
```

- 전화번호 중간 4자리가 51로 시작하는 사람들 이름, 전화번호 조회

```sql
SELECT name, phone FROM users WHERE phone LIKE '%-51_ _-%';
```

---

### IN

🔸 값 IN 값 목록 결과에 있는 값 

일치 확인

🔸 표현식이 값 목록의 값과 일치하는지 여부에 따라 true 또는 false를 반환

🔸 IN 연산자의 결과를 부정하려면 NOT IN 연산자 사용

- 경기도 혹은 강원도에 사는 사람들 이름, 지역 조회

```sql
SELECT name, country FROM users 
WHERE country IN ('경기도', '강원도') 
```

```sql
SELECT name, country FROM users 
WHERE country = '경기도' or country = '강원도';
```

- 경기도 혹은 강원도에 살지 않는 사람들 이름,지역 조회

```sql
SELECT name, country FROM users
WHERE counrty NOT IN ('강원도', '경기도');
```

---

### BETWEEN

🔸 값이 값 범위에 있는지 테스트

🔸 값이 지정된 범위에 있으면 true 반환

🔸 SELECT, DELETE, 및 UPDATE 문의 WHERE 절에서 사용할 수 있음

🔸 BETWEEN 연산자의 결과를 부정하려면 NOT BETWEEN 연산자 사용

- 나이가 20살 이상, 30살 이하인 사람들 이름, 나이 조회

```sql
SELECT name, age FROM users WHERE age BETWEEN 20 AND 30;
```

```sql
SELECT name, age FROM users
WHERE age >= 20 AND age <= 30;
```

- 나이가 20 이상, 30 이하가 아닌 사람들 이름, 나이 조회

```sql
SELECT name, age FROM users WHERE age NOT BETWEEN 20 AND 30;
```

```sql
SELECT name, age FROM users
WHERE age < 20 OR age > 30;
```

---

### LIMIT

```sql
SELECT column_list FROM table_name LIMIT row_count;
```

🔸 쿼리에서 반환되는 행 수 제한

🔸 SELECT 문에서 선택적으로 사용할 수 있는 절

🔸 row_count는 반환되는 행 수를 지정하는 양의 정수 의미

- 첫 번째 ~ 열 번째 데이터 rowid와 이름 조회

```sql
SELECT rowid, name FROM users LIMIT 10;
```

- 계좌 잔고가 가장 많은 10명의 이름과 계좌 잔고 조회

```sql
SELECT name, balance FROM users
ORDER BY balance DESC LIMIT 10;
```

⚠️ ORDER BY 절과 함께 사용하여 지정된 순서로 여러 행을 가져올 수도 있음

LIMIT 절에 지정된 행 수를 **가져오기 전**에 결과를 정렬하기 때문

- 나이가 가장 어린 5명의 이름, 나이 조회

```sql
SELECT name, age FROM users
ORDER BY age LIMIT 5;
```

---

### OFFSET

🔸 LIMIT 절을 사용하면 첫 번째 데이터부터 지정한 수 만큼의 데이터를 받아올 수 있지만, OFFSET과 함께 사용하면 특정 지정된 위치에서부터 데이터를 조회할 수 있음

- 11번째 ~ 20번째 데이터 rowid 와 이름 조회

```sql
SELECT rowid, name FROM users
LIMIT 10 OFFSET 10;
# 10번 게시물 이후부터 10개
```

## Grouping data

### GROUP BY clause

```sql
SELECT column_1, aggregate_function(column_2)
FROM table_name
GROUP BY column_1, column_2;
```

🔸 특정 그룹으로 묶인 결과를 생성

🔸 선택된 컬럼 값을 기준으로 데이터(행)들의 공통 값을 묶어서 결과로 나타냄

🔸 SELECT 문에서 선택적 사용 가능

🔸 SELECT 문의 FROM 절 뒤에 작성

- WHERE 절이 포함된 경우 WHERE 절 뒤에 작성해야 함

🔸 각 그룹에 대해 MIN, MAX, SUM, COUNT 또는 AVG 와 같은 

집계 함수(aggregate function)를 적용하여 각 그룹에 대한 추가적 정보 제공

| Aggregate function

~

- users 테이블 전체 행 수 조회

```sql
SELECT COUNT(*) FROM users;
```

- 나이가 30 이상 사람들 평균 나이 조회

```sql
SELECT AVG(age) FROM users WHERE age >= 30;
```

- 각 지역별로 몇 명씩 살고있는지 조회
    - ‘각 지역별’은 지역별로 그룹을 나눈 필요가 있음을 의미
    - 그룹 별로 포함되는 데이터의 수를 구함

```sql
SELECT country, COUNT(*) FROM users GROUP BY country;
```

[참고] COUNT 참고사항

- 이전 쿼리에서 COUNT(), COUNT(age), COUNT(name) 등 어떤 컬럼을 넣어도 결과는 같음
- 현재 쿼리에서는 그룹화 된 country를 기준으로 카운트 하는 것이기 때문에 어떤 컬럼을 카운트해도 전체 개수는 동일하기 때문

- 각 성씨가 몇 명씩 있는지 조회

```sql
SELECT last_name, COUNT(*) FROM users
GROUP BY last_name;
```

+AS 키워드를 사용해 컬럼명을 임시로 변경 조회할 수 있음

```sql
SELECT last_name, COUNT(*) AS number_of_name FROM users 
GROUP BY last_name;
```

- 인원이 가장 많은 성씨 순으로 조회

```sql
SELECT last_name, COUNT(*) FROM users
GROUP BY last_name ORDER BY COUNT(*) DESC;
```

- 각 지역별 평균 나이 조회

```sql
SELECT country, AVG(age) FROM users
GROUP BY country;
```

## Changing data

### INSERT

🔸 새 행을 테이블에 삽입

🔸 문법 규칙

1️⃣ 먼저 INSERT INTO 키워드 뒤에 데이터를 삽입할 테이블의 이름을 지정

2️⃣ 테이블 이름 뒤에 쉼표로 구분된 컬럼 목록을 추가

- 컬럼 목록은 선택 사항이지만 컬럼 목록을 포함하는 것이 권장

3️⃣ VALUES 키워드 뒤에 쉼표로 구분된 값 목록을 추가

- **만약 컬럼 목록을 생략하는 경우**
    
    **값 목록의 모든 컬럼에 대한 값을 지정해야 함**
    
- 값 목록의 값 개수는 컬럼 목록의 컬럼 개수와 같아야 함

- 단일 행 삽입

```sql
INSERT INTO classmates (name, age, address)
VALUES ('홍길동', 23, '서울');
```

```sql
INSERT INTO classmates
VALUES ('홍길동', 23, '서울');
```

- 여러 행 삽입

```sql
INSERT INTO classmates
VALUES
	('홍길동', 23, '서울'),
	('박길동', 24, '대전'),
	('김길동', 25, '부산');
```

---

---

### UPDATE

🔸 테이블에 있는 기존 행의 데이터를 업데이트

🔸 문법 규칙

1️⃣ UPDATE 절 이후에 업데이트 할 테이블을 지정

2️⃣ SET 절에서 테이블의 각 컬럼에 대해 새 값을 설정

3️⃣ WHERE 절의 조건을 사용하여 업데이트할 행을 지정

- WHERE 절은 선택 사항이며, 생략하면 UPDATE 문은 테이블의 모든 행에 있는 데이터를 업데이트 함

4️⃣ 선택적으로 ORDER BY 및 LIMIT 절을 사용하여 업데이트 행 수를 지정할 수 도 있음

- 2번 데이터 이름을 ‘김철수한무두루미’, 주소를 ‘제주도’로 수정하기

```sql
UPDATE classmates
SET name='김철수한무두루미',
		address='제주도'
WHERE rowid = 2;
```

---

---

### DELETE

🔸 테이블에서 행 제거

🔸 테이블의 한 행, 여러 행 및 모든 행을 삭제할 수 있음

🔸 문법 규칙

1️⃣ DELETE FROM 키워드 뒤에 행을 제거하려는 테이블 이름 지정

2️⃣ WHERE 절에 검색 조건 추가하여 제거할 행을 식별

- WHERE 절은 선택사항, 생략하면 DELETE 문은 테이블 모든 행 삭제

3️⃣ 선택적으로 ORDER BY 및 LIMIT 절을 사용하여 삭제 행 수 지정할 수 있음

- 5번 데이터 삭제

```sql
DELETE FROM classmates WHERE rowid = 5;
```

- 삭제 확인

```sql
SELECT rowid, * FROM classmates;
```

- 이름에 ‘영’이 포함되는 데이터 삭제

```sql
DELETE FROM classmates WHERE name LIKE '%영%';
```

- 테이블의 모든 데이터 삭제

```sql
DELETE FROM classmates;
```