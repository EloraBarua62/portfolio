import Image from "next/image";
import Banner from "./template/Banner/Banner";
import MyProjects from "./template/MyProjects/MyProjects";

export default function Home() {
  return (
      <div className='main_section_design'>
        
        {/* Banner */}
        <Banner/>

        {/* Count up */}

        {/* Projects */}
        <MyProjects/>
        
      </div>
  );
}
