"use client";
import React, { useState,  useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import GithubIcon from "../../../public/github.svg";
import discord from "../../../public/discord.svg";
import email from "../../../public/email.svg"
import Link from "next/link";
import Image from "next/image";
import { FaDiscord, FaTwitter, FaInstagram, FaGithub, FaPaperPlane } from 'react-icons/fa';

const EmailSection = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  const copyText = (textRef) => {
    const textToCopy = textRef.current ? textRef.current.innerText : "";
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
    alert(`Copied to clipboard! ${textToCopy}`);
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!recaptchaValue) {
      alert("Please verify reCAPTCHA before submitting the form.");
      return;
    }
  
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    setIsSubmitting(true);
  
    const discordResponse = await fetch('https://discord.com/api/webhooks/1174752975755948073/l-T0FfnH8l2sTwkQ-lAQHqZJe27fn1CJaBCiYO0ZwmiegBmHP160lBCdlGJn5cNsPqmo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `New message from the contact form:\n\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
      }),
    });
  
    if (discordResponse.ok) {
      console.log('Message sent to Discord.');
      alert("Formularz został wysłany")
      e.target.reset();
    } else {
      console.error('Error sending message to Discord:', discordResponse.status, discordResponse.statusText);
    }
  };
      

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 ms:w-[50rem] py-24 gap-4 relative text-left sm:text-left"
    >
      <div className=" from-primary-900 to-transparent rounded-full h-80 w-80  blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="">
        <h5 className="text-[2rem] font-bold  my-2 relative top-[10rem]  w-[20rem] text-transparent bg-clip-text bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r">Contact with me </h5>
        <p className="text-[#ADB7BE] mb-4  md:text-2xs max-w-md relative top-[9rem]">
        Do you want to collaborate or contact with me? You can use contact form or email  or one of social media.
        </p>
        <div className="socials flex-row gap-2 text-base">
          <p href="" onClick={() => copyText(textRef1)}>
            <Image src={discord} alt="cysk_discord" className="relative mt-[50px] md:mt-0 top-[9rem]" />
            <h2 className=" relative top-[4.3rem] left-[6rem] text-2xl font-semibold cursor-pointer w-[6rem] bg-clip-text  text-transparent bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r" id="text1" onClick={() => copyText(textRef1)}>Discord</h2>
            <h3 className="text-white relative top-[4.1rem] w-[9.5rem]   left-[6rem] text-2xl font-normal cursor-pointer " ref={textRef1}>faceandface</h3>
          </p>
          <p >
            <Image src={email} alt="cysk_email" className="absolute top-[28rem]  mt-[50px] md:mt-0  cursor-pointer" href="https://google.com" />
            <h2 className="relative top-[5.3rem] left-[6rem] text-2xl font-semibold cursor-pointer w-20 bg-clip-text text-transparent bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r" id="text2" onClick={() => copyText(textRef2)}>E-mail</h2>
            <h3 className="text-white w-[17rem] relative top-[4.8rem] left-[6rem]  md:text-2xl sm:text-2xs font-normal md:text-cursor-pointer" ref={textRef2} id="text2" onClick={() => copyText(textRef2)}>cyskbiznes@gmail.com</h3>
          </p>
          <div className="flex gap-[1rem]">
          <h2 className="text-[2rem] font-bold my-2 relative top-[6rem] flex items-center justify-center w-12 h-12 text-white  from-primary-400 to-secondary-600 bg-gradient-to-r  rounded-full"><FaDiscord /></h2>
          <h2 className="text-[2rem] font-bold text-white my-2 relative top-[6rem] flex items-center justify-center w-12 h-12 bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r"><FaInstagram /></h2>
          <h2 className="text-[2rem] font-bold text-white my-2 relative top-[6rem] flex items-center justify-center w-12 h-12 bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r"><FaGithub /></h2>
          <h2 className="text-[2rem] font-bold text-white my-2 relative top-[6rem] flex items-center justify-center w-12 h-12 bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r"><FaInstagram /></h2>
          </div>
        </div>

      </div>
      <div>
          <form className="flex flex-col bg-[#d9d9d9] shadow-lg p-5 mx-auto my-[10rem] md:w-3/5 h-[42rem] sm:w-full  rounded-2xl text-center" onSubmit={handleSubmit}>
            <div className="mb-6">
              <h1 className="text-4xl font-bold  text-center text-black mb-4  w-full bg-clip-text  text-transparent bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r">Contact form</h1>
              <label
                htmlFor="text"
                className="text-black   relative top-2.5 left-[-20px] lg:text-2xl block mb-2  text-sm font-semibold  w-[7rem] bg-clip-text  text-transparent bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="bg-white  shadow-lg  placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="eg. cysk"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-black   relative top-2.5 left-[-20px] lg:text-2xl block mb-2  text-sm font-semibold  w-[7rem] bg-clip-text  text-transparent bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r"
              >
                E-mail
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white  shadow-lg  placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="eg. cyskbiznes@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-black   relative top-2.5  lg:text-2xl block mb-2  text-sm font-semibold  w-[7rem] bg-clip-text  text-transparent bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-white  shadow-lg  placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full h-[10rem] p-2.5 "
                placeholder="Let's talk about..."
              />
            </div>

            <ReCAPTCHA
              sitekey="6Lc5xxApAAAAAE8aHqfYr3G1oeFKlr2pDZ7AnWRD"
              onChange={handleRecaptchaChange}
            />
            <button
              type="submit"
              disabled={isSubmitting} //
              className="bg-grays rounded-full from-primary-400 font-semibold to-secondary-600 bg-gradient-to-r relative  mx-auto left-30 object-center top-3 hover:bg-primary-600 text-white py-2.5 px-5 rounded-lg w-32 "
            >
              <span className="absolute text-2xl left-[1rem]"><FaPaperPlane /></span> <span className="relative left-[0.5rem]">SEND</span>
            </button>
          </form>
        
      </div>
    </section>
  );
};

export default EmailSection;