import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import heroImg from '../../assets/All Images/hero.png'
import AppliedJobs from '../AppliedJobs/AppliedJobs'
import JobCategory from '../Section/JobCategory'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs'
import Footer from '../Footer/Footer'

const Home = () => {
  const featuredJobs = useLoaderData();
  //console.log(featuredJobs);
  const [jobCategory, setJobCategory] = useState();

  useEffect(()=>{
    fetch('jobCategory.json')
    .then(response => response.json())
    .then(data => setJobCategory(data))
  }, [])

  return (
    <section>
      <div className='my-16 lg:my-24 lg:mx-28 md:block lg:flex justify-between items-center'>
        <div className='text-center lg:text-start mx-16 pb-24 lg:pb-56 text-gray-900'>
          <h1 className='text-4xl w-full lg:leading-tight sm:text-6xl lg:text-7xl lg:max-w-3xl title-text font-bold'>
          One Step <br /> Closer To Your <br /><span className='text-purple-600'>Dream Job</span>
          </h1>
          <p className='my-6 text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-600'>
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <div className='flex flex-wrap justify-center lg:justify-start'>
            <Link to='/'>
            <button className=" border-white btn btn-active bg-purple-500 hover:bg-purple-600">
            Get Started
          </button>
            </Link>
          </div>
        </div>
        <div className='lg:mt-24'>
        <img
        src={heroImg}
        alt=''
        className='w-5/6 mx-auto mb-12 lg:-mt-40 rounded-lg shadow-md bg-gray-500'
      />
        </div>
      </div>
     <JobCategory
      jobCategory={jobCategory}
     ></JobCategory>
     <FeaturedJobs featuredJobs={featuredJobs}></FeaturedJobs>
     <Footer/>
    </section>
  )
}

export default Home
