"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left justify-self-start "
        >
          <h1 className="mb-4 text-2xl  sm:text-3xl lg:text-5xl xl:text-8xl lg:leading-normal font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            <span className="text-grays sm:top-[17rem]  block absolute lg:text-7xl xl:text-4xl mx-auto text-center">
              Witaj, jestem
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "cysk",
                1000,
                "Web Developer",
                1000,
                "Bot's Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* Add additional content if needed */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-4 place-self-center mt-4 sm:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] relative animate-avatar">
            <Image
              src="/images/avatar.png"
              alt="hero image"
              className="absolute transform rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 shadow-lg"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
