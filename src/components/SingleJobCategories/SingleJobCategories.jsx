import React from 'react';
import './SingleJobCategories.css'

const SingleJobCategories = ({singleJobCategory}) => {
    const {logo, category, about} = singleJobCategory;
    return (
        <div className='job__card p-10'>
            <img className='p-4 bg-purple-100 rounded-md' src={logo} alt="" />
            <h4 className='mt-8 text-xl font-bold text-gray-700'>{category}</h4>
            <p className='mt-2 text-gray-500'>{about}</p>
        </div>
    );
};

export default SingleJobCategories;