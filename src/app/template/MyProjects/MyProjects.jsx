"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./MyProjects.module.scss";
import { myProjects } from "../../utils/demoData";
import { FaLink, FaNode, FaStripe } from "react-icons/fa";
import { LuVideo } from "react-icons/lu";
import { BsGithub } from "react-icons/bs";
import { TbBrandNextjs, TbBrandReactNative, TbBrandRedux, TbBrandSocketIo } from "react-icons/tb";
import { SiExpress, SiJsonwebtokens, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";
import { FaSass } from "react-icons/fa6";
import materialui from '../../../../public/files/materialui.png'


const MyProjects = () => {
  return (
    <div className={styles.project_showcase_section}>
      <div className={styles.heading}>My Projects</div>
      {myProjects.slice(0, 3).map((each, index) => (
        <div key={index} className={styles.project_display_container}>
          <div className={styles.single_column_divider}>
            <div className={styles.single_column_pulse}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={styles.single_column_ruler}></div>
          </div>

          
          {/* Project Image and Details in single column for small device*/}
          <div className={styles.project_info_section_small}>
              <div className="project_image_display_small">
                <Image
                  src={each.webimage}
                  alt=""
                  className={`image_setup ${each.class}`}
                  sizes="100%"
                  priority={true}
                ></Image>
              </div>
              <div className={styles.project_info}>
                <div className={styles.title}>{each.title}</div>
                <div className={styles.details}>{each.short_details}</div>

                {/* <div className={styles.tech}>Technology</div> */}
                <div className={styles.technology_details}>
                  {each.technology.map((tech, i) => (
                    <div key={i} className={styles.each_tech_section}>
                      {tech === "Tailwind" && (
                        <>
                          <SiTailwindcss className={styles.tailwind} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "SCSS" && (
                        <>
                          <FaSass className={styles.scss} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "MaterialUI" && (
                        <>
                          <Image
                            src={materialui}
                            alt=""
                            className={styles.material}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "React" && (
                        <>
                          <TbBrandReactNative className={styles.react} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Redux" && (
                        <>
                          <TbBrandRedux className={styles.redux} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Next.js" && (
                        <>
                          <TbBrandNextjs className={styles.next} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Node.js" && (
                        <>
                          <FaNode className={styles.node} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Express" && (
                        <>
                          <SiExpress className={styles.express} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "MySQL" && (
                        <>
                          <SiMysql className={styles.mysql} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "JWT" && (
                        <>
                          <SiJsonwebtokens className={styles.jwt} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Socket" && (
                        <>
                          <TbBrandSocketIo className={styles.socket} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "MongoDB" && (
                        <>
                          <SiMongodb className={styles.mongodb} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Firebase" && (
                        <>
                          <RiFirebaseLine className={styles.firebase} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Stripe" && (
                        <>
                          <FaStripe className={styles.stripe} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className={styles.link_section}>
                  Link :
                  {each.live_site.length > 0 ? (
                    <Link
                      className={styles.link_decoration}
                      href={each.live_site}
                    >
                      Live<FaLink />
                    </Link>
                  ) : (
                    ""
                  )}
                  {each.client_site.length > 0 ? (
                    <Link
                      className={styles.link_decoration}
                      href={each.client_site}
                    >
                      Client<BsGithub />
                    </Link>
                  ) : (
                    ""
                  )}
                  {each.server_site.length > 0 ? (
                    <Link
                      className={styles.link_decoration}
                      href={each.server_site}
                    >
                      Server<BsGithub />
                    </Link>
                  ) : (
                    ""
                  )}
                  {each.video.length > 0 ? (
                    <Link className={styles.link_decoration} href={each.video}>
                      Video<LuVideo />
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
          </div>

          {/* Project Image and Details in multiple column for large device*/}
          <div className={styles.project_info_section_large}>
            {index === 1 ? (
              // Column 1: Info,
              <div className={styles.project_info}>
                <div className={styles.title}>{each.title}</div>
                <div className={styles.details}>{each.short_details}</div>

                <div className={styles.technology_details}>
                  {each.technology.map((tech, i) => (
                    <div key={i} className={styles.each_tech_section}>
                      {tech === "Tailwind" && (
                        <>
                          <SiTailwindcss className={styles.tailwind} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "SCSS" && (
                        <>
                          <FaSass className={styles.scss} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "MaterialUI" && (
                        <>
                          <Image
                            src={materialui}
                            alt=""
                            className={styles.material}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "React" && (
                        <>
                          <TbBrandReactNative className={styles.react} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Redux" && (
                        <>
                          <TbBrandRedux className={styles.redux} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Next.js" && (
                        <>
                          <TbBrandNextjs className={styles.next} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Node.js" && (
                        <>
                          <FaNode className={styles.node} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Express" && (
                        <>
                          <SiExpress className={styles.express} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "MySQL" && (
                        <>
                          <SiMysql className={styles.mysql} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "JWT" && (
                        <>
                          <SiJsonwebtokens className={styles.jwt} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Socket" && (
                        <>
                          <TbBrandSocketIo className={styles.socket} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "MongoDB" && (
                        <>
                          <SiMongodb className={styles.mongodb} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Firebase" && (
                        <>
                          <RiFirebaseLine className={styles.firebase} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Stripe" && (
                        <>
                          <FaStripe className={styles.stripe} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className={styles.link_section}>
                  Link:
                  {each.live_site && (
                    <Link
                      className={styles.link_decoration}
                      href={each.live_site}
                    >
                      Live<FaLink />
                    </Link>
                  )}
                  {each.client_site && (
                    <Link
                      className={styles.link_decoration}
                      href={each.client_site}
                    >
                      Client<BsGithub />
                    </Link>
                  )}
                  {each.server_site && (
                    <Link
                      className={styles.link_decoration}
                      href={each.server_site}
                    >
                      Server<BsGithub />
                    </Link>
                  )}
                  {each.video && (
                    <Link className={styles.link_decoration} href={each.video}>
                      Video<LuVideo />
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <div className="project_image_display">
                <Image
                  src={each.webimage}
                  alt=""
                  className={`image_setup ${each.class}`}
                  sizes="100%"
                  priority={true}
                ></Image>
              </div>
            )}

            <div className={styles.multi_column_divider}>
              <div className={styles.multi_column_pulse}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles.multi_column_ruler}></div>
            </div>
            {index === 1 ? (
              // Column 2: Image
              <div className="project_image_display">
                <Image
                  src={each.webimage}
                  alt=""
                  className={`image_setup ${each.class}`}
                  sizes="100%"
                  priority={true}
                ></Image>
              </div>
            ) : (
              <div className={styles.project_info}>
                <div className={styles.title}>{each.title}</div>
                <div className={styles.details}>{each.short_details}</div>

                {/* <div className={styles.tech}>Technology</div> */}
                <div className={styles.technology_details}>
                  {each.technology.map((tech, i) => (
                    <div key={i} className={styles.each_tech_section}>
                      {tech === "Tailwind" && (
                        <>
                          <SiTailwindcss className={styles.tailwind} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "SCSS" && (
                        <>
                          <FaSass className={styles.scss} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "MaterialUI" && (
                        <>
                          <Image
                            src={materialui}
                            alt=""
                            className={styles.material}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "React" && (
                        <>
                          <TbBrandReactNative className={styles.react} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Redux" && (
                        <>
                          <TbBrandRedux className={styles.redux} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Next.js" && (
                        <>
                          <TbBrandNextjs className={styles.next} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Node.js" && (
                        <>
                          <FaNode className={styles.node} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Express" && (
                        <>
                          <SiExpress className={styles.express} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "MySQL" && (
                        <>
                          <SiMysql className={styles.mysql} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "JWT" && (
                        <>
                          <SiJsonwebtokens className={styles.jwt} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Socket" && (
                        <>
                          <TbBrandSocketIo className={styles.socket} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "MongoDB" && (
                        <>
                          <SiMongodb className={styles.mongodb} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Firebase" && (
                        <>
                          <RiFirebaseLine className={styles.firebase} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Stripe" && (
                        <>
                          <FaStripe className={styles.stripe} />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className={styles.link_section}>
                  Link :
                  {each.live_site.length > 0 ? (
                    <Link
                      className={styles.link_decoration}
                      href={each.live_site}
                    >
                      Live<FaLink />
                    </Link>
                  ) : (
                    ""
                  )}
                  {each.client_site.length > 0 ? (
                    <Link
                      className={styles.link_decoration}
                      href={each.client_site}
                    >
                      Client<BsGithub />
                    </Link>
                  ) : (
                    ""
                  )}
                  {each.server_site.length > 0 ? (
                    <Link
                      className={styles.link_decoration}
                      href={each.server_site}
                    >
                      Server<BsGithub />
                    </Link>
                  ) : (
                    ""
                  )}
                  {each.video.length > 0 ? (
                    <Link className={styles.link_decoration} href={each.video}>
                      Video<LuVideo />
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
