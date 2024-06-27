import { delay, motion } from "framer-motion";
import styles from "./Column.module.scss";
import Image from "next/image";
import profile from "../../../../public/corporate women.png";

const Column = ({ children }) => {
  const animation = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,

    };
  };

  // const expand = {
  //   initial: {
  //     top: 0,
  //     height: "100%",
  //   },
  //   enter: (i) => ({
  //     top: "100%",
  //     // width: "100%",
  //     transition: {
  //       duration: 1,
  //       delay: 1 * i,
  //     },
  //     transitionEnd: {
  //       height: 0,
  //       top: 0,
  //     },
  //   }),
  //   exit: (i) => ({
  //     // top: 0,
  //     height: "100%",
  //     transition: {
  //       duration: 1,
  //       delay: 1 * i,
  //     },
  //   }),
  // };

  const expand = {
    initial: {
      top: 0,
      left: "-100%",
    },
    enter: {
      left: 0,
      transition: {
        duration: 0.5,
        delay: 0.03,
      },
      // transitionEnd: {
      //     weight: "10px",
      //     left: -100
      // }
    },
    // exit: (i) => ({
    //   width: "10px",
    //   left: "100%",
    //   transition: {
    //     duration: 0.4,
    //     delay: 0.5 * i,
    //   },
    // }),
  };
  // const expand = {
  //   initial: {
  //     top: 0,
  //     left: "100%",
  //   },
  //   enter: (i) => ({
  //     left: 0,
  //     transition: {
  //       duration: 0.4,
  //       delay: 0.05 * i,
  //     },
  //     // transitionEnd: {
  //     //     weight: "10px",
  //     //     left: -100
  //     // }
  //   }),
  //   exit: (i) => ({
  //     width: "10px",
  //     left: "100%",
  //     transition: {
  //       duration: 0.4,
  //       delay: 0.5 * i,
  //     },
  //   }),
  // };

  const noOfColumn = 5;
// 
  return (
    <motion.div className={styles.column_design}>
      <motion.div className={styles.transition_container}>
        <div className={styles.image_section}>
          <Image
            src={profile}
            alt=""
            className={styles.profile_image_setup}
          ></Image>
        </div>

        <motion.div {...animation(expand)} className={styles.single_column}>
          <div className={styles.my_info}>
            <h1 className={styles.my_name}>Elora Barua</h1>
            <p className={styles.my_details}>I am a web developer</p>
          </div>
        </motion.div>
        {/* {[...Array(noOfColumn)].map((_, i) => {
          return i === 0 ? (
            <motion.div
              {...animation(expand, i)}
              className={styles.single_column}
              key={i}
            >
              <h1>Elora Barua</h1>
              <p></p>
            </motion.div>
          ) : i === 1 ? (
            <motion.div
              {...animation(expand, i)}
              className={styles.single_column}
              key={i}
            >
              <Image
                src={profile1}
                alt=""
                fill
                className={styles.profile_image_setup}
              ></Image>
            </motion.div>
          ) : i === 2 ? (
            <motion.div
              {...animation(expand, i)}
              className={styles.single_column}
              key={i}
            >
              <Image
                src={profile2}
                alt=""
                fill
                className={styles.profile_image_setup}
              ></Image>
            </motion.div>
          ) : i === 3 ? (
            <motion.div
              {...animation(expand, i)}
              className={styles.single_column}
              key={i}
            >
              <h1>{i}</h1>
            </motion.div>
          ) : (
            <motion.div
              {...animation(expand, i)}
              className={styles.single_column}
              key={i}
            >
              <h1>{i}</h1>
            </motion.div>
          );
        })} */}
      </motion.div>
      {children}
    </motion.div>
  );
};

export default Column;
