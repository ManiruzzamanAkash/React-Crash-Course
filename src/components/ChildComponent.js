//imr cmd
import React, { useState } from 'react';

// sfc cmd
function ChildComponent(props) {
    const [age, setAge] = useState(35);

    return (
        <div>
            {
                (age >= 0 && age <= 18) &&
                <>
                    <div className="alert alert-danger">
                        You are a child
                    </div>
                </>
            }
            {
                (age > 18 && age <= 25) &&
                <>
                    <div className="alert alert-danger">
                        You are young
                    </div>
                </>
            }
            {
                (age > 25 && age <= 40) &&
                <>
                    <div className="alert alert-danger">
                        You are mid age
                    </div>
                </>
            }
        </div>
    )
}

export default ChildComponent;