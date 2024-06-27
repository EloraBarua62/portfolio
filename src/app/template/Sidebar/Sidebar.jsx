"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.scss";
import profile from "../../../../public/profile.jpg";
import {
  bioDataDetails,
  languageTypes,
  proLangTypes,
  otherSpeciality,
} from "../../utils/demoData";
import { TiTick } from "react-icons/ti";
import { FaDownload } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";



const Sidebar = () => {
  return (
    <div className={styles.sidebar_section}>
      {/* Sidebar header */}
      <div className={styles.profile_section}>
        {/* Profile picture */}
        <div className={styles.profile_container}>
          <div className={styles.picture_setup_container}>
            <Image src={profile} alt="" className={styles.picure_design} />
          </div>
        </div>

        {/* My name */}
        <h3>Elora Barua</h3>

        {/* My designation */}
        <p>Full Stack Developer / Problem Solver</p>
      </div>

      {/* General Info */}
      <div className={styles.general_info_scrol_section}>
        {/* Bio data */}
        <div className={styles.bio_data_section}>
          {bioDataDetails.map((each, idx) => (
            <div key={idx} className={styles.details}>
              <div className={styles.title}>{each.title}:</div>
              <div className={styles.value}>{each.value}</div>
            </div>
          ))}
        </div>

        {/* Speaking language percentage */}
        <div className={styles.lang_section}>
          {languageTypes.map((each, idx) => (
            <div key={idx} className={styles.lang_performance}>
              {/* Radical percentage */}
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className={styles.progress_cycle}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className={`${styles.path} ${each.step}`}
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className={styles.value}>{each.value}%</div>

              <div className={styles.title}>{each.title}</div>
            </div>
          ))}
        </div>

        {/* Progranning language percentage */}
        <div className={styles.programming_lang_section}>
          {proLangTypes.map((each, idx) => (
            <div key={idx} className={styles.each_lang_section}>
              {/* Title and percentage value display */}
              <div className={styles.title}>{each.title}</div>
              {/* Progress bar */}
              <div className={styles.progress_line}>
                <span className={`${each.step}`}></span>
              </div>
            </div>
          ))}
        </div>

        {/* Other speciality */}
        <div className={styles.other_special_section}>
          {otherSpeciality.map((each, idx) => (
            <div key={idx} className={styles.special_property}>
              <TiTick className={styles.icon_design} />
              <div>{each}</div>
            </div>
          ))}
        </div>

        {/* Download cv */}
        <div className={styles.resume_download}>
          <Link
            href="files/resume.pdf"
            target="_blank"
            download
            style={{ textDecoration: "none" }}
          >
            <button className={styles.button_design}>
              <div>Download Resume </div> <FaDownload />
            </button>
          </Link>
        </div>
      </div>

      {/* Footer section */}
      <div className={styles.footer_section}>
        <div className={styles.icon}>
          <h4>LinkedIn</h4>
          <FaLinkedinIn />
        </div>
        <div className={styles.icon}>
          <h4>
            Github
          </h4>
        <FaGithub />
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
