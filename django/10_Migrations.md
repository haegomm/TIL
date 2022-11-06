# Migrations



▫️ 모델에 대한 청사진(blueprint)을 만들고 이를 통해 테이블을 생성하는 일련의 과정

▫️ Django가 모델에 생긴 변화(필드 추가, 모델 삭제 등)를 **DB에 반영**하는 방법

------



## makemigrations



🔸 모델을 작성 혹은 변경한 것에 기반한 새로운 migration(설계도, 청사진)을 만들 때 사용

🔸 “테이블을 만들기 위한 **설계도**를 **생성**하는 것”

🔸 명령어 실행 후 migrations/0001_initial.py가 생성된 것을 확인 할 수 있음

🔸 저게 “***파이썬(django)으로 작성된 설계도***”



------

### migrate

🔸 makemigrations로 만든 설계도를 실제 db.sqlite3 DB 파일에 반영하는 과정

🔸 결과적으로 모델에서의 변경사항들과 DB의 스키마가 동기화를 이룸

▫️ “모델과 DB의 **동기화**”

🔸 ***설계도(migration)를 실제 db.sqlite3 DB 파일에 반영***



---



#### [참고]Migration 기타 명령어

✔ `python manage.py showmigrations`

▫️ migration 파일들이 migrate 됐는지 안됐는지 여부를 확인하는 용도

▫️ [X] 표시가 있으면 migrate 가 완료되었음을 의미

✔ `python manage.py sqlmigrate articles 0001`

▫️ 해당 migrations 파일이 SQL 문으로 어떻게 해석 될 지 미리 확인 할 수 있음



------

❓

makemigrations로 인해 만들어진 설계도는 파이썬으로 작성되어 있음

DB는 SQL만 알아 들을 수 있는데…

이때 중간 해석을 담당하는 것이 ORM!!