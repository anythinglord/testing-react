import React, { useState } from 'react';

import './App.css';

function App() {

    const [count, setCount] = useState(1);

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
}

export default App;
