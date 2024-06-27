import styles from './CountDetails.module.scss';
import CountUp from 'react-countup/build/CountUp';

const CountDetails = () => {
    return (
      <div>
        {/* Year of experience */}
        <div className={styles.counting_design}>
          <CountUp start={0} end={1} duration={2} delay={0} />+
          <div>Year Experience</div>
        </div>

        {/* Completed Project */}
        <div className={styles.counting_design}>
          <CountUp start={0} end={1} duration={2} delay={0} />
          <div>Completed Project</div>
        </div>

        {/* Happy Client  */}
        <div className={styles.counting_design}>
          <CountUp start={0} end={1} duration={2} delay={0} />
          <div>Happy Client</div>
        </div>

        {/* Honors and Awards */}
        <div className={styles.counting_design}>
          <CountUp start={0} end={1} duration={2} delay={0} />+
          <div>Honors </div>
        </div>
      </div>
    );
};

export default CountDetails;