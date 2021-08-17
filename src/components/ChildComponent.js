//imr cmd
import React, { useState } from 'react';

// sfc cmd
function ChildComponent(props) {
    const [age, setAge] = useState(26);

    const { name, address, setName } = props;
    const { city, area } = address;

    return (
        <div>
            <hr />
            Hello From Functional component
            <p>Another Paragraph</p>
            <p>
                Name - {name} <button onClick={() => setName("Akash")}>Change Name</button> <br />
                Age - {age}
                <br />
                <address>
                    {city} <br />
                    {area} <br />
                </address>
            </p>
            <button onClick={() => setAge(40)}>Change Age</button>
        </div>
    )
}

export default ChildComponent;