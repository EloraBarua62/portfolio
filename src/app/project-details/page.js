"use client";
import { useSearchParams } from "next/navigation";
import { myProjects } from "../utils/demoData";
import React, { Suspense, useState } from "react";
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

// Dynamic rendering configuration
export const dynamic = "force-dynamic";

const ProjectDetailsComponent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
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
          </div>
          <div className={styles.other_details}>
            <div className={styles.each_details}>
              <div>Type: </div>
              <div className={styles.answer}>{item.type}</div>
            </div>
            <div className={styles.each_details}>
              <div>Work: </div>
              <div className={styles.answer}>{item.work}</div>
            </div>
            <div className={styles.each_details}>
              <div>User:</div>
              <div className={styles.answer}>{item.user}</div>
            </div>
            <div className={styles.each_details}>
              <div>Duration:</div>
              <div className={styles.answer}>{item.duration}</div>
            </div>
            <div className={styles.each_details}>
              <div>Start Date:</div>
              <div className={styles.answer}>{item.start_date}</div>
            </div>
            <div className={styles.each_details}>
              <div>End Date:</div>
              <div className={styles.answer}>{item.end_date}</div>
            </div>
            <div className={styles.each_details}>
              <div>Status:</div>
              <div className={styles.answer}>{item.status}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectDetails = () => (
  <Suspense fallback={<div>Loading project details...</div>}>
    <ProjectDetailsComponent />
  </Suspense>
);

export default ProjectDetails;
