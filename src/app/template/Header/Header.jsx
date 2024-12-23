import styles from "./Header.module.scss";

const Header = ({ openLeftSidebar,
          setOpenLeftSidebar, 
          openRightSidebar,
          setOpenRightSidebar }) => {

            // handle toogle logic for left sidebar
    const handleLeftSide = () => {
        if (openRightSidebar) 
          setOpenRightSidebar(false);
        setOpenLeftSidebar(!openLeftSidebar)
    }


    const handleRightSide = () => {
      if(openLeftSidebar)
        setOpenLeftSidebar(false)
      setOpenRightSidebar(!openRightSidebar)
      
    }
  return (
    <div className={styles.header_design}>
      {/* Toggle button section */}
      <div onClick={handleLeftSide} className={styles.left_toggle_button}>
        {/* Toggle button design */}
        <div className={styles.icon_design}></div>
        <div className={styles.icon_design}></div>
        <div className={styles.icon_design}></div>
      </div>

      <div className={`${styles.right_toggle_button} ${openRightSidebar ? styles.cross_toggle: styles.hamburger}`}>
        {/* Toggle button section */}
        <div onClick={handleRightSide} className={styles.toggle_button}>
          {/* Toggle button design */}
          <span className={styles.top_line}></span>
          <span className={styles.middle_line}></span>
          <span className={styles.bottom_line}></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
