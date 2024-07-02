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



// function myfunction(value) {
//   const item = value.getBoundingClientRect();
//   return (
//     item.top >= 0 &&
//     item.left >= 0 &&
//     item.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     item.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }
const MyProjects = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log(elementRef.current.getBoundingClientRect());
  //     if (elementRef.current) {
  //       const rect = elementRef.current.getBoundingClientRect();
  //       const isVisible =
  //         rect.top >= 0 &&
  //         rect.left >= 0 &&
  //         rect.bottom >=
  //           (window.innerHeight || document.documentElement.clientHeight) &&
  //         rect.right <=
  //           (window.innerWidth || document.documentElement.clientWidth);

  //       console.log(rect.top, rect.left, rect.bottom, rect.right)
  //       console.log(
  //         window.innerHeight,
  //         window.innerWidth,
  //         document.documentElement.clientHeight
  //       );
  //       setIsVisible(isVisible);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   // Initial check on component mount
  //   handleScroll();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });
  return (
    <div className={styles.project_showcase_section}>
      <div className={styles.heading}>My Projects</div>
      {myProjects.slice(0, 3).map((each, index) => (
        <div key={index} className={styles.project_display_container}>
          <div className={styles.project_info_section}>
            {index === 1 ? (
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
                {/* <div
                ref={elementRef}
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: isVisible ? "green" : "red",
                  margin: "50px",
                }}
              >
                {" "}
                {isVisible ? "Visible" : "Not Visible"}
              </div> */}
              </div>
            ) : (
              <div className="project_image_display">
                <Image
                  src={each.webimage}
                  alt=""
                  className={`image_setup ${each.class}`}
                ></Image>
              </div>
            )}

            <div className={styles.divider}>
              <div className={styles.pulse}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles.ruler}></div>
            </div>
            {index === 1 ? (
              <div className="project_image_display">
                <Image
                  src={each.webimage}
                  alt=""
                  className={`image_setup ${each.class}`}
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
                {/* <div
                ref={elementRef}
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: isVisible ? "green" : "red",
                  margin: "50px",
                }}
              >
                {" "}
                {isVisible ? "Visible" : "Not Visible"}
              </div> */}
              </div>
            )}
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;