import React from 'react';
import SingleJobCategories from '../SingleJobCategories/SingleJobCategories';

const JobCategory = ({jobCategory}) => {
    //console.log(jobCategory);
    
    return (
        <div className='lg:mx-44 mx-16'>
        <div className='text-center'>
            <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold'>Job Category List</h1>
            <p className='text-gray-500 mt-4 md:text-lg text-sm'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className=' my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {jobCategory && jobCategory.map(singleJobCategory =>( <SingleJobCategories
             key={singleJobCategory._id}
             singleJobCategory={singleJobCategory}
            ></SingleJobCategories>
            ))}
        </div>
        </div>
    );
};

export default JobCategory;