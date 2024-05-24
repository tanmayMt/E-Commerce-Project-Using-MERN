import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
<b>At Medicure we aim to bring most of the medical and healthcare related products to you at affordable rates so that we can deliver the best we can.</b>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
