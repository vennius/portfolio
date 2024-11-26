import { IconType } from "react-icons";
import { SiJavascript } from "react-icons/si";

interface props {
  icon: IconType;
  title: string;
}

export default function SkillCard(props: props) {
  return (
    <div className="w-40 h-40 outline outline-2 rounded-sm flex justify-center items-center hover:bg-black hover:text-white transition duration-75 hover:cursor-pointer hover:scale-110">
      <div className="flex flex-col items-center gap-6">
        <props.icon size={40} />
        <div className="font-bold">{props.title}</div>
      </div>
    </div>
  );
}
