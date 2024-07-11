import React, { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log(`useEffect: ${count}`);
        
        return () => {
            console.log('Cleaning up');
        };
    }, [count]);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };
    
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;
