import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import "./JobDetails.css";

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
    <div className="my-32 mx-24 lg:mx-52 job__details">
      <div>
        <p>
          <span className="font-bold">Job Description: </span>
          <span className="text-gray-500">{job_description}</span>
        </p>
        <p className="mt-6">
          <span className="font-bold">Job Responsibility: </span>
          <span className="text-gray-500">{job_responsibility}</span>
        </p>
        <p className="mt-6">
          <span className="font-bold">Educational Requirements: </span>
          <span className="text-gray-500">{ed_requirements}</span>
        </p>
        <p className="mt-6">
          <span className="font-bold">Experiences: </span>
          <span className="text-gray-500">
            {experience} Years in this field.
          </span>
        </p>
      </div>
      <div className="sm:mt-8 lg:mt-0 job__details__cart">
        <h6 className="text-xl font-bold">Job Details</h6>
        <p className="mt-10 flex">
        <CurrencyDollarIcon className="h-6 w-6 mr-2 text-purple-600" />
          <span className="font-bold">Salary: </span>
          <span className="text-gray-500">{salary}(Per Month)</span>
        </p>
        <p className="mt-4 mb-8 flex">
        <CalendarDaysIcon className="h-6 w-6 mr-2 text-purple-600" />
          <span className="font-bold">Job Title: </span>
          <span className="text-gray-500">{title}</span>
        </p>
        <h6 className="text-xl font-bold">Contact Information</h6>
        <p className="mt-10 flex">
        <PhoneIcon className="h-6 w-6 mr-2 text-purple-600" />
          <span className="font-bold">Phone: </span>
          <span className="text-gray-500">{phone}</span>
        </p>
        <p className="mt-4 flex">
        <EnvelopeIcon className="h-6 w-6 mr-2 text-purple-600" />
          <span className="font-bold">Email: </span>
          <span className="text-gray-500">{email}</span>
        </p>
        <p className=" mt-4 flex">
        <MapPinIcon className="h-6 w-6 mr-2 text-purple-600" />
          <span className="font-bold">Address: </span>
          <span className="text-gray-500">{address}</span>
        </p>
        <div className=" mx-auto">
        <button className=" border-white btn btn-active bg-purple-500 hover:bg-purple-600 mt-10 w-full">
          Apply Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
