"use client";
import styles from "./my_projects.module.scss";
import { myProjects } from "../utils/demoData";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { FaExpand } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MyProjectsPage = () => {
  const [projectInModal, setProjectInModal] = useState({});
  const [openModal, setOpenModal] = useState(false);

const handleOpenModal = ({slide1, slide2, slide3}) => {
  setOpenModal(!openModal);
    setProjectInModal({
      slide1,
      slide2,
      slide3,
    });    
  }

const handleCloseModal = () => {
  setOpenModal(!openModal);
    setProjectInModal({});
    // console.log(openModal);
  }

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  console.log(openModal);
  return (
    <div className={styles.project_display_page_design}>
      <div className={styles.heading}>My Projects</div>
      <div className={styles.project_section}>
        {myProjects.map((each, index) => (
          <div key={index} className={styles.each_project}>
            {/* Project Image */}
            <div className={styles.image_section}>
              <Image
                src={each.slide1}
                alt=""
                className={styles.image_design}
                sizes="100%"
                priority={true}
              />
            </div>

            {/* Zoom */}
            <div
              onClick={() =>
                handleOpenModal({
                  slide1: each.slide1,
                  slide2: each.slide2,
                  slide3: each.slide3,
                })
              }
              className={styles.zoom_project_details}
            >
              <FaExpand
                style={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              />
            </div>
            {/* Project Info */}
            <div className={styles.info_section}>
              <div className={styles.project_title}>{each.title}</div>
              <div className={styles.link_section}>
                {each.live_site && (
                  <div className={styles.single_link_container}>
                    <Link
                      className={styles.link_decoration}
                      href={each.live_site}
                    >
                      Live Site <FaChevronRight />
                    </Link>
                  </div>
                )}
                <div className={styles.single_link_container}>
                  <Link
                    className={styles.link_decoration}
                    href={{
                      pathname: "/project-details",
                      query: { id: each.id },
                    }}
                  >
                    Details <FaChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projectInModal &&
      Object.keys(projectInModal).length !== 0 &&
      projectInModal.constructor === Object ? (
        <div className={styles.modal_section_design}>
          <div
            className={`${styles.modal_body} ${
              openModal ? styles.open_modal_body : styles.close_modal_body
            }`}
          >
            <IoIosCloseCircleOutline
              onClick={handleCloseModal}
              className={styles.close_icon}
            />

            <div className="slider-container">
              <Slider leftControl="left" rightControl="right">
                <div className={styles.carousel_section}>
                  <Image
                    src={projectInModal.slide1}
                    alt=""
                    sizes="100%"
            priority={true}
                    className={styles.slider_image_design}
                  />
                </div>
                <div className={styles.carousel_section}>
                  <Image
                    src={projectInModal.slide2}
                    alt=""
                    sizes="100%"
            priority={true}
                    className={styles.slider_image_design}
                  />
                </div>
                <div className={styles.carousel_section}>
                  <Image
                    src={projectInModal.slide3}
                    alt=""
                    sizes="100%"
            priority={true}
                    className={styles.slider_image_design}
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyProjectsPage;
