# Week3 WIL (Weekly I Learned)

## 이번 주에 배운 것
- **React의 필요성과 등장 배경**
  - HTML, JS 파일이 커질수록 유지보수가 어려워지는 문제를 해결하기 위해 등장  
  - 여러 개발자가 동시에 작업해도 충돌이 적은 구조를 제공  
  - 화면을 독립된 단위인 컴포넌트(Component) 로 분리하여 관리  

- **React의 기본 구조**
  - `npx create-react-app 프로젝트 이름` 명령어로 프로젝트 생성  
  - `public/index.html`의 `<div id="root"></div>`는 React가 렌더링하는 영역  
  - `src/index.js`에서 `App` 컴포넌트를 `root`에 렌더링  
  - 각 부분을 함수형 컴포넌트(`function App() { ... }`)로 구성  

- **컴포넌트(Component)**
  - HTML, CSS, JS를 하나의 단위로 묶은 재사용 가능한 UI 조각
  - `App.js`에서 여러 컴포넌트를 import하여 하나의 페이지로 조합  

- **JSX (JavaScript XML)**
  - 자바스크립트 코드 안에 HTML 문법을 작성할 수 있도록 해주는 확장 문법  
  - React는 JSX를 사용해 코드를 간결하게 작성하고, 번역기를 통해 JS로 변환  

- **SPA (Single Page Application)**
  - 한 페이지에서 여러 화면을 전환할 수 있는 웹 구조  
  - 페이지를 새로고침하지 않아도 빠른 전환이 가능  