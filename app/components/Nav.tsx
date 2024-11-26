import NavLink from "./NavLink";
import ResumeButton from "./ResumeButton";

export default function Nav() {
  return (
    // <nav className="px-20 py-5 flex justify-between items-center backdrop-blur-sm fixed w-[100%]">
    <nav className="px-20 py-5 flex justify-between items-center w-[100%]">
      <div>Personal</div>
      <div className="text-[20px] gap-8 flex font-semibold">
        <NavLink href={"#hero"}>About Me</NavLink>
        <NavLink href={"#skills"}>Skills</NavLink>
        <NavLink href={"#projects"}>Projects</NavLink>
        <NavLink href={"#"}>Contact Me</NavLink>
      </div>
      <ResumeButton text="Resume" />
    </nav>
  );
}
