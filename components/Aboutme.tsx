import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
        Cześć! Mam na imię Olivier, zajmuję się głównie front-endem, lecz uczę się również back-endu. Lubię pograć sobie na komputerze w przeróżne gry, ale to programowanie mnie najbardziej interesuje. Programuję już od około roku. Najdłużej gram w Minecrafta, bo aż ponad 9 lat. Niestety, odbiło się to na moim zachowaniu, przez co jestem czasem toksyczną osobą. Moja wiedza na temat tej gry jest ogromna. W wolnym czasie lubię pomagać ludziom, którzy dopiero zaczynają wchodzić w świat programowania. Głównie zajmuję się tworzeniem stron internetowych oraz botów na komunikator Discord. Aktualnie uczę się tworzenia aplikacji webowych, takich jak np. Discord.
          
        </p>
        <p>
        Poszukuję różnych projektów, w których będę mógł rozwijać swoje umiejętności oraz zdobywać doświadczenie. Chętnie podejmę się nowych wyzwań i współpracy z zespołem!
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
