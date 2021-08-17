import React from 'react';
import parse from 'html-react-parser';
import SocialLinks from '../social/SocialLinks';

const AboutShortDetail = ({ info, social }) => {
    return ( 
        <div className="p-5">
            {
                info !== null && social !== null &&
                <div>
                    <h1>{info.short_description}</h1>
                    <br />
                    <br />
                    <div>
                        {parse(`${info.description}`)}
                    </div>
                    <div className="text-left">
                        <SocialLinks social={social} />
                    </div>
                </div>
            }
            
        </div>
     );
}
 
export default AboutShortDetail;