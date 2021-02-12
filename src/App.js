import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }){
  return (
    <div>
      <h2>I Love {name}</h2>
      <h4>☆{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
    );
}

const foodLike = [
  {
    id : 1,
    name : '민초초',
    image : 'http://www.baskinrobbins.co.kr/upload/product/1530775682.png',
    rating : 5.0,
  },
  {
    id : 2,
    name : '떡볶이',
    image : 'https://media.istockphoto.com/photos/tteokbokki-with-eggs-in-gray-bowl-on-concrete-table-top-tteokbokki-is-picture-id1253629795?k=6&m=1253629795&s=612x612&w=0&h=gbHUJQQQa8KVRPEQi-98JvrLtx9wPF7GlkNIQD6hj9s=',
    rating : 4.0,
  },
  {
    id : 3,
    name : '얼죽아',
    image : 'http://image.auction.co.kr/itemimage/18/79/2f/18792f67a6.jpg',
    rating : 4.5,
  },
]; 

function App() { // App 컴포넌트 정의
  return (
    <div>
      {foodLike.map(dish=> (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  ); // dish에 foodLike의 원소가 하나씩 넘어오면 그 값을 name props에 전달한다.
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number,
};

export default App;
