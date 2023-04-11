import React from "react";
import { getStoredCart } from "../../utilities/fakeDb";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobData = useLoaderData();

  let cart = [];
  const savedData = getStoredCart();
  console.log(savedData);

  for (const id in savedData) {
    console.log(id);
    const foundJob = jobData && jobData.find((job) => job._id == id);
    if (foundJob) {
      cart.push(foundJob);
    }
  }
  console.log(cart);

  return (
    <div className="lg:mx-44 mx-16 my-32">
      <div className="dropdown flex justify-end my-16">
        <label tabIndex={0} className="btn border-white btn-active bg-purple-500 hover:bg-purple-600">
        Filter By
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Full Time</a>
          </li>
          <li>
            <a>Onsite</a>
          </li>
        </ul>
      </div>
      {cart.map((appliedJob) => (
        <AppliedJob appliedJob={appliedJob} key={appliedJob._id}></AppliedJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
