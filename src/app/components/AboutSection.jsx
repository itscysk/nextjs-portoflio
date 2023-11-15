"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>SQL</li>
        <li>RCON</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>next.js</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>1-klasa szkoły ponadpodstawowej o profilu technika programisty</li>
        <li>2-klasa szkoły ponadpodstawowej o profilu technika programisty</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/avatar.png" alt="elo" width={500} height={500} className="transform rounded-full animate-avatar"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Jestem Front-End developerem, uwielbiam tworzyc strony internetowe zaawansowane jak i mało zaawansowane.
            Staram sie aby każda miała responsywność oraz certyfikat, by zapewnić każdemu bezpieczenstwo.
            Od kilku miesięcy zacząłem interesować się Cyber Bezpieczeństwem, co pomaga mi być w 99% bezpiecznym w internecie.
            Moim ulubionym językiem programowania jest Python, ze względu na jego funkcyjność oraz prostote. Ta strona została wykonana przy użyciu next.js oraz Tailwind CSS

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
