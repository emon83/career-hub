import React from "react";
import "./Footer.css";
import image from "../../assets/Icons/Group 9969.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container text-white mx-24 lg:mx-52 my-32">
        <div>
          <h4 className="text-3xl font-bold">CareerHub</h4>
          <p className="mt-5">
            There are many variations of passages <br /> of Lorem Ipsum , but
            the majority have <br /> suffered alteration in some form.
          </p>
          <img className="mt-5" src={image} alt="" />
        </div>
        <div>
          <h6 className="text-xl font-semibold">Company</h6>
          <p className="my-2">About Us</p>
          <p className="my-2">Work</p>
          <p className="my-2">Latest News</p>
          <p>Careers</p>
        </div>
        <div>
          <h6 className="text-xl font-semibold">Product</h6>
          <p className="my-2">Prototype</p>
          <p className="my-2">Plans & Pricing</p>
          <p className="my-2">Customers</p>
          <p>Integrations</p>
        </div>
        <div>
          <h6 className="text-xl font-semibold">Support</h6>
          <p className="my-2">Help Desk</p>
          <p className="my-2">Sales</p>
          <p className="my-2">Become a Partner</p>
          <p>Developers</p>
        </div>
        <div>
          <h6 className="text-xl font-semibold">Contact</h6>
          <p className="my-2">524 Broadway , NYC</p>
          <p>+1 777 - 978 - 5570</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
