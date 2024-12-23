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
          {/* Project Image and Details in single and multiple column */}
          <div className={styles.project_info_section}>
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
                          <SiTailwindcss
                            style={{ fontSize: "25px", color: "#0ef" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "SCSS" && (
                        <>
                          <FaSass
                            style={{ fontSize: "30px", color: "#ff80ce" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "MaterialUI" && (
                        <>
                          <Image
                            src={materialui}
                            alt=""
                            style={{ width: "30px", height: "30px" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "React" && (
                        <>
                          <TbBrandReactNative
                            style={{ fontSize: "25px", color: "#86e8fc" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Redux" && (
                        <>
                          <TbBrandRedux
                            style={{ fontSize: "25px", color: "#cd52fa" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Next.js" && (
                        <>
                          <TbBrandNextjs
                            style={{ fontSize: "30px", color: "white" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Node.js" && (
                        <>
                          <FaNode
                            style={{ fontSize: "40px", color: "#90f542" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Express" && (
                        <>
                          <SiExpress
                            style={{
                              fontSize: "28px",
                              fontWeight: "bolder",
                              color: "#f8fc03",
                            }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "MySQL" && (
                        <>
                          <SiMysql
                            style={{
                              fontSize: "40px",
                              fontWeight: "bolder",
                              color: "#fca12b",
                            }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "JWT" && (
                        <>
                          <SiJsonwebtokens
                            style={{ fontSize: "25px", color: "#fa3e67" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Socket.io" && (
                        <>
                          <TbBrandSocketIo
                            style={{ fontSize: "30px", color: "#0ef" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "MongoDB" && (
                        <>
                          <SiMongodb
                            style={{ fontSize: "30px", color: "#90f542" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Firebase" && (
                        <>
                          <RiFirebaseLine
                            style={{ fontSize: "30px", color: "#fab83e" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Stripe" && (
                        <>
                          <FaStripe
                            style={{ fontSize: "40px", color: "#c186fc" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className={styles.link_section}>
                  Link :
                  {each.live_site && (
                    <Link
                      className={styles.link_decoration}
                      href={each.live_site}
                    >
                      Live Site <FaLink />
                    </Link>
                  )}
                  {each.client_site && (
                    <Link
                      className={styles.link_decoration}
                      href={each.client_site}
                    >
                      Client Site <BsGithub style={{ fontSize: "20px" }} />
                    </Link>
                  )}
                  {each.server_site && (
                    <Link
                      className={styles.link_decoration}
                      href={each.server_site}
                    >
                      Server Site <BsGithub style={{ fontSize: "20px" }} />
                    </Link>
                  )}
                  {each.video && (
                    <Link className={styles.link_decoration} href={each.video}>
                      Video Link <LuVideo style={{ fontSize: "24px" }} />
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
                          <SiTailwindcss
                            style={{ fontSize: "25px", color: "#0ef" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "SCSS" && (
                        <>
                          <FaSass
                            style={{ fontSize: "30px", color: "#ff80ce" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "MaterialUI" && (
                        <>
                          <Image
                            src={materialui}
                            alt=""
                            style={{ width: "30px", height: "30px" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "React" && (
                        <>
                          <TbBrandReactNative
                            style={{ fontSize: "25px", color: "#86e8fc" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Redux" && (
                        <>
                          <TbBrandRedux
                            style={{ fontSize: "25px", color: "#cd52fa" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Next.js" && (
                        <>
                          <TbBrandNextjs
                            style={{ fontSize: "30px", color: "white" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Node.js" && (
                        <>
                          <FaNode
                            style={{ fontSize: "40px", color: "#90f542" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Express" && (
                        <>
                          <SiExpress
                            style={{
                              fontSize: "28px",
                              fontWeight: "bolder",
                              color: "#f8fc03",
                            }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "MySQL" && (
                        <>
                          <SiMysql
                            style={{
                              fontSize: "40px",
                              fontWeight: "bolder",
                              color: "#fca12b",
                            }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "JWT" && (
                        <>
                          <SiJsonwebtokens
                            style={{ fontSize: "25px", color: "#fa3e67" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Socket.io" && (
                        <>
                          <TbBrandSocketIo
                            style={{ fontSize: "30px", color: "#0ef" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "MongoDB" && (
                        <>
                          <SiMongodb
                            style={{ fontSize: "30px", color: "#90f542" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Firebase" && (
                        <>
                          <RiFirebaseLine
                            style={{ fontSize: "30px", color: "#fab83e" }}
                          />
                          <div className={styles.tech_name}>{tech}</div>
                        </>
                      )}
                      {tech === "Stripe" && (
                        <>
                          <FaStripe
                            style={{ fontSize: "40px", color: "#c186fc" }}
                          />
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
                      Live Site <FaLink />
                    </Link>
                  ) : (
                    ""
                  )}
                  {each.client_site.length > 0 ? (
                    <Link
                      className={styles.link_decoration}
                      href={each.client_site}
                    >
                      Client Site <BsGithub style={{ fontSize: "20px" }} />
                    </Link>
                  ) : (
                    ""
                  )}
                  {each.server_site.length > 0 ? (
                    <Link
                      className={styles.link_decoration}
                      href={each.server_site}
                    >
                      Server Site <BsGithub style={{ fontSize: "20px" }} />
                    </Link>
                  ) : (
                    ""
                  )}
                  {each.video.length > 0 ? (
                    <Link className={styles.link_decoration} href={each.video}>
                      Video Link <LuVideo style={{ fontSize: "24px" }} />
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
