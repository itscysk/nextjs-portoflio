import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Moje umiejętności" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput title="Reactjs" link="https://react.dev/" />
        <SkillsInput title="Nextjs" link="https://nextjs.org/" />
        <SkillsInput title="Nodejs" link="https://nodejs.org/en" />
        <SkillsInput title="MongoDB" link="https://www.mongodb.com/" />
        <SkillsInput title="Tailwindcss" link="https://tailwindcss.com/" />
        <SkillsInput title="C++" link="" />
        <SkillsInput title="Python" link="" />
        <SkillsInput
          title="HTML"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput title="VS Code" link="https://code.visualstudio.com/" />
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="Trello" link="https://trello.com/en" />
        <SkillsInput title="Figma" link="https://www.figma.com/" />
        <SkillsInput title="Canva" link="https://www.canva.com/" />
        <SkillsInput title="Website Design" link="https://themeforest.net/" />
        <SkillsInput title="netlify" link="https://www.netlify.com/" />
      </div>
    </div>
  );
};

export default Skills;
