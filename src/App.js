/*
import React, { useState } from 'react';
function App() {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count+1)
    return (
        <div data-test="component-app">
            <h1 data-test="counter-display"> The counter is: {count}</h1>
            <button
                data-test="increment-button"
                onClick={increment} 
                style={{height: '46px', textAlign: 'center'}}>
                Increment
            </button>
        </div>
    );
}*/

import React, {Component}   from 'react';
import './App.css'; 
 

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
 
    increment = () => this.setState({count: this.state.count + 1}) 

    render(){
        return(
            <div data-test="component-app" style={{textAlign: 'center'}}>
                <h1 data-test="counter-display"> The counter is: {this.state.count}</h1>
                <button
                    data-test="increment-button"
                    onClick={this.increment.bind(this)} 
                    style={{height: '46px', textAlign: 'center'}}>
                    Increment
                </button>
            </div>
        );
    }
}
 
 


export default App;
