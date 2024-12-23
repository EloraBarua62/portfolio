"use client";
import { useSearchParams } from "next/navigation";
import { myProjects } from "../utils/demoData";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./project_details.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaNode, FaStripe } from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandSocketIo,
} from "react-icons/tb";
import {
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";
import { FaSass } from "react-icons/fa6";
import materialui from "../../../public/files/materialui.png";



const ProjectDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [projectDetails, setProjectDetails] = useState({});
  const item = myProjects.find((data) => data.id == id);
  console.log(item);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className={styles.project_details}>
      <div className={`slider-container ${styles.slider_alignment}`}>
        <Slider {...settings}>
          <div className={styles.carousel_section}>
            <Image
              src={item.slide1}
              alt=""
              sizes="100%"
            priority={true}
              className={styles.slider_image_design}
            />
          </div>
          <div className={styles.carousel_section}>
            <Image
              src={item.slide2}
              alt=""
              sizes="100%"
            priority={true}
              className={styles.slider_image_design}
            />
          </div>
          <div className={styles.carousel_section}>
            <Image
              src={item.slide3}
              alt=""
              sizes="100%"
            priority={true}
              className={styles.slider_image_design}
            />
          </div>
        </Slider>
      </div>
      <div className={styles.project_description_container}>
        <div className={styles.heading}>Project Details</div>
        <div className={styles.project_info_section}>
          <div className={styles.details_container}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.details}>{item.details}</div>
            <ul>
              {item.key_features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            {/* Technology list */}
            <div className={styles.tech}>Technology</div>
            <div className={styles.technology_details}>
              {item.technology.map((tech, i) => (
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
                      <FaSass style={{ fontSize: "30px", color: "#ff80ce" }} />
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
                      <FaNode style={{ fontSize: "40px", color: "#90f542" }} />
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
          </div>
          <div className={styles.other_details}>
            <div className={styles.each_details}>
              <div>Type : </div>
              <div className={styles.answer}>{item.type}</div>
            </div>
            <div className={styles.each_details}>
              <div>Work : </div>
              <div className={styles.answer}>{item.work}</div>
            </div>
            <div className={styles.each_details}>
              <div>User :</div>
              <div className={styles.answer}>{item.user}</div>
            </div>
            <div className={styles.each_details}>
              <div>Duration :</div>
              <div className={styles.answer}>{item.duration}</div>
            </div>
            <div className={styles.each_details}>
              <div>Start Date :</div>
              <div className={styles.answer}>{item.start_date}</div>
            </div>
            <div className={styles.each_details}>
              <div>End Date :</div>
              <div className={styles.answer}>{item.end_date}</div>
            </div>
            <div className={styles.each_details}>
              <div>Status :</div>
              <div className={styles.answer}>{item.status}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
