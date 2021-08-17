import React from 'react';

const SocialLinks = ({ social }) => {

    return (
        <div className="mb-5 mt-5">
            <ul className="social-links">
                {
                    Object.keys(social).map(key => (
                        <li><a className="text-white btn btn-info btn-sm" href={social[key]}><i className={`fa fa-${key}`}></i></a></li>
                    ))
                }
            </ul>
        </div>
    );
}

export default SocialLinks;