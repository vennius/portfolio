import Image from "next/image";
import Link from "next/link";
import ResumeButton from "./components/ResumeButton";
import NavLink from "./components/NavLink";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkilllsSection";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <SkillsSection />
    </>
  );
}
