import React from "react";
import Form from "../components/Form";
function ContactUs(props) {
  return (
    <>
      <div className="flex flex-col gap-y-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl">
        <h2 className="text-3xl">Contact Us</h2>

        <b>We'd Love to Hear From You</b>
        <p>
          Whether you have a question about the platform, need help with your
          account, want to report an issue, or have feedback on how we can
          improve your job search experience, our team is here to help. Simply
          complete the contact form below, and we'll respond as soon as
          possible.
        </p>
      </div>

      <Form />
    </>
  );
}

export default ContactUs;
