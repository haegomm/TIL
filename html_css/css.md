## CSS

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



----

### 

### CSS 정의 방법

- 인라인 (inline) : 태그에다가 바로 스타일을 적용
  - 인라인을 쓰게 되면 실수가 잦아짐(중복, 찾기 어려움)
- 내부 참조 (emnedding) - <style>
  - 내부 참조를 쓰게 되면 코드가 너무 길어짐
- 외부 참조 (link file) - 분리된 css파일
  - 가장 많이 쓰는 방식



---



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



---



### CSS 선택자 정리

- 요소 선택자
  
  - HTML 태그를 직접 선택

- 클래스(class) 선택자
  
  - 마침표(.)문자로 시작하며, 해당 클래스가 적용된 항목을 선택

- 아이디(id) 선택자
  
  - #문자로 시작하며, 해당 아이디가 적용된 항목을 선택
  - 일반적으로 하나의 문서에 1번만 사용
  - 여러번 사용해도 동작하지만, 단일 id를 사용하는 것을 권장



---



### CSS 적용 우선순위

범위가 좁을수록 강하다

1. 중요도 (importance) - 사용시 주의
   - !important
2. 우선 순위(Specificity)
   - 인라인 > id > class, 속성, pseudo-class > 요소, pseudo-element
3. CSS 파일 로딩 순서



1.속성 값 뒤에 !important 를 붙인 속성

2.html에서 style을 직접 지정한 속성

3.#id로 지정한 속성

4..클래스, :추상클래스 로 지정한 속성

5.태그이름으로 지정한 속성

6.상위 객체에 의해 상속된 속성



우선순위가 같을 때만 위에서 아래로.

css 명시도

정확하게 명시할 수록 점수가 높음



body > .parent 110

.container 100



---



### CSS 상속

- CSS는 상속을 통해 부모 요소의 속성을 자식에게 상속한다.
  - 속성(프로퍼티) 중에는 상속이 되는 것과 되지 않는 것들이 있다.
  - 상속 되는 것 예시
    - Text 관련 요소 (font, color, text-align), opacity, visibility 등
  - 상속 되지 않는 것 예시
    - Box model 관련 요소 (width, height, margin, padding, border, box-sizing, display), position 관련 요소 (position, top/right/bottom/left, z-index)등



---



### CSS 기본 스타일

### 크기 단위

- PX (픽셀)
  
  - 모니터 해상도의 한 화소인 ‘픽셀’ 기준
  - 픽셀의 크기는 변하지 않기 때문에 고정적인 단위



- %
  
  - 백분율 단위
  - 가변적인 레이아웃에서 자주 사용



- em
  
  - (바로 위, 부모 요소에 대한) 상속의 영향을 받음
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



----



### 색상 단위

- 색상 키워드 ( background-color : red; )
  
  - 대소문자를 구분하지 않음
  - redm blue, black과 같은 특정 색을 직접 글자로 나타냄

- RGB 색상 ( background-color : rgb(0, 255, 0); )
  
  - 16진수 표기법 혹은 함수형 표기법을 사용해서 특정 색을 표현하는 방식
  
  -  +16진수 표기법
  
  - rgb() 함수형 표기법

- HSL 색상 ( background-color : hsl(0, 100%, 50%); )
  
  - 색상, 채도, 명도를 통해 특정 색을 표현하는 방식

- a는 alpha (투명도)



---



### CSS 문서 표현

- 텍스트
  
  - 서체(font-family), 서체 스타일(font-style, font-weight)
  - 자간(letter-spacing), 단어 간격(word-spacing), 행간(line-height)

- 컬러(color), 배경(background-image, background-color)

- 기타 HTML 태그별 스타일링
  
  - 목표(li), 표(table)



---



### Selectors 심화

### 결합자 (Combinators)

- 자손 결합자(공백)
  
  - selectorA 하위의 모든 selectorB 요소

- 자식 결합자(>)
  
  - selectorA 바로 아래의 selectorB 요소

- 일반 형제 결합자(~)
  
  - selectorA의 형제 요소 중 뒤에 위치하는 selectorB 요소를 모두 선택

- 인접 형제 결합자(+)
  
  - selectorA의 형제 요소 중 바로 뒤에 위치하는 selectorB 요소를 선택



---



### CSS Box model

### box-sizing

- 기본적으로 모든 요소의 box-sizing은 content-box
  
  - padding을 제외한 순수 contents 영역만을 box로 지정

- 다만, 우리가 일반적으로 영역을 볼 때는 border까지의 너비를 100px 보는 것을 원함
  
  - 그 경우 box-sizing을 border-box로 설정



---



### CSS Display

### 대표적으로 활용되는 display

- display : block
  
  - 줄 바꿈이 일어나는 요소
  - 화면 크기 전체의 가로 폭을 차지한다
  - 블록 레벨 요소 안에 인라인 레별 요소가 들어갈 수 있다

- display : inline
  
  - 줄 바꿈이 일어나지 않는 행의 일부 요소
  - content 너비만큼 가로 폭을 차지한다
  - width, height, margin-top, margin-bottom을 지정할 수 없다
  - 상하 여백은 line-height로 지정한다



---



### 블록 레벨 요소와 인라인 레벨 요소

- 블록 레벨 요소와 인라인 레벨 요소 구분(HTML 4.1까지)
- 대표적인 블록 레벨 요소
  - div / ul , ol, li / p /hr / form 등
- 대표적인 인라인 레벨 요소
  - span / a / img / input, label / b, em, i, strong 등



---



### display

- display : inline - block
  
  - block 과 inline 레벨 요소의 특징을 모두 가짐
  - inline 처럼 한 줄에 표시할 수 있고, block처럼 width, height, margin 속성을 모두 지정할 수 있음

- display : none
  
  - 해당 요소를 화면에 표시하지 않고, 공간조차 부여되지 않음
  - 이와 비슷한 visibility : hidden은 해당 요소가 공간은 차지하나 화면에 표시만 하지 않는다



----



### CSS position

- 문서 상에서 요소의 위치를 지정

- static : 모든 태그의 기본 값(기준 위치)
  
  - 일반적인 요소의 배치 순서에 따름(좌측 상단)
  - 부모 요소 내에서 배치될 때는 부모 요소의 위치를 기준으로 배치 됨
  
  

- 아래는 좌표 프로퍼티(top, bottom, left, right)를 사용하여 이동 가능

- relative : 상대 위치
  
  - 자기 자신의 static 공간을 남겨두고 이동한다(normal flow 유지)
  - 레이아웃에서 요소가 차지하는 공간은 static일 때와 같다(nomal position 대비 offset)
  
  

- absolute : 절대 위치
  
  - 요소를 일반적인 문서 흐름에서 제거 후 레이아웃에 공간을 차지하지 않음(nomal flow에서 벗어남)
  - static이 아닌 가장 가까이 있는 부모/조상 요소를 기준으로 이동(없는 경우 브라우저 화면 기준으로 이동)



- fixed : 고정 위치
  
  - 요소를 일반적인 문서 흐름에서 제거 후 레이아웃에 공간을 차지하지 않음(nomal flow에서 벗어남)
  - 부모 요소와 관계없이 viewport를 기준으로 이동
    - 스크롤 시에도 항상 같은 곳에 위치함

- sticky : 스크롤에 따라 static → fixed로 변경
  
  - 속성을 적용한 박스는 평소에 문서 안에서 position: static 상태와 같이 일반적인 흐름에 따르지만 스크롤 위치가 임계점에 이르면 position : fixed와 같이 박스를 화면에 고정할 수 있는 속성



---



### absolute vs relative



absolute를 쓸 때는 부모를 잘보자. static인지 아닌지…

div 는 블록이니깐 마진 탑 뭐 이런게 적용이 되고

span은 인라인이니깐 마진 탑 사이즈 이런게 적용이 안됨



---



### CSS 원칙

- CSS 원칙 1,2 : nomal flow
  
  - 모든 요소는 네모(박스모델), 좌측상단에 배치
  - display에 따라 크기와 배치가 달라짐

- CSS 원칙 3
  
  - position으로 위치의 기준을 변경
    - relative : 본인의 원래 위치
    - absolute : 특정 부모의 위치
    - fixed : 화면의 위치
    - sticky : 기본적으로 static이나 스크롤 이동에 따라 fixed로 변경
  
  

---



### CSS Layout

### Flex box

### CSS Flexible Box Layout

- 행과 열 형태로 아이템들을 배치하는 1차원 레이아웃 모델

- 축
  
  - main axis (메인 축)
  - cross axis (교차 축)
  - flex-direction : row

- 구성 요소
  
  - Flex Container (부모 요소)
    - flexbox 레이아웃을 형성하는 가장 기본적인 모델
    - Flex Item들이 놓여있는 영역
    - display 속성을 flex 혹은 inline-flex로 지정
  - Flex Item (자식 요소)
    - 컨테이너에 속해 있는 컨텐츠(박스)



----



### Flex 속성

- 배치 설정
  
  - flex-direction
    
    - main axis 기준 방향 설정
    - 역방향의 경우 HTML 태그 선언 순서와 시각적으로 다르니 유의(웹 접근성에 영향)
  
  - flex-wrap
    
    - 요소들이 강제로 한 줄에 배치 되게 할 것인지 여부 설정
    - 아이템이 컨테이너를 벗어나는 경우 해당 영역 내에 배치되도록 설정
    - 즉, 기본적으로 컨테이너 영역을 벗어나지 않도록 함
    - nowrap(기본 값) : 한 줄에 배치
    - wrap : 넘치면 그 다음 줄로 배치
  
  

- flex-flow
  
  - flex-direction 과 flex-wrap의 shorthand
  - flex-direction 과 flex-wrap에 대한 설정 값을 차례로 작성
    - flex-flow: row nowrap;



- 공간 나누기
  
  - justify-content (main axis)
  
  
  
  - align-content (cross axis)
  
  

- 정렬
  
  - align-items (모든 아이템을 cross axis 기준으로)
  
  
  
  - align-self (개별 아이템)
  
  

- 기타 속성
  
  - flex-grow : 남은 영역을 아이템에 분배
  - order : 배치 순서



- 수직 수평 가운데 정렬

```css
방법1. 컨테이너 설정

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

방법2. 아이템 설정

.container {
    display: flex;
}

.item {
    margin: auto;
}
```



- 카드 배치



```css
#layout_03 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
}
```



```css
#layout_03 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-aorund;
}
```