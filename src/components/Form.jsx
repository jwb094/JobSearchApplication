import React from "react";
import { FacebookIcon, LinkedinIcon, TwitterIcon, WhatsAppIcon } from "../assets/icons";
function Form(props) {
  return (
    <section
      data-template="Form"
      data-view="default"
      className="c-form | px-12 py-12"
    >
      <div className="contact-us-bloc flex flex-col md:flex-row">
        <div className="c-contact-us-form | md:w-8/12">
          <div className="relative flex flex-col items-center rounded-xl bg-transparent">
            <h4 className="block text-xl font-medium text-slate-800">
              Sign Up
            </h4>
            <p className="text-slate-500 font-light">
              Nice to meet you! Enter your details to register.
            </p>
            <form className="mt-8 mb-2 w-8/12 max-w-screen-lg ">
              <div className="mb-1 flex flex-col gap-6">
                <div className="w-full">
                  <label className="block mb-2 text-sm text-slate-600">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Name"
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm text-slate-600">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Email"
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm text-slate-600">
                    Subject
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="RE: Repsonse"
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm text-slate-600">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>
              <div className="sm:w-full">
                <label for="message" class=" text-sm/6 font-medium text-black">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              <button
                className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="c-contact-us-socials | md:w-4/12">
          <div className="relative flex w-96 flex-col rounded-lg border border-slate-200 bg-white shadow-sm">
            <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
              {/* Linkedin */}
              <div className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                <div className="mr-4 grid place-items-center">
                  <LinkedinIcon width={32} height={32} />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Linkedin handle</p>
                </div>
              </div>
              {/* Facebook */}
              <div className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                <div className="mr-4 grid place-items-center">
                  <FacebookIcon width={32} height={32} />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Facebook handle</p>
                </div>
              </div>
              {/*  WhatsApp */}
              <div className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                <div className="mr-4 grid place-items-center">
                  <WhatsAppIcon width={32} height={32} />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">WhatsApp handle</p>
                </div>
              </div>
              {/* Twitter/X  */}
                    <div  className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                <div className="mr-4 grid place-items-center">
                <TwitterIcon width={32} height={32}/>
                </div>
                <div>
                  <p className="text-slate-500 text-sm">
                   X handle
                  </p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
