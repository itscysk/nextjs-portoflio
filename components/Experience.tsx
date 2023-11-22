import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Moje doświadczenie" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="starify.tech"
          subTitle="Web Developer & Bot Developer 2023 - 2023"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="notecode.pl"
          subTitle="Web Developer & Bot Developer 2023 - present"
          icon={<SiToptal />}
        />
        <ExperienceCard
          title="dc.helldev.pl"
          subTitle="Web Developer & Bot Developer 2023 - present"
          icon={<SiFreelancer />}
        />

        <ExperienceCard
          title="avehc.pl"
          subTitle="Web Developer & Bot Developer 2023 - 2023"
          icon={<SiFiverr />}
        />
      </div>
    </div>
  );
};

export default Experience;
