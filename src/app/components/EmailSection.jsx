"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

<head>
  <script src="https://www.google.com/recaptcha/api.js"></script>
  <script src="https://www.google.com/recaptcha/api.js?render=reCAPTCHA_site_key"></script>

</head>

function onClick(e) {
  e.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute('6LdYwxApAAAAACq0aYjLEFJgpO9qjwtUjZPqNZ9r', {action: 'submit'}).then(function(token) {
    });
  });
}

function onSubmit(token) {
     document.getElementById("demo-form").submit();
   }


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col bg-[#d9d9d9] shadow-lg p-5 w-96 rounded-2xl">
            <div className="mb-6">
              <h1 className="text-4xl font-bold  text-center text-black mb-4">Contact form</h1>
              <label
                htmlFor="text"
                className="text-black   relative top-2.5  lg:text-2xl block mb-2  text-sm font-semibold"
              >
                Name
              </label>
              <input
                name="subject"
                type="subject"
                id="subject"
                required
                className="bg-white  shadow-lg  placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="eg. cysk"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full g-recaptcha"
              data-sitekey="reCAPTCHA_site_key" 
              data-callback='onSubmit' 
              data-action='submit'
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
