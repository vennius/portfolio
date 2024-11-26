import { SiExpress, SiJavascript, SiTypescript } from "react-icons/si";
import SkillCard from "./SkillCard";
import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 px-20 flex flex-col gap-14">
      <div className="text-4xl text-center">
        My <span className="font-extrabold">Skills</span>
      </div>
      <div className="flex gap-16 flex-wrap justify-center">
        <SkillCard icon={SiJavascript} title="Javascript" />
        <SkillCard icon={SiTypescript} title="Typescript" />
        <SkillCard icon={FaPhp} title="PHP" />
        <SkillCard icon={FaNodeJs} title="NodeJs" />
        <SkillCard icon={SiExpress} title="Express" />
        <SkillCard icon={FaReact} title="React" />
        <SkillCard icon={FaGitAlt} title="Git" />
        <SkillCard icon={RiTailwindCssFill} title="Tailwind" />
        <SkillCard icon={FaHtml5} title="HTML" />
        <SkillCard icon={FaCss3} title="CSS" />
      </div>
    </section>
  );
}
