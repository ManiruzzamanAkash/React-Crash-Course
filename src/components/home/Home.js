import React, { useState, useEffect } from 'react';
import data from '../../utils/data';
import AboutShortDetail from '../about/AboutShortDetail';

const Home = () => {

    const [info, setInfo] = useState(null);
    const [social, setSocial] = useState(null);

    useEffect(() => {
        setInfo(data.info);
        setSocial(data.social);
    }, []);

    return (
        <div className="row justify-content-center">
            {
                info !== null &&
                <>
                    <div className="col-12 col-md-4">
                        <img src={info.image_url} alt="" />
                    </div>
                    <div className="col-8 col-md-8">
                        <AboutShortDetail info={info} social={social}/>
                    </div>
                </>
            }

        </div>
    );
}

export default Home;