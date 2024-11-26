import Image from "next/image";
import heroimg from "../images/heroimg.jpg";
import SocialButton from "./SocialButton";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
} from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section id="hero" className="py-[40px] px-20">
      <div className=" flex">
        <div className="w-2/3">
          <div className="mb-8 text-4xl leading-[56px]">
            <div className="font-semibold">
              Hello I'm{" "}
              <span className="font-extrabold">Stevennius Chandra.</span>
            </div>
            <div>
              <span className="font-extrabold underline">
                Frontend Developer
              </span>{" "}
              based in <span className="font-extrabold">Indonesia</span>
            </div>
          </div>
          <p className="text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nostrum nisi possimus dolore inventore cum voluptatem distinctio,
            vero ex consequatur iste recusandae reprehenderit voluptatibus a
            praesentium delectus harum accusamus unde!
          </p>
          <div className="mt-11 flex gap-8">
            <SocialButton
              icon={FaInstagram}
              link="https://instagram.com/stevennnius"
            />
            <SocialButton icon={FaGithub} link="https://github.com/vennius" />
            <SocialButton icon={FaXTwitter} link="https://x.com/venniusch" />
            <SocialButton
              icon={FaSnapchatGhost}
              link="https://snapchat.com/add/stevannius"
            />
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-start">
          <Image alt="heroim" src={heroimg} width={740 / 2} height={740 / 2} />
        </div>
      </div>
    </section>
  );
}
