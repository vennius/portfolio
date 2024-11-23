import Link from "next/link";
import { IconType } from "react-icons";
import { LuDownload } from "react-icons/lu";

interface props {
  icon: IconType;
  link: string;
}

export default function SocialButton(props: props) {
  return (
    <Link href={props.link} target="_blank">
      <button className="w-14 h-14 bg-transparent outline outline-2 hover:bg-black hover:text-white py-4 px-5 rounded-md font-semibold transition duration-75 flex justify-center items-center">
        <props.icon width={40} height={40} />
      </button>
    </Link>
  );
}
