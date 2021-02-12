import React from 'react';

function Food({ name, picture }){
  return (
    <div>
      <h2>I Love {name}</h2>
      <img src={picture}/>
    </div>
    );
}

const foodLike = [
  {
    name : 'Mint',
    image : 'http://www.baskinrobbins.co.kr/upload/product/1530775682.png',
  },
  {
    name : 'Tteokbokki',
    image : 'https://media.istockphoto.com/photos/tteokbokki-with-eggs-in-gray-bowl-on-concrete-table-top-tteokbokki-is-picture-id1253629795?k=6&m=1253629795&s=612x612&w=0&h=gbHUJQQQa8KVRPEQi-98JvrLtx9wPF7GlkNIQD6hj9s=',
  },
  {
    name : 'Americano',
    image : 'http://image.auction.co.kr/itemimage/18/79/2f/18792f67a6.jpg',
  },
]; 

function App() { // App 컴포넌트 정의
  return (
    <div>
      {foodLike.map(dish => (
        <Food name={dish.name} picture={dish.image}/>
      ))}
    </div>
  ); // dish에 foodLike의 원소가 하나씩 넘어오면 그 값을 name props에 전달한다.
}

export default App;
