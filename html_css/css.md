# CSS

**Cascading Style Sheets**

스타일을 지정(선택)하기 위한 언어

html태그를 선택하고 스타일을 지정한다.

### CSS

### CSS 구문


- 끝에는 꼭 ; 를 찍어줘야함.

- CSS구문은 선택자를 통해서 스타일을 지정할 HTML 요소를 선택
- 중괄호 안에서는 속성과 값, 하나의 쌍으로 이루어진 선언을 진행
- 각 쌍은 선택한 요소의 속성, 속성에 부여할 값을 의미
    - 속성(Property) : 어떤 스타일 기능을 변경할지 결정
    - 값(Value) : 어떻게 스타일 기능을 변경할지 결정

### CSS 정의 방법

- 인라인 (inline) : 태그에다가 바로 스타일을 적용
    - 인라인을 쓰게 되면 실수가 잦아짐(중복, 찾기 어려움)
- 내부 참조 (emnedding) - <style>
    - 내부 참조를 쓰게 되면 코드가 너무 길어짐
- 외부 참조 (link file) -  분리된 css파일
    - 가장 많이 쓰는 방식

### CSS Selectors

### 선택자 유형

- 기본 선택자
    - 전체 선택자, 요소 선택자
    - 클래스 선택자, 아이디 선택자, 속성 선택자
    
- 결합자(Combinators)
    - 자손 결합자, 자식 결합자
    - 일반 형제 결합자, 인접 형제 결합자

- 의사 클래스/요소(Pseudo Class)
    - 링크, 동적 의사 클래스
    - 구조적 의사 클래스, 기타 의사 클래스, 의사 엘리먼트, 속성 선택자
    

### CSS 선택자 정리

- 요소 선택자
    - HTML 태그를 직접 선택

- 클래스(class) 선택자
    - 마침표(.)문자로 시작하며, 해당 클래스가 적용된 항목을 선택

- 아이디(id) 선택자
    - #문자로 시작하며, 해당 아이디가 적용된 항목을 선택
    - 일반적으로 하나의 문서에 1번만 사용
    - 여러번 사용해도 동작하지만, 단일 id를 사용하는 것을 권장
    

### CSS 적용  우선순위

범위가 좁을수록 강하다

1. 중요도 (importance) - 사용시 주의
    - !important
2. 우선 순위(Specificity)
    - 인라인 > id > class, 속성, pseudo-class > 요소, pseudo-element
3. CSS 파일 로딩 순서

### CSS 상속

- CSS는 상속을 통해 부모 요소의 속성을 자식에게 상속한다.
    - 속성(프로퍼티) 중에는 상속이 되는 것과 되지 않는 것들이 있다.
    - 상속 되는 것 예시
        - Text 관련 요소 (font, color, text-align), opacity, visibility 등
    - 상속 되지 않는 것 예시
        - Box model 관련 요소 (width, height, margin, padding, border, box-sizing, display), position  관련 요소 (position, top/right/bottom/left, z-index)등

### CSS 기본 스타일

### 크기 단위

- PX (픽셀)
    - 모니터 해상도의 한 화소인 ‘픽셀’ 기준
    - 픽셀의 크기는 변하지 않기 때문에 고정적인 단위

- %
    - 백분율 단위
    - 가변적인 레이아웃에서 자주 사용
    
- em
    - (바로 위,  부모 요소에 대한) 상속의 영향을 받음
    - 배수 단위, 요소에 지정된 사이즈에 상대적인 사이즈를 가짐

- rem
    - (바로 위, 부모 요소에 대한) 상속의 영향을 받지 않음
    - 최상위 요소(html)의 사이즈를 기준으로 배수 단위를 가짐

- viewport
    - 웹 페이지를 방문한 유저에게 바로 보이게 되는 웹 컨텐츠의 영역(디바이스 화면)
    - 디바이스의 viewport를 기준으로 상대적인 사이즈가 결정됨
    - vw, vh, vmin, vmax
    
    - px는 브라우저의 크기를 변경해도 그대로
    - vw는 브라우저의 크기에 따라 크기가 변함

### 색상 단위

- 색상 키워드 ( background-color : red; )
    - 대소문자를 구분하지 않음
    - redm blue, black과 같은 특정 색을 직접 글자로 나타냄
    
- RGB 색상 (  background-color : rgb(0, 255, 0); )
    - 16진수 표기법 혹은 함수형 표기법을 사용해서 특정 색을 표현하는 방식
    - # +16진수 표기법
    - rgb() 함수형 표기법

- HSL 색상 (  background-color : hsl(0, 100%, 50%); )
    - 색상, 채도, 명도를 통해 특정 색을 표현하는 방식
- a는 alpha (투명도)

### CSS 문서 표현

- 텍스트
    - 서체(font-family), 서체 스타일(font-style, font-weight)
    - 자간(letter-spacing), 단어 간격(word-spacing), 행간(line-height)

- 컬러(color), 배경(background-image, background-color)

- 기타 HTML 태그별 스타일링
    - 목표(li), 표(table)
    

### CSS Selectors

### 결합자 (Combinators)

- 자손 결합자(공백)
    - selectorA 하위의 모든 selectorB 요소

- 자식 결합자(>)
    - selectorA 바로 아래의 selectorB 요소

- 일반 형제 결합자(~)
    - selectorA의 형제 요소 중 뒤에 위치하는  selectorB 요소를 모두 선택

- 인접 형제 결합자(+)
    - selectorA의 형제 요소 중 바로 뒤에 위치하는 selectorB 요소를 선택

### CSS Box model

### CSS 원칙1

- 모든 요소는 네모(박스 모델) 이고, 위에서 아래로, 왼쪽에서 오른쪽으로 쌓인다.(좌측 상단에 배치)

### Box model 구성

### box-sizing

- 기본적으로 모든 요소의 box-sizing은 content-box
    - padding을 제외한 순수 contents 영역만을 box로 지정

- 다만, 우리가 일반적으로 영역을 볼 때는 border까지의 너비를 100px 보는 것을 원함
    - 그 경우 box-sizing을 border-box로 설정

### CSS Display

### CSS 원칙2

- 모든 요소는 네모(박스모델)이고, 좌측상단에 배치
- display에 따라 크기와 배치가 달라진다

### 대표적으로 활용되는 display

### CSS position

- 문서 상에서 요소의 위치를 지정
- static : 모든 태그의 기본 값(기준 위치)
    - 일반적인 요소의 배치 순서에 따름(좌측 상단)
    - 부모 요소 내에서 배치될 때는 부모 요소의 위치를 기준으로 배치 됨
    
- relative
    - static의 공간을 남겨두고 이동한다.
    

absolute를 쓸 때는 부모를 잘보자. static인지 아닌지…

div 는 블록이니깐 마진 탑 뭐 이런게 적용이 되고

span은 인라인이니깐 마진 탑 사이즈 뭐 이런게 적용이 안됨