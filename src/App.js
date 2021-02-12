import React from 'react';

function Potato(){
  return <h1>I Hate Potato!!!</h1>;
}

function App() { // App 컴포넌트 정의
  return (
    <div>
      <h1>Hello~!</h1> 
      <Potato />
    </div>
  );// App 컴포넌트가 html을 반환
}

export default App;
