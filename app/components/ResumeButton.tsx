import { LuDownload } from "react-icons/lu";
interface props {
  text: string;
}

// active:bg-transparent active:outline-2 active:text-black active:outline

export default function ResumeButton({ text }: props) {
  return (
    <button className="w-[153px] h-[56px] bg-black text-white py-4 px-5 rounded-lg font-semibold hover:bg-neutral-700 transition duration-75 flex gap-2 justify-center items-center">
      <div>{text}</div>
      <LuDownload width={20} height={20} />
    </button>
  );
}
