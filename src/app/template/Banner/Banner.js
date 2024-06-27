'use client'
import { motion, } from "framer-motion";
import styles from "./Banner.module.scss";
import splitString from "@/app/utils/splitString";
import Image from "next/image";
import profile_picture from '../../../../public/porfolio banner image.png'


// Variables
const heading = "Welcome!!";
const text = "A FULL STACK DEVELOPER, PROBLEM SOLVER";
const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

// const arrow = {
//   initial: { scale: 1 },
//   animate: { scale: 1.5 },
// };

// const item = {
//   hidden: { opacity: 0 ,scale: 0.2 },
//   reveal: {
//     opacity: 1,
//     scale: 0.8
//   },
// };
const Banner = () => {
  const headingChars = splitString(heading);
  const textChars = splitString(text);
  
  return (
    <div className={styles.banner_section}>
      <div className={styles.left_section}>
        {/* Heading */}
        <div className={styles.initial_text}>ELORA BARUA</div>

        {/* <motion.div
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.2 }}
          className={styles.initial_text}
        >
          {headingChars.map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 1.5 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.div> */}

        {/* Sub heading */}
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.1 }}
          className={styles.initial_para}
        >
          {textChars.map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 1.35 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        <div className={styles.button_section}> 
          <button className={styles.button_design}>Explore My World</button>
        </div>
      </div>

      <div className={styles.my_image}>
        <Image src={profile_picture} alt="" className={styles.image_design} />
      </div>
    </div>
  );
};

export default Banner;
