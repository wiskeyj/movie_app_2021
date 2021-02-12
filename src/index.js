import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // App 컴포넌트를 임포트하여 사용

ReactDOM.render(<App /> ,document.getElementById('root'));

// <App />은 HTML 태그가 아니다.
// <App />을 ReactDOM.render()함수의 첫 번째 인자로 전달하면 App 컴포넌트가 반환하는 것들을 화면에 그릴 수 있다.
// <App />을 ReactDOM.render()함수의 두 번째 인자에 App 컴포넌트가  그려질 위치를 전달한다.
// -> App 컴포넌트는 아이디가 root인 엘리먼트에 그려질 것 이다.