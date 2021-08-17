//imr cmd
import React, { useState } from 'react';

// sfc cmd
function HelloFunc() {

    const [name, setName] = useState("Akash");
    const [age, setAge] = useState(26);

    return (
        <div>
            <hr />
            Hello From Functional component
            <p>Another Paragraph</p>
            <p>
                Name - {name} <br />
                Age - {age}
            </p>
            <button onClick={() => setAge(40)}>Change Age</button>
        </div>
    )
}

export default HelloFunc;