import React from 'react';

class App extends React.Component{
    constructor(props){ 
        // constuctor()는 render()보다 먼저 실행되지만
        // React.Component에 포함된 함수가 아닌 자바스크립트 함수다.
        super(props);
        console.log('hello');
    }

    componentDidMount(){ // 컴포넌트가 처음 화면에 그려지면 실행되는 함수
        console.log('component rendered');
    }

    componentDidUpdate(){ // 화면이 업데이트(화면이 새로 그려지면) 실행
        console.log('I just updated');
    }

    componentWillUnmount(){ // 컴포넌트가 화면에서 떠날 때 실행
        console.log('bye, cruel world');
    }

    state = {
        count : 0,
    };

    add = () => {
        this.setState(current =>({ // current에는 현재 state가 넘어온다.
            count : current.count + 1
        }));
    };

    minus = () => {
        this.setState(current =>({
            count : current.count - 1
        }));
    };

    render() {
        console.log('rendering');
        return (
            <div>
                <h1>The number is {this.state.count}</h1>
                    <button onClick={this.add}>Add</button>
                    &nbsp;
                    <button onClick={this.minus}>Minus</button>
            </div>
        );
        
    }
  
}

export default App;
