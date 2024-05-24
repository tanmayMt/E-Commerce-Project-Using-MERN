import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-3">
          {/* <p>Personal Information: This includes information that can be used to identify you</p> */}
          <p>Personal Information can be used to identify you, such as your <b>name</b>, address, <b>phone number</b>, <b>email address</b>, <b>date of birth</b>, and <b>gender</b>.</p>

          {/* <p>Health Information: This includes information about your prescriptions, medication history, allergies, and other health conditions.</p> */}
          <p>Your payment information, such as <b>credit card number</b> or <b>debit card number</b>, when you process a payment through our Services.</p>
          {/* <p>Payment Information: We may collect your payment informationy</p> */}
          {/* <p>Device Information: We may collect information about the device you use to access our Service</p> */}
          <p>We may collect information about the device you use to access our Services, such as the <b>type of device</b>, <b>operating system</b>, <b>IP address</b>, and <b>browser type</b>.</p>

{/* <p>Personal Information: This includes information that can be used to identify you, such as your name, address, phone number, email address, date of birth, and gender.</p>
<p>Health Information: This includes information about your prescriptions, medication history, allergies, and other health conditions. We collect this information only when you provide it to us, such as when you fill a prescription or create an account.</p>
<p>Payment Information: We may collect your payment information, such as credit card number or debit card number, when you process a payment through our Services. However, we do not store this information ourselves; it is processed securely by a third-party payment processor.</p>
<p>Device Information: We may collect information about the device you use to access our Services, such as the type of device, operating system, IP address, and browser type.</p>
<p>How We Use Your Information<br></br> */}

{/* We use your information to provide, operate, and improve our Services, including:
<ul>
  <li>To process your prescriptions and fulfill your orders</li>
  <li>To send you important information about your prescriptions, such as refill reminders and medication warnings</li>
  <li>To provide you with personalized recommendations and educational materials</li>
  <li>To respond to your inquiries and requests</li>
  <li>To improve the functionality and usability of our Services</li>
  <li>To comply with legal and regulatory requirements</li>
</ul> */}





{/* </p> */}
{/* How We Share Your Information */}
        </div>
      </div>
    </Layout>
  );
};

export default Policy;