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
              <Image src={each.slide1} alt="" className={styles.image_design} />
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
                  fontSize: "20px",
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
                    className={styles.slider_image_design}
                  />
                </div>
                <div className={styles.carousel_section}>
                  <Image
                    src={projectInModal.slide2}
                    alt=""
                    className={styles.slider_image_design}
                  />
                </div>
                <div className={styles.carousel_section}>
                  <Image
                    src={projectInModal.slide3}
                    alt=""
                    className={styles.slider_image_design}
                  />
                </div>
                {/* <Image
                className={styles.slider_image_design}
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
              />
              <Image
                className={styles.slider_image_design}
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
              /> */}
              </Slider>
            </div>

            {/* <Carousel>
              <Image
                src={projectInModal.slide1}
                alt=""
                className={styles.slider_image_design}
              />
              <Image
                src={projectInModal.slide2}
                alt=""
                className={styles.slider_image_design}
              />
              <Image
                src={projectInModal.slide3}
                alt=""
                className={styles.slider_image_design}
              />
              <div className={styles.carousel_section}>
                <Image
                  src={projectInModal.slide1}
                  alt=""
                  className={styles.slider_image_design}
                />
              </div>
              <div className={styles.carousel_section}>
                <Image
                  src={projectInModal.slide2}
                  alt=""
                  className={styles.slider_image_design}
                />
              </div>
              <div className={styles.carousel_section}>
                <Image
                  src={projectInModal.slide3}
                  alt=""
                  className={styles.slider_image_design}
                />
              </div>
            </Carousel> */}
          </div>
        </div>
      ) : (
        ""
      )}

      {/* {projectInModal &&
      Object.keys(projectInModal).length !== 0 &&
      projectInModal.constructor === Object ? (
        <div className={styles.modal_section_design}>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Body className={styles.modal_body_design}>
              <Carousel>
                <div className={styles.carousel_section}>
                  <Image
                    src={projectInModal.slide1}
                    alt=""
                    className={styles.carousel_image_design}
                  />
                </div>
                <div className={styles.carousel_section}>
                  <Image
                    src={projectInModal.slide2}
                    alt=""
                    className={styles.carousel_image_design}
                  />
                </div>
                <div className={styles.carousel_section}>
                  <Image
                    src={projectInModal.slide3}
                    alt=""
                    className={styles.carousel_image_design}
                  />
                </div>
              </Carousel>
              <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
          </Modal>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default MyProjectsPage;
