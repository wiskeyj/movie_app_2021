import React from 'react';
import axios from 'axios';

class App extends React.Component{
    state = {
        isLoading : true,
        movies : [],
    };

    getMovies = async () =>{ // async : getMovies()가 비동기 함수 - 시간이 필요함을 javascript에 알림
        const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
        //await : axios.get()의 실행을 기다리라 지시
    }

    componentDidMount(){
        this.getMovies();
    }

    render(){
        const {isLoading} = this.state;
        return <div>{isLoading ? 'Loading. . . ' : 'we are ready' }</div>;
    }
}

export default App;
