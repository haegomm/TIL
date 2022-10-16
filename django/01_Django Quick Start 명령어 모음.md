# Django Quick Start 명령어 모음



1. 가상환경 만들기

```
$ python -m venv venv
```



2. 가상환경 활성화

```
$ source venv/Scripts/activate # Windows` `$ source venv/bin/activate # Mac
```



3. 가상환경 비활성화

```
$ deactivate
```



4. django 설치하기

```
pip install django==3.2.13
```



5. 가상환경 패키지 목록 조회

```
$ pip list
```



6. requirements.txt 생성

```
$ pip freeze > requirements.txt
```



7. requirements.txt 목록 설치

```
$ pip install -r requirements.txt
```



8. django 프로젝트 생성

```
$ django-admin startproject firstpjt .
```



9. django 서버 실행

```
$ python manage.py runserver
```



10. django 애플리케이션 생성

```
$ python manage.py startapp articles
```



11. INSTALLED_APPS에 앱을 등록

12. urls.py에 path 등록

13. views.py에 함수 생성

14. template 생성

15. 크롬에서 해당 URL로 요청