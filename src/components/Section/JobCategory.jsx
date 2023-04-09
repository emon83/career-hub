import React from 'react';

const JobCategory = ({jobCategory}) => {
    console.log(jobCategory);
    //const {logo, category, about} = singleCategory;
    return (
        <div className='text-center'>
            <h1 className='text-4xl'>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
    );
};

export default JobCategory;