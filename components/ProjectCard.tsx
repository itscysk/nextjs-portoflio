"use client"
import { useState } from "react";
import Image from "next/image";
import Portfolio1 from "../public/img/projects/portfolio1.png"
import PlaceHolder from "../public/img/project-placeholder.svg"
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  link: string;
  img: string;
}

const ProjectCard = ({ title, link, img }: Props) => {
  const [isPortfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const [isDiscordBotModalOpen, setDiscordBotModalOpen] = useState(false);

   const openPortfolioModal = () => {
    setPortfolioModalOpen(true);
    setDiscordBotModalOpen(false); // Zamknięcie innego modala, jeśli jest otwarty
  };

  const openDiscordBotModal = () => {
    setDiscordBotModalOpen(true);
    setPortfolioModalOpen(false); // Zamknięcie innego modala, jeśli jest otwarty
  };

  const handleOverlayClick = () => {
    setPortfolioModalOpen(false);
    setDiscordBotModalOpen(false);
  };


return (
    <>
     <div
      className="w-full h-50 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group"
      onClick={openPortfolioModal}
    >
      <Image
          className="object-cover translate-y-0 transition-transform duration-[3s] z-i"
          width={500}
          height={350}
          src={PlaceHolder}
          alt="cyskportfolio"
        />
    </div>

    {isPortfolioModalOpen && (
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-full bg-black backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="p-4 rounded-lg w-[50rem] h-[50rem]"
    >
       <div
       className="fixed top-0 left-0 w-full  h-full bg-black backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50  "
       onClick={handleOverlayClick}
     >
       <div className=" p-4 rounded-lg w-[50rem] h-[50rem] ">
       <h2 className="text-center"></h2>
       <div className=" h-80 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group">
       <Image
             className="object-cover translate-y-0 group-hover:-translate-y-[65%] transition-transform duration-[3s]"
             width={800}
             height={350}
             src={img}
             alt="cyskportfolio"
           />
        </div>
          <h1 className="text-white font-bold text-3xl p-2 relative">
            Portfolio website
            <div className="wrapper top-[-8.3rem] w-3/5 left-[18rem] absolute"></div>
          </h1>

          <h2 className="text-blue-300 font-normal text-base top-[-0.5rem] left-[0.5rem] relative">
            next.js • tailwindcss
          </h2>

          <h2 className="pl-[0.5rem] top-[-.5rem] relative">
          Strona została zrobiona przy użyciu nowoczesnych technologi, takich jak next.js czy tailwindcss. <br></br> Formularz przedstawiony na stronie jest połączony wraz z discordem poprzez webhooka, dzieki czemu wysłane wiadomości bedą wysyłane na kanał na discordzie. Strona jest open-source dzieki czemu każdy ma dostęp. Strona została wykonana w pełni przez vulsa & .drozdzik. Strona nie posiada responsywności, przez co może słabo działac na telefonach. W celu uzyskania source strony zapraszam na mojego githuba, bądz na discord hell-dev'a gdzie na kanale premium jest wszystko dokładnie wyjaśnione.
          </h2>

          <h1 className="text-white font-bold text-3xl top-[1rem] pl-[0.5rem] md:top-[0.5rem] md:pl-[0.5rem] relative">
            Linki
            <div className="wrapper top-[-8.8rem] w-[40rem] left-[6rem] absolute"></div>
            <h2 className="text-blue-300 font-normal text-base md:top-[0.5rem]  relative">
            <a href="">Github</a> • <a href="">My Discord</a>
          </h2>
          </h1>

    
        </div>
      </div>
      </motion.div>
      </motion.div>
    )}

<div
      className="w-full h-50 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group"
      onClick={openDiscordBotModal}
    >
       <Image
          className="object-cover translate-y-0 transition-transform duration-[3s] z-i"
          width={500}
          height={350}
          src={PlaceHolder}
          alt="cyskportfolio"
        />
    </div>

    {isDiscordBotModalOpen && (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-full bg-black backdrop-blur-md bg-opacity-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 35 } }}
      transition={{ duration: 0.5 }}
      className="p-4 rounded-lg w-[50rem] h-[50rem]"
    >
        
       <div
       className="fixed top-0 left-0 w-full  h-full bg-black backdrop-blur-md bg-opacity-50 flex items-center justify-center    "
       onClick={handleOverlayClick}
     >
      
       <div className=" p-4 rounded-lg w-[50rem] h-[50rem] ">
       <h2 className="text-center"></h2>
       <div className=" h-50 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group">
       <Image
             className="object-cover translate-y-0 transition-transform duration-[3s] z-i"
             src={PlaceHolder}
             width={800}
             alt="cyskportfolio"
           />
        </div>
          <h1 className="text-white font-bold text-3xl p-2 relative">
            Discord BOT
            <div className="wrapper top-[-8.3rem] w-2/3 left-[14rem] absolute"></div>
          </h1>

          <h2 className="text-blue-300 font-normal text-base top-[-0.5rem] left-[0.5rem] relative">
            discord.py v2 • RCON • MongoDB 
          </h2>

          <h2 className="pl-[0.5rem] top-[-.5rem] relative">
          Bot stworzony dla serwera GalaxyNetwork.pl jest połączony z serwerem Minecraft za pomocą RCON. Dzięki temu gracze mogą odbierać nagrody, pisząc odpowiednią wiadomość na kanale. Użyłem MongoDB, aby gracze mogli łączyć swoje konta Discord z kontami Minecraft. Bot posiada funkcje takie jak system lobby, system ticketów, moderacja, antylinki oraz antyraidy. Bot nie jest open-source, więc nie można uzyskać dostępu do kodu źródłowego. Jest w pełni zautomatyzowany, dzięki czemu wyręcza administrację serwera w wielu zadaniach.
          </h2>

          <h1 className="text-white font-bold text-3xl top-[1rem] pl-[0.5rem] md:top-[0.5rem] md:pl-[0.5rem] relative">
            Linki
            <div className="wrapper top-[-8.8rem] w-[40rem] left-[6rem] absolute"></div>
            <h2 className="text-blue-300 font-normal text-base md:top-[0.5rem]  relative">
            <a href="">Github</a> • <a href="">My Discord</a> • <a href="">GalaxyNetwork Discord</a>
          </h2>
          
          </h1> 
          
            
        </div>
      </div>
      </motion.div>
    </motion.div>
    )}  
    
    </>
  );
};

export default ProjectCard;
