import React, { useState } from "react";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "../assets/icons";
import ErrorAlert from "../../../RJS-Blog/src/components/ErrorAlert";
function Form(props) {
  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function reset() {
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setErrors({});
    setResult("");
    setSubmitted(false);
  }

    const closeError = (field) => {
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[field];
      return updatedErrors;
    });
  };

  // validate form inputs
  function validateFields() {
    let validationErrors = {};
    //  Name validation
    if (!name) {
      validationErrors.name = "Your Name is required";
    }

    // Email validation
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      validationErrors.email = "Invalid Email address";
    }
    let phoneRegex = /^[0-9]{4}[0-9]{3}[0-9]{4}$/;
    if (!phoneRegex.test(phone)) {
      validationErrors.phone = "Invalid Phone Number";
    }

    // Message validation
    if (!subject) {
      validationErrors.subject = "Your Message Subject is required";
    }

    // Message validation
    if (!message) {
      validationErrors.message = "Your Message is required";
    }

    //append the validationErrors to State
    setErrors(validationErrors);
    //Return True or false depending on the length
    return Object.keys(validationErrors).length === 0;
  }

  //Email Submit form
  function handleLoginSubmit(e) {
    e.preventDefault();

    setTimeout(() => {
      const isValid = validateFields();
      if (!isValid) return;

      setSubmitted(true);
      setResult(name + " for sending your message");

      // Show success for 5 seconds
      setTimeout(() => {
        reset();
      }, 5000);
    }, 3000);
    setResult("");
  }

  return (
    <section
      data-template="Form"
      data-view="default"
      className="c-form | px-12 py-12"
    >
      {/* <div className="contact-us-bloc flex flex-col md:flex-row"> */}
  

        {result ? (
            <div className="flex flex-col justify-center items-center gap-4 bg-emerald-100 border-t-4 border-emerald-500">
              <h2 className="mt-6 | text-5xl ">Success</h2>

              <p className="mb-6 | text-lg">Thank you</p>

              <p>{result}</p>

              <b>What happens next?</b>

              <p className="mb-6 | text-lg">
                {" "}
                Our HR Team will review your Enquiry and reach out to you as
                soon as possible{" "}
              </p>
            </div>
          ) : (
      <div className="c-contact-us-form">
          <div className="relative flex flex-col items-center rounded-xl bg-transparent">
            <h4 className="block text-xl font-medium text-slate-800">
              Sign Up
            </h4>
            <p className="text-slate-500 font-light">
              Nice to meet you! Enter your details to register.
            </p>
            <form
              className="mt-8 mb-2 w-8/12 max-w-screen-lg "
              onSubmit={handleLoginSubmit}
            >
              <div className="mb-1 flex flex-col gap-6">
                <div className="w-full">
                  <label className="block mb-2 text-sm text-slate-600">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {errors?.name && (
                  <ErrorAlert
                    message={errors.name}
                    onClose={() => closeError("name")}
                  />
                )}
                <div className="w-full">
                  <label className="block mb-2 text-sm text-slate-600">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors?.email && (
                  <ErrorAlert
                    message={errors.email}
                    onClose={() => closeError("email")}
                  />
                )}
                      <div className="w-full">
                  <label className="block mb-2 text-sm text-slate-600">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                {errors?.phone && (
                  <ErrorAlert
                    message={errors.phone}
                    onClose={() => closeError("phone")}
                  />
                )}
                <div className="w-full">
                  <label className="block mb-2 text-sm text-slate-600">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="RE: Repsonse"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                {errors?.subject && (
                  <ErrorAlert
                    message={errors.subject}
                    onClose={() => closeError("subject")}
                  />
                )}
          

                <div className="sm:w-full">
                  <label
                    for="message"
                    className=" text-sm/6 font-medium text-black"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Write your thoughts here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                {errors?.message && (
                  <ErrorAlert
                    message={errors.message}
                    onClose={() => closeError("message")}
                  />
                )}
              </div>

              <button
                className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
          )}
  
      {/* </div> */}
    </section>
  );
}

export default Form;
