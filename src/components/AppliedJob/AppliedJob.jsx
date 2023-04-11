import React from "react";
import "./AppliedJob.css";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const AppliedJob = ({ appliedJob, isFilter}) => {
  const { img, title, company, job_categoris, address, salary } = appliedJob;
  //const { img, title, company, job_categoris, address, salary } = remoteJob && remoteJob;
  //console.log(remoteJob);

  //console.log(appliedJob);
  return (
    <>
      <div className="h-60 bg-gray-50 m-4 p-4 rounded-lg flex justify-between items-center">
        <div className="flex gap-6 justify-start items-center p-7">
          <div>
            <img className="w-40 bg-gray-100 rounded-lg" src={img} alt="" />
          </div>
          <div>
            <h5>{title}</h5>
            <h6>{company}</h6>
            <div className="flex gap-4 mt-4">
              {job_categoris.map((categories, index) => (
                <div
                  key={index}
                  className="job__categories text-purple-500 font-bold text-lg"
                >
                  <p className="">{categories}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-4 text-lg mt-4">
                <p className="flex items-center text-gray-500">
                  <span className="">
                    <MapPinIcon className="h-6 w-6 text-gray-600" />
                  </span>
                  {address}
                </p>
                <p className="flex items-center text-gray-500">
                  <span>
                    <CurrencyDollarIcon className="h-6 w-6 text-gray-600" />
                  </span>
                  Salary: {salary}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className=" border-white btn btn-active bg-purple-500 hover:bg-purple-600">
            View Details
          </button>
        </div>
      </div>
      {/* {
      remoteJob && remoteJob.map((singleJob) => console.log(singleJob))
      } */}
    </>
  );
};

export default AppliedJob;
