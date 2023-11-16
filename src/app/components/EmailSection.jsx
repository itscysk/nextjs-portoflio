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
      // Pobierz tekst z refa
      const textToCopy = textRef.current.innerText;

      // Utwórz tymczasowy element textarea do schowka
      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = textToCopy;

      // Dodaj element do strony (musi być dodany, aby skopiować zawartość)
      document.body.appendChild(tempTextarea);

      // Zaznacz tekst w elemencie textarea
      tempTextarea.select();
      tempTextarea.setSelectionRange(0, 99999); // Dla niektórych przeglądarek

      // Kopiuj tekst do schowka
      document.execCommand('copy');

      // Usuń tymczasowy element textarea
      document.body.removeChild(tempTextarea);

      // Opcjonalnie możesz wyświetlić komunikat lub podjąć inne działania
      alert(`Skopiowano do schowka! ${textToCopy}`);
    };

    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const handleRecaptchaChange = (value) => {
      // Ustaw wartość reCAPTCHA w stanie komponentu
      setRecaptchaValue(value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      // Sprawdź, czy reCAPTCHA została zweryfikowana
      if (!recaptchaValue) {
        alert("Proszę zweryfikować reCAPTCHA przed wysłaniem formularza.");
        return;
      }

      const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";

      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };

      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    };


    
    return (
      <section
        id="contact"
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative text-left sm:text-left"
      >
        <div className=" from-primary-900 to-transparent rounded-full h-80 w-80  blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="">
          <h5 className="text-[2rem] font-bold  my-2 relative top-[10rem]  w-[20rem] text-transparent bg-clip-text bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r">Contact with me </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md relative top-[9rem]">
          Do you want to collaborate or contact with me? You can use contact form or email/one of social media.
          </p>
          <div className="socials flex-row gap-2 text-base">
            <p href="" onClick={() => copyText(textRef1)}>
              <Image src={discord} alt="cysk_discord" className="relative mt-[50px] md:mt-0 top-[9rem]" />
              <h2 className=" relative top-[4.3rem] left-[6rem] text-2xl font-semibold cursor-pointer w-[6rem] bg-clip-text  text-transparent bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r" id="text1" onClick={() => copyText(textRef1)}>Discord</h2>
              <h3 className="text-white relative top-[4.1rem] left-[6rem] text-2xl font-normal cursor-pointer " ref={textRef1}>faceandface</h3>
            </p>
            <p onClick={() => copyText(textRef2)}>
              <Image src={email} alt="cysk_email" className="absolute top-[28rem]  mt-[50px] md:mt-0  cursor-pointer" href="https://google.com" />
              <h2 className="relative top-[5.3rem] left-[6rem] text-2xl font-semibold cursor-pointer w-20 bg-clip-text text-transparent bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r" id="text2" onClick={() => copyText(textRef2)}>E-mail</h2>
              <h3 className="text-white relative top-[4.8rem] left-[6rem] text-2xl font-normal cursor-pointer" ref={textRef2}>cyskbiznes@gmail.com</h3>
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
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
          ) : (
            <form className="flex flex-col bg-[#d9d9d9] shadow-lg p-5 mx-auto my-[10rem] md:w-3/5 h-[42rem] sm:w-4/5  rounded-2xl text-center" onSubmit={handleSubmit}>
              <div className="mb-6">
                <h1 className="text-4xl font-bold  text-center text-black mb-4  w-full bg-clip-text  text-transparent bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r">Contact form</h1>
                <label
                  htmlFor="text"
                  className="text-black   relative top-2.5  lg:text-2xl block mb-2  text-sm font-semibold w-[7rem] bg-clip-text  text-transparent bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r"
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
                  className="   relative top-2.5  lg:text-2xl block mb-2  text-sm font-semibold  w-[7rem] bg-clip-text  text-transparent bg-grays rounded-full from-primary-400 to-secondary-600 bg-gradient-to-r"
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
              {/* Dodaj reCAPTCHA do formularza */}
              <ReCAPTCHA
                sitekey="6Lc5xxApAAAAAE8aHqfYr3G1oeFKlr2pDZ7AnWRD"
                onChange={handleRecaptchaChange}
              />
              <button
                type="submit"
                className="bg-grays rounded-full from-primary-400 font-semibold to-secondary-600 bg-gradient-to-r relative  mx-auto left-30 object-center top-3 hover:bg-primary-600 text-white py-2.5 px-5 rounded-lg w-32 "
              >
                <span className="absolute text-2xl left-[1rem]"><FaPaperPlane /></span> <span className="relative left-[0.5rem]">SEND</span>
              </button>
            </form>
          )}
        </div>
      </section>
    );
  };

  export default EmailSection;
