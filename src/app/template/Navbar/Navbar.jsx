'use client'
import { useState } from 'react';
import { usePathname } from "next/navigation";
import styles from './Navbar.module.scss'
import Link from 'next/link';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const pathname = usePathname();
    const page_navigation = [
      {
        name: "/",
        title: "HOME",
        class: 'home',
      },
      {
        name: "/my-projects",
        title: "PROJECTS",
        class: 'projects',
      },
      {
        name: "/about-me",
        title: "ABOUT ME",
        class: 'about_me',
      },
      {
        name: "/blog",
        title: "BLOG",
        class: 'blog',
      },
    ];
    return (
      <div
        className={`${toggle ? styles.navbar_large : styles.navbar_small} ${
          styles.navbar_common
        }`}
      >
        {/* Navbar header section */}
        <div className={styles.header_section}>
          {/* Toggle button section */}
          <div
            onClick={() => setToggle(!toggle)}
            className={styles.toggle_button}
          >
            {/* Toggle button design */}
            <span className={styles.top_line}></span>
            <span className={styles.middle_line}></span>
            <span className={styles.bottom_line}></span>
          </div>
        </div>

        {/* Navigation in small */}
        <div className={styles.navigation_section_small}>
          {page_navigation.map((page, index) => (
            <div className={styles.routing_page} key={index}>
              {pathname === page.name ? page.title : ""}
            </div>
          ))}
        </div>

        {/* Navigation in large */}
        <div className={styles.navigation_section_large}>         
            {page_navigation.map((page, index) => (
              <Link
                key={index} 
                className={styles.routes} 
                href={`${page.name}`}           
              >
                {page.title}
              </Link>
            ))}
        </div>
      </div>
    );
};

export default Navbar;