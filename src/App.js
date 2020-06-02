import React, { useState } from 'react';

import './App.css';

function App() {

    const [count, setCount] = useState(1);

    const increment = () => setCount(count+1)
    return (
        <div className="App">
            <h1>The count is: {count}</h1>
            <button
                onClick={increment} 
                style={{height: '46px', textAlign: 'center'}}>
                Increment
            </button>
        </div>
    );
}

export default App;
