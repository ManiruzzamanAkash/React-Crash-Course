import React, { useState, useEffect } from 'react';
import data from '../../utils/data';
import AboutShortDetail from './AboutShortDetail';

const About = () => {
    const [info, setInfo] = useState(null);
    const [social, setSocial] = useState(null);

    useEffect(() => {
        setInfo(data.info);
        setSocial(data.social);
    }, []);

    return ( 
        <div>
            <h1 className="p-5 pb-0">About Me</h1>
            <AboutShortDetail info={info} social={social} />
        </div>
     );
}
 
export default About;