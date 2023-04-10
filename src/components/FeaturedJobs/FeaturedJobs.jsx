import React, { useState } from "react";
import SingleFeaturedJob from "../SingleFeaturedJob/SingleFeaturedJob";

const FeaturedJobs = ({ featuredJobs }) => {
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = ()=> {
        setShowAll(true);
    }
  return (
    <div className="lg:mx-44 mx-16 text-center my-24">
      <div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
          Featured Jobs
        </h1>
        <p className="text-gray-500 mt-4 md:text-lg text-sm">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24 mx-8">
        {featuredJobs &&
          featuredJobs?.slice(0, showAll ? 6 : 4).map((featuredJob) => (
            <SingleFeaturedJob
              key={featuredJob._id}
              featuredJob={featuredJob}
            ></SingleFeaturedJob>
          ))}
      </div>
      {
            !showAll && (
                <span onClick={handleShowAll}>
                <button className=" border-white btn btn-active bg-purple-500 hover:bg-purple-600 mt-10">
                See All Jobs
          </button>
                </span>
            )
        }
    </div>
  );
};

export default FeaturedJobs;
