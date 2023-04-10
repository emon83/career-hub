import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import './JobDetails.css'

const JobDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [data1, setData1] = useState(data);

  useEffect(() => {
    fetch("/featuredJobs.json")
      .then((response) => response.json())
      .then((data) => setData1(data));
  }, []);
  //console.log(data1);
  const storeData = data1 && data1.filter((job) => job._id === id);
  console.log(storeData);
  const {
    job_description,
    job_responsibility,
    ed_requirements,
    experience,
    salary,
    title,
    phone,
    email,
    address,
  } = storeData[0];

  return (
    <div className="mx-24 lg:mx-52 job__details">
      <div>
        <p>
          <span>Job Description: </span>
          <span>{job_description}</span>
        </p>
        <p>
          <span>Job Responsibility: </span>
          <span>{job_responsibility}</span>
        </p>
        <p>
          <span>Educational Requirements: </span>
          <span>{ed_requirements}</span>
        </p>
        <p>
          <span>Experiences: </span>
          <span>{experience} Years in this field.</span>
        </p>
      </div>
      <div>
            <h6>Job Details</h6>
            <p><span>Salary: </span><span>{salary}(Per Month)</span></p>
            <p><span>Job Title: </span>{title}</p>
            <h6>Contact Information</h6>
            <p><span>Phone: </span><span>{phone}</span></p>
            <p><span>Email: </span><span>{email}</span></p>
            <p><span>Address: </span><span>{address}</span></p>
            <button className=" border-white btn btn-active bg-purple-500 hover:bg-purple-600">
            Apply Now
          </button>
      </div>
    </div>
  );
};

export default JobDetails;
