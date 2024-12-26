"use client";
import { useState } from "react";
import styles from "./PreviousSkill.module.scss";

const PreviousSkill = ({ myskill, side }) => {
  console.log(myskill, side);
  const [addProperty, setAddProperty] = useState({});
  const applySkillDetails = (skill) => {
    setAddProperty(skill);
  };
  const removeSkillDetails = () => {
    setAddProperty({});
  };

  return (
    <div className={styles.prev_skill_section}>
      <div className={styles.heading}>Previous learning</div>
      <div className={styles.display_projects}>
        {myskill.map((skill, idx) => (
          <div
            key={idx}         
            // className={`${styles.parent_skill_design} ${styles[`parent_skill_design_${idx}`]}`}
            className={`${styles.parent_skill_design} ${side == 'left'? styles.leftbackgound : styles.rightbackgound}`}
            onMouseEnter={() => applySkillDetails(skill)}
            onMouseLeave={removeSkillDetails}
          >
            <div className={styles.skill_design}>
              <h4 className={styles.title}>{skill.title}</h4>
              <p className={styles.short_details}>{skill.short_description}</p>
            </div>
            <div className={styles.popup_design}>
              <h4 style={{ color: "teal" }}>{addProperty.language}</h4>
              <p className={styles.popup_language}>{addProperty.learning}</p>
            </div>
            {/* {addProperty &&
            Object.keys(addProperty).length !== 0 &&
            addProperty.constructor === Object ? (
              <div className={styles.popup_design}>
                <h4 style={{ color: "teal" }}>{addProperty.language}</h4>
                <p className={styles.popup_language}>{addProperty.learning}</p>
              </div>
            ) : (
              ""
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousSkill;
