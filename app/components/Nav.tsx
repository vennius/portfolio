import NavLink from "./NavLink";
import ResumeButton from "./ResumeButton";

export default function Nav() {
  return (
    <nav className="px-20 py-5 flex justify-between items-center">
      <div>Personal</div>
      <div className="text-[20px] gap-8 flex font-semibold">
        <NavLink href={"#"}>About Me</NavLink>
        <NavLink href={"#"}>Skills</NavLink>
        <NavLink href={"#"}>Projects</NavLink>
        <NavLink href={"#"}>Contact Me</NavLink>
      </div>
      <ResumeButton text="Resume" />
    </nav>
  );
}
