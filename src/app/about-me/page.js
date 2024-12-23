import styles from "./about_me.module.scss";
import { myHistory } from "../utils/demoData";
const AboutMe = () => {

  console.log(myHistory)
  return (
    <div className={styles.my_history_design}>
      <div className={styles.history_section}>
        <div className={styles.section_alignment}>
          <div className={styles.heading}>Education</div>
          {myHistory.slice(0, 3).map((history, index) => (
            // Education main section
            <div className={styles.single_history} key={index}>
              {/* Education Details */}
              <div className={styles.details_section}>
                <div className={styles.name_time}>
                  <div className={styles.name_design}>{history.name}</div>
                  <div className={styles.time_design}>{history.duration}</div>
                </div>

                <div className={styles.title_design}>{history.title}</div>
                <div className={styles.learning_design}>{history.learning}</div>
              </div>
              <div className={styles.multi_column_divider}>
                <div className={styles.multi_column_pulse}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.multi_column_ruler}></div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.section_alignment}>
          <div className={styles.heading}>Work Experience</div>
          {myHistory.slice(3, 6).map((history, index) => (
            // Education main section
            <div className={styles.single_history} key={index}>
              {/* Education Details */}
              <div className={styles.details_section}>
                <div className={styles.name_time}>
                  <div className={styles.name_design}>{history.name}</div>
                  <div className={styles.time_design}>{history.duration}</div>
                </div>

                <div className={styles.title_design}>{history.title}</div>
                <div className={styles.learning_design}>{history.learning}</div>
              </div>
              <div className={styles.multi_column_divider}>
                <div className={styles.multi_column_pulse}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.multi_column_ruler}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
