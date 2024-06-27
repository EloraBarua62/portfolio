import styles from './MyProjects.module.scss';
import {myProjects} from '../../utils/demoData'
import Image from 'next/image';

const MyProjects = () => {
    
    return (
      <div className={styles.project_showcase_section}>
        <div>My Projects</div>
        {myProjects.map((each, index) => (
          <div key={index} className={styles.project_display_container}>
            <div className={styles.project_info_section}>
              <div className="project_image_display">
                <Image
                  src={each.webimage}
                  alt=""
                  className={`image_setup ${each.class}`}
                ></Image>
              </div>
              <div>
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle
                    className={styles.progress_cycle}
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                  <circle
                    className={styles.path}
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                </svg>
              </div>

              <div className={styles.project_info}>
                <div>{each.title}</div>
                <div>{each.live_site}</div>
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    );
};

export default MyProjects;