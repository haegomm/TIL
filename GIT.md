# GIT?

- GIT이란?
  - 분산 버전 관리 시스템

- WHT GIT?
  - **백업, 복구, 협업**을 위해 사용함
  - 기록이 남아 있어서 다시 돌아 갈 수 있음 -> 백업, 복구
  - git이 버전, 파일에 대하여 6하원칙을 써줌, 버전과 파일 공유 -> 협업

- 분산
  - 모두가 버전 전체를 다가지고 있는 형태
  - 분산의 반댓말: 중앙 집중식

- git과 github는 다름
  - git: 분산 버전 관리 프로그램
  - github: git기반의 저장소 서비스


---------------

- interface?
   - 서로 다른 객체(사용자와 컴퓨터)가 만나는 지점. 접점.

-  CLI(command-line interface): 명령줄을 통해서 컴퓨터와 소통할 수 있는 창구

- GUI(graphical user interface): 사용자가 그래픽을 통해 컴퓨터와 소통

----------------

- 경로
  - 절대경로: 절대적 주소
    ex) 대한민국 00시 00구 00동
  - 상대경로: 상대적 위치
    ex) 해곰커피집 옆에 있는 식당

-----------

- CLI명령어
  -  touch : 파일 생성
  -  mkdir : 새 폴더 생성
  -  ls : 디렉토리의 폴더/파일 목록을 보여줌
  -  mv : 폴더/파일을 다른 폴더 내로 이동 or 이름 변경
  -  cd : 현재 작업  중인 디렉토리 변경
  -  rm : 폴더/파일 지움
  -  start, open : 폴더/파일 엶
  
-----------------------
-----------------------

# GIT초기 설정
- 커밋의 기록을 위해 username과 email 설정
 
  *작성자 수정시, 원하는 username과 email을 적고 동일하게 입력*
  ```bash
  git config --global user.name "이름"
  git congig --global user.email "메일 주소"
  ```

- 설정 확인
  ```bash
  git config --global -l
  
  or

  git config --global --list
  ```

-----------------------
-----------------------
# GIT의 3가지 공간
- Working Directory 
  : 사용자의 작업영역

- Staging Area
  : commit을 위한 파일 및 폴더들이 위치하고 있는 영역

- Repository
  : commit(변경사항)을 저장하는 영역


  **why staging area?*
  - 일부분만 커밋
  - 충돌 해결
  - 커밋 다시하기
-----------------------
-----------------------
# Git의 Status(상태)
```bash
git status
```
- Unmodified : 최신 상태
- Modified : 수정 후 아직 Staging Area에 반영하지 않은 상태
- Staged : 수정 후 Staging Area에 추가(git add)한 상태
- Committed : 로컬데이터 베이스에 저장된 상태

-----------------------
-----------------------
# Github에 업로드
- git init : 현재 작업 중인 디렉토리를 Git으로 관리한다는 명령어 *(master)
- git remote : 로컬 저장소에 원격 저장소를 등록, 조회 , 삭제 할 수 있는 명령어
  
1. 등록
   ```bash
   git remote add <이름> <주소>
   ```

2. 조회
   ```bash
   git remote -v
   ```

3. 삭제
   ```bash
   git remote rm <이름>
   ```
   *로컬과 원격 저장소의 연결을 끊는 것 O*
   *원격 저장소 자체 삭제 x*

- 원격 저장소에 업로드
  1. 로컬 저장소에서 커밋 생성
   ```bash
   git status #현재상태 확인
  git add <파일 이름>
  git commit -m "이유"
  git log ---oneline #커밋 확인
  ```

  2. 업로드
   ```bash
   git push origin master
   ```
-------------------
-------------------
# .gitignore

- Git 버전 관리에서 제외할 파일 혹은 버전 지정
-
  *README랑 .gitignore은 프로젝트 생성하고 맨 처음 만들고 시작해야 함*

-------------------
-------------------
# clone, pull
```bash
git clone <원격 저장소 주소>
```
-다운로드
 - 폴더 생성
 - git init
 - git remote add
 - 버전, 파일 생성
  
  *clone은 위의 4가지를 다 해주는 명령어*
<br/><br/>

```bash
git pull origin master
```
-업데이트

