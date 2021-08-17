import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return ( 
        <p>
           
            <button onClick={decrement}>-</button>
            {" "} {counter} {" "}
            <button onClick={increment}>+</button>
        </p>
     );
}
 
export default Counter;