import React from "react";
import "./Footer.css";
import image from "../../assets/Icons/Group 9969.png";

const Footer = () => {
  return (
    <div className="footer block">
      <div className="footer__container pt-28 text-white mx-24 lg:mx-52">
        <div>
          <h4 className="text-3xl font-bold">CareerHub</h4>
          <p className="mt-5 text-gray-400">
            There are many variations of passages <br /> of Lorem Ipsum , but
            the majority have <br /> suffered alteration in some form.
          </p>
          <img className="mt-5" src={image} alt="" />
        </div>
        <div>
          <h6 className="text-xl font-semibold">Company</h6>
          <p className="my-2 text-gray-400">About Us</p>
          <p className="my-2 text-gray-400">Work</p>
          <p className="my-2 text-gray-400">Latest News</p>
          <p className="text-gray-400">Careers</p>
        </div>
        <div>
          <h6 className="text-xl font-semibold">Product</h6>
          <p className="my-2 text-gray-400">Prototype</p>
          <p className="my-2 text-gray-400">Plans & Pricing</p>
          <p className="my-2 text-gray-400">Customers</p>
          <p className="text-gray-400">Integrations</p>
        </div>
        <div>
          <h6 className="text-xl font-semibold">Support</h6>
          <p className="my-2 text-gray-400">Help Desk</p>
          <p className="my-2 text-gray-400">Sales</p>
          <p className="my-2 text-gray-400">Become a Partner</p>
          <p className="text-gray-400">Developers</p>
        </div>
        <div>
          <h6 className="text-xl font-semibold">Contact</h6>
          <p className="my-2 text-gray-400">524 Broadway , NYC</p>
          <p className="text-gray-400">+1 777 - 978 - 5570</p>
        </div>
      </div>
      <hr className="line"/>
      <div className="flex justify-between mt-12 text-gray-400 mx-24 lg:mx-52">
        <p>
        @2023 CareerHub. All Rights Reserved
        </p>
        <p>Powered by CareerHub</p>
      </div>
    </div>
  );
};

export default Footer;
