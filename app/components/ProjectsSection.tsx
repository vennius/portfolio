import Image from "next/image";
import project1 from "../images/projects/project1.jpg";
import project2 from "../images/projects/project2.jpg";
import project3 from "../images/projects/project3.jpg";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-black text-white">
      <div className="py-14 px-20 flex flex-col gap-16">
        <div className="text-4xl text-center">
          My <span className="font-extrabold">Projects</span>
        </div>
        <div className="flex">
          <div className="w-1/2 flex items-center">
            <Image
              src={project1}
              alt="project 1"
              width={430}
              height={397}
              className="rounded-2xl"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center gap-6">
            <div className="font-extrabold text-4xl">01</div>
            <div className="font-bold text-2xl">Lorem ipsum dol</div>
            <p className="text-zinc-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              incidunt accusamus deleniti ut laudantium quas modi, excepturi
              amet, aperiam vel voluptatum accusantium commodi tenetur quam enim
              sequi id aut molestiae.
            </p>
            <Link href={"#"}>
              <LuExternalLink />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 flex flex-col justify-center gap-6">
            <div className="font-extrabold text-4xl">02</div>
            <div className="font-bold text-2xl">Lorem ipsum dol</div>
            <p className="text-zinc-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              incidunt accusamus deleniti ut laudantium quas modi, excepturi
              amet, aperiam vel voluptatum accusantium commodi tenetur quam enim
              sequi id aut molestiae.
            </p>
            <Link href={"#"}>
              <LuExternalLink />
            </Link>
          </div>
          <div className="w-1/2 flex items-center justify-end">
            <Image
              src={project2}
              alt="project 2"
              width={430}
              height={397}
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 flex items-center">
            <Image
              src={project3}
              alt="project 3"
              width={430}
              height={397}
              className="rounded-2xl"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center gap-6">
            <div className="font-extrabold text-4xl">03</div>
            <div className="font-bold text-2xl">Lorem ipsum dol</div>
            <p className="text-zinc-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              incidunt accusamus deleniti ut laudantium quas modi, excepturi
              amet, aperiam vel voluptatum accusantium commodi tenetur quam enim
              sequi id aut molestiae.
            </p>
            <Link href={"#"}>
              <LuExternalLink />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
