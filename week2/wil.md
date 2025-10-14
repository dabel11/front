# Week2 WIL (Weekly I Learned)
## 이번 주에 배운 것
- JavaScript를 이용해 HTML 요소를 제어하는 방법  
- DOM(Document Object Model)의 개념 이해  
- 버튼 클릭을 통한 화면 조작 및 이벤트 처리  
- 브라우저가 자바스크립트를 실행할 수 있는 이유와 V8 엔진  

## Counter App 만들기
- HTML에서 버튼(`button`), 제목(`h1`), 숫자(`p`)를 구성하여 기본 화면을 만듦  
- 각 버튼과 숫자에 `id` 속성을 부여하여 JavaScript에서 제어 가능하게 함  
- `document.getElementById()`를 통해 특정 태그를 가져와 변수에 저장  
- `textContent`를 변경하여 화면의 숫자 값을 조작함  
- `addEventListener("click", function)`을 이용해 버튼 클릭 시 숫자가 증가하도록 구현  
- script 태그의 `src` 속성으로 외부 JS 파일(app.js) 연결하여 HTML과 JS를 분리  

## script 태그와 실행 순서
- 브라우저는 HTML을 위에서부터 읽으며 DOM 트리를 만듦  
- script 태그를 만나면 HTML 파싱이 중단되어 JS를 먼저 실행  
- 따라서 `script`는 `</body>` 바로 위에 두어야 정상적으로 동작  
- HTML 태그가 모두 로드된 후 JS가 실행되어야 원하는 요소에 접근 가능  

## 브라우저와 JavaScript
- 자바스크립트는 **브라우저 내부의 엔진(V8)** 덕분에 실행 가능  
- V8 엔진(Chrome, 2008년)은 자바스크립트의 속도와 효율을 크게 향상시킴  
- 이 엔진 덕분에 웹 페이지가 단순한 문서에서 벗어나 **웹 애플리케이션(Web App)** 으로 발전함  
- 이후 NodeJS(2009년)가 등장하면서 브라우저 밖에서도 JS를 실행할 수 있게 됨  