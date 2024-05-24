import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1><b>
          <p className="text-justify mt-2">
            For any queries or information please reach out to us via email, we are available 24x7 to serve you
          </p>
          <p className="mt-3">
            <BiMailSend /> : docmate735@gmail.com
          </p>
          {/* <p className="mt-3">
            <BiPhoneCall /> : +91 8768006557    +91 7698340967
          </p> */}
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p></b>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
