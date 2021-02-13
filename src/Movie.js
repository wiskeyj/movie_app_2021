import React from 'react';
import propTypes from 'prop-types';
// Movie 컴포넌트는 state가 필요하지 않으므로
// 클래스형 컴포넌트가 아니라 함수형 컴포넌트로 작성한다.

function Movie(){
    return <h1></h1>;
}

Movie.propTypes = {};

export default Movie;