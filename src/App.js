import React from 'react';

function Food1(props){
  // 전달받은 props를 props라는 인자로 받아 출력
  return <h1>I Hate {props.fav}</h1>;
}

function Food2({fav}){
  return <h1>I Love {fav}</h1>;
}

function Sentence({fav}){
  return <h3>sure. I Can {fav}</h3>;
}

function App() { // App 컴포넌트 정의
  return (
    <div>
      <h1>Hello~!</h1> 
      <Food1 fav="tomato"/>
      <Food2 fav="tomato"/>
      <Sentence fav="do it"/>
      {/* props에 있는 데이터를 객체로 변환하여 Food 컴포넌트(함수)에 전달 */}
    </div>
  );// App 컴포넌트가 html을 반환
}

export default App;
