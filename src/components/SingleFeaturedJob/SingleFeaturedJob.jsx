import React from "react";
import "./SingleFeaturedJob.css";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SingleFeaturedJob = ({ featuredJob }) => {
  //console.log(featuredJob);

  const {_id, img, title, company, job_categoris, address, salary } = featuredJob;

  /* const handleBtn = id =>{
    //console.log(id);
    localStorage.setItem('id', JSON.stringify(id))
  } */
  return (
    <div className="text-start featured__card">
      <img src={img} alt="" />
      <h4 className="text-2xl font-bold text-gray-700 mt-8">{title}</h4>
      <h6 className="text-xl text-gray-500 mt-2">{company}</h6>
      <div className="flex gap-4 mt-4">
        {job_categoris.map((categories, index) => (
          <div key={index} className="job__categories text-purple-500 font-bold text-lg">
            <p className="">{categories}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-4 text-lg mt-4">
        <p className="flex items-center text-gray-500">
          <span className="">
            <MapPinIcon className="h-6 w-6 text-gray-600" />
          </span>
          {address}
        </p>
        <p className="flex items-center text-gray-500"><span>
            <CurrencyDollarIcon className="h-6 w-6 text-gray-600" />
            </span>Salary: {salary}</p>
      </div>
      <Link to={`/jobDetails/${_id}`}>
      <button onClick={()=>handleBtn(_id)} className="text-lg border-white btn btn-active bg-purple-500 hover:bg-purple-600 mt-6">
        View Details
      </button>
      </Link>
    </div>
  );
};

export default SingleFeaturedJob;


