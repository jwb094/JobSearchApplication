import React from "react";
import Form from "../components/Form";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsAppIcon,
  InstagramIcon,
} from "../assets/icons";
import { socialLinks } from "../data/Page_content/contact_us";
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
      <div className="flex flex-col gap-y-6 | mx-auto px-4 py-16 sm:px-6 lg:px-0 |  max-w-7xl">
        <div className="flex flex-col md:flex-row">
          <div className="c-contact-us-form | md:w-10/12">
            <Form />
          </div>
          <div className="c-contact-us-form | md:w-4/12 md:flex md:items-center">
            <div className="c-contact-us-socials |">
              <div className="relative flex  md:w-96 flex-col rounded-lg border border-slate-200 bg-white shadow-sm |">
                <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
                  {/* Linkedin */}
                  <div className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                    <div className="mr-4 grid place-items-center">
                      <LinkedinIcon width={32} height={32} />
                    </div>
                    <div>
                      <a
                        href={socialLinks.social_links.linkedin.url}
                        className="text-slate-500 text-sm"
                      >
                        {socialLinks.social_links.linkedin.username}
                      </a>
                    </div>
                  </div>
                  {/* Facebook */}
                  <div className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                    <div className="mr-4 grid place-items-center">
                      <FacebookIcon width={32} height={32} />
                    </div>
                    <div>
                      <a
                        href={socialLinks.social_links.facebook.url}
                        className="text-slate-500 text-sm"
                      >
                        {socialLinks.social_links.facebook.username}
                      </a>
                    </div>
                  </div>
                  {/* Instagram */}
                  <div className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                    <div className="mr-4 grid place-items-center">
                      <InstagramIcon width={32} height={32} />
                    </div>
                    <div>
                      <a
                        href={socialLinks.social_links.instagram.url}
                        className="text-slate-500 text-sm"
                      >
                        {socialLinks.social_links.instagram.username}
                      </a>
                    </div>
                  </div>
                  {/*  WhatsApp */}
                  <div className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                    <div className="mr-4 grid place-items-center">
                      <WhatsAppIcon width={32} height={32} />
                    </div>
                    <div>
                      <a
                        href={socialLinks.social_links.whatsapp.url}
                        className="text-slate-500 text-sm"
                      >
                        {socialLinks.social_links.whatsapp.username}
                      </a>
                    </div>
                  </div>
                  {/* Twitter/X  */}
                  <div className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                    <div className="mr-4 grid place-items-center">
                      <TwitterIcon width={32} height={32} />
                    </div>
                    <div>
                      <a
                        href={socialLinks.social_links.x.url}
                        className="text-slate-500 text-sm"
                      >
                        {socialLinks.social_links.x.username}
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
