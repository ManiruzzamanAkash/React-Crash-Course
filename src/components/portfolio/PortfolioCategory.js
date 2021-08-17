import React, { useState, useEffect } from 'react';
import data from '../../utils/data';

const PortfolioCategory = ({ onChangePortfolio, selectedCategory }) => {

    const [portfolioCategories, setPortfolioCategories] = useState([]);

    useEffect(() => {
        setPortfolioCategories(data.portfolioCategories);
    }, []);

    return (
        <>
            <div className="row">
                <div key={-1} className="col-md-3"  onClick={() => onChangePortfolio('All')}>
                    <h3 className={`text-white p-4 text-center portfolio-category-title ${'All' === selectedCategory ? 'active' : ''}`}>All</h3>
                </div>
                {
                    Object.keys(portfolioCategories).length > 0 && Object.keys(portfolioCategories).map((key,index) => (
                        <div key={index} className="col-md-3" onClick={() => onChangePortfolio(portfolioCategories[key])}>
                            <h3 className={`text-white p-4 text-center portfolio-category-title ${portfolioCategories[key] === selectedCategory ? 'active' : ''}`}>{portfolioCategories[key]}</h3>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default PortfolioCategory;