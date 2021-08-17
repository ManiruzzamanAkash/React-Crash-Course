//imr cmd
import React, { useState } from 'react';

import Styles from '../components/ChildComponent.module.css'

// sfc cmd
function ChildComponent(props) {
    const [age, setAge] = useState(26);

    const { name, address, setName } = props;
    const { city, area } = address;

    const buttonStyle = {
        backgroundColor: 'red',
        color: '#fff',
        padding: 10,
        borderRadius: 10,
        border: 'none'
    }

    return (
        <div>
            <hr />
            Hello From Functional component
            <p>Another Paragraph</p>
            <p>
                <span className={Styles.name2}>
                    Name - {name} <button style={buttonStyle} onClick={() => setName("Akash")}>Change Name</button> <br />
                </span>
                Age - {age}
                <br />
                <div className="card card-body p-4 m-5">
                    <address>
                        {city} <br />
                        {area} <br />
                    </address>
                </div>
            </p>
            <button style={buttonStyle} onClick={() => setAge(40)}>Change Age</button>
        </div>
    )
}

export default ChildComponent;