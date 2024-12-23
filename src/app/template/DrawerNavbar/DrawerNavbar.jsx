'use client'
import { usePathname } from "next/navigation";
import styles from './DrawerNavbar.module.scss';
import Link from 'next/link';


const DrawerNavbar = ({ openRightSidebar }) => {
  const pathname = usePathname();
  const page_navigation = [
    {
      name: "/",
      title: "HOME",
      class: "home",
    },
    {
      name: "/my-projects",
      title: "PROJECTS",
      class: "projects",
    },
    {
      name: "/about-me",
      title: "ABOUT ME",
      class: "about_me",
    },
    {
      name: "/blog",
      title: "BLOG",
      class: "blog",
    },
  ];
  return (
    <div
      className={`${
        openRightSidebar ? styles.open : styles.close
      } ${styles.navbar_common}`}
    >
     {/* Navigation in large */}
      <div className={styles.navigation_section_large}>
        {page_navigation.map((page, index) => (
          <Link key={index} className={styles.routes} href={`${page.name}`}>
            {page.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DrawerNavbar;