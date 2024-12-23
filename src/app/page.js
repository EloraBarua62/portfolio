import Image from "next/image";
import Banner from "./template/Banner/Banner";
import MyProjects from "./template/MyProjects/MyProjects";
import CountDetails from "./template/CountDetails/CountDetails";
import SkillsSet from "./template/SkillsSet/SkillsSet";

export default function Home() {
  return (
    <div className="main_section_design">
      {/* Banner */}
      <Banner />

      {/* Count up */}
      {/* <CountDetails/> */}

      {/* Projects */}
      <MyProjects />

      {/* Skillset */}
      <SkillsSet/>
    </div>
  );
}
