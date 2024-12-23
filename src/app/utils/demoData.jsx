import dhurva from "../../../public/files/dhruva-parisad.png";
import apparel from "../../../public/files/apparel.png";
import compact from "../../../public/files/compact.png";
import notefrind from "../../../public/files/NoteFriend.png";
import bookpile from "../../../public/files/BookPile.png";
import interior from "../../../public/files/Sol Art.png";

// slider: Dhurva
import dhurva_slide1 from "../../../public/dhurva_slider/dhruva_slide1.png";
import dhurva_slide2 from "../../../public/dhurva_slider/dhruva-slide2.png";
import dhurva_slide3 from "../../../public/dhurva_slider/dhruva-slide3.png";
// slider: Compact
import compact_slide1 from "../../../public/compact_slider/compact_slide1.png";
import compact_slide2 from "../../../public/compact_slider/compact_slide2.png";
import compact_slide3 from "../../../public/compact_slider/compact_slide3.png";

// slider: Compact
import notefriend_slide1 from "../../../public/notefriend_slider/notefriend_slide1.png";
import notefriend_slide2 from "../../../public/notefriend_slider/notefriend_slide2.png";
import notefriend_slide3 from "../../../public/notefriend_slider/notefriend_slide3.png";

// slider: Compact
import bookpile_slide1 from "../../../public/bookpile_slider/bookpile_slide1.png";
import bookpile_slide2 from "../../../public/bookpile_slider/bookpile_slide2.png";
import bookpile_slide3 from "../../../public/bookpile_slider/bookpile_slide3.png";

export const bioDataDetails = [
  {
    title: "Residence",
    value: "Bangladesh",
  },
  {
    title: "City",
    value: "Chattogram",
  },
  {
    title: "Age",
    value: "26",
  },
];

export const languageTypes = [
  {
    step: "english",
    title: "English",
    value: 70,
  },
  {
    step: "bangla",
    title: "Bangla",
    value: 100,
  },
  {
    step: "finnish",
    title: "Finnish",
    value: 10,
  },
];

export const proLangTypes = [
  {
    step: "html",
    title: "HTML",
    value: 70,
  },
  {
    step: "css",
    title: "CSS",
    value: 60,
  },
  {
    step: "js",
    title: "Javascript",
    value: 60,
  },
  {
    step: "react",
    title: "React",
    value: 70,
  },
  {
    step: "next",
    title: "Next.js",
    value: 60,
  },
  {
    step: "node",
    title: "Node.js",
    value: 70,
  },
];

export const otherSpeciality = [
  "NoSQL Database: MongoDB",
  "SQL Database: MySQL",
  "Material UI, SCSS",
  "Redux, Mobx-State-Tree",
  "Webpack",
  "Git knowledge",
  "Figma",
];

export const myProjects = [
  {
    id: 1,
    title: "Dhurva Parishad",
    class: "dhruva",
    webimage: dhurva,
    slide1: dhurva_slide1,
    slide2: dhurva_slide2,
    slide3: dhurva_slide3,
    short_details:
      "An exam and result management system for 'Cultural Institution Board' to register and find result. This system provide auto-generated certificate.",
    details:
      "A project of ‘The Board of Cultural Institute - Dhruva Parishad’ on exam management systems where students of different cultural schools register for examinations under four districts, choose multiple courses according to their preferences, download auto generated admit-cards and get results with auto generated certificates on the result publication date. School Principals send requests to admin to enlist their school information; observe the result of his/her school. Besides, the admin updates exam results, grants new requested schools to enlist them, updates news. Admin will update the exam date and result publication date; students can only access the result portal after publication.",
    key_features: [
      "Exam registration",
      "School registration",
      "Result update",
      "Result publish",
      "Auto-generated admit card & certificate",
    ],
    technology: [
      "SCSS",
      "Next.js",
      "Redux",
      "Node.js",
      "Express",
      "JWT",
      "MongoDB",
    ],
    live_site: "https://dhruva-parisad-clientside.vercel.app/user",
    client_site: "",
    server_site: "",
    video:
      "https://www.loom.com/share/f5b131dae8cc49eabb7b6886141c9aa6?sid=9e8cf0ad-7184-4cd6-869b-5cf92d7a8fc3",
    duration: "3 Months",
    type: "Management System",
    work: "UI design, Web Development",
    status: "Finish",
    user: "Student, Principal, Admin",
    start_date: "January 30, 2024",
    end_date: "April 15, 2024",
  },
  {
    id: 2,
    title: "Apparel",
    class: "apparel",
    webimage: apparel,
    slide1: apparel,
    slide2: apparel,
    slide3: apparel,
    short_details:
      "A platform to purchase and supply clothes in different categories. Multiple vendors can exhibit and retail various products.",
    details:
      "A platform for users to purchase and supply clothes in different categories. Multiple vendors can exhibit and retail various products. Consumers can easily browse and buy clothes simultaneously. Features include product category, rating review, wishlist, shopping cart, payment gateway, social media integration, discounts and promotions.",
    key_features: [
      "Purchase cloths",
      "Sell products",
      "Rating review",
      "Wishlist",
      "Social media integration",
      "Discounts & Promotions",
    ],
    technology: [
      "SCSS",
      "Next.js",
      "Redux",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "Socket.io",
    ],
    live_site: "",
    client_site: "https://github.com/EloraBarua62/Apparel-clientside.git",
    server_site: "https://github.com/EloraBarua62/Apparel-serverside.git",
    video: "",
    duration: "4 months expected",
    type: "Ecommerce",
    work: "UI design, Web Development",
    status: "Running",
    user: "Buyer, Seller, Admin",
    start_date: "April 1, 2024",
    end_date: "Expected in July",
  },
  {
    id: 3,
    title: "Compact",
    class: "compact",
    webimage: compact,
    slide1: compact_slide1,
    slide2: compact_slide2,
    slide3: compact_slide3,
    short_details:
      "An online platform helps conveniently and economically purchase computer parts. Customers can easily order and pay for multiple products.",
    details:
      "An online platform helps conveniently and economically purchase computer parts. Customers can easily order and pay for multiple products. The management system is organized as easy-to-track products. Maintenance of product demands and availability effectively. Besider, admin will manage all products, customers details. He can also enlist the credential of seller",
    key_features: [
      "Order products",
      "Manage customers & products",
      "Add Seller"
    ],
      technology: [
      "Tailwind",
      "React",
      "Node.js",
      "Express",
      "JWT",
      "MongoDB",
      "Firebase",
      "Stripe",
    ],
    live_site: "https://compact-f2ed0.web.app/",
    client_site: "https://github.com/EloraBarua62/Compact-client-side",
    server_site: "https://github.com/EloraBarua62/Compact-server-side",
    video: "",
    duration: "2 Weeks",
    type: "Ecommerce",
    work: "Web Development",
    status: "Finish",
    user: "Buyer, Admin",
    start_date: "May 15, 2022",
    end_date: "May 31, 2022",
  },
  {
    id: 4,
    title: "NoteFriend",
    class: "notefriend",
    webimage: notefrind,
    slide1: notefriend_slide1,
    slide2: notefriend_slide2,
    slide3: notefriend_slide3,
    short_details:
      "NoteFriend is a website for storing and managing significant notes. All notes are systematized by date.",
    details:
      "NoteFriend is a website for storing and managing significant notes. All notes are systematized by date. Authorized users will search, review, update, and delete their notes. Efficiently search recent notes.",
    key_features: [
      "Take & search notes",
      "View note details",
      "Update & delete note",
    ],
      technology: ["Tailwind", "Redux", "Node.js", "Firebase", "MongoDB"],
    live_site: "https://notefriend-5a4c3.web.app/",
    client_site:
      "https://github.com/EloraBarua62/Note_Taking_Appile-client-side",
    server_site: "https://github.com/EloraBarua62/Note_Taking_App_Server",
    video: "",
    duration: "1 Week",
    type: "Task Management",
    work: "Web Development",
    status: "Finish",
    user: "User",
    start_date: "April 1, 2022",
    end_date: "April 10, 2022",
  },
  {
    id: 5,
    title: "BookPile",
    class: "bookpile",
    webimage: bookpile,
    slide1: bookpile_slide1,
    slide2: bookpile_slide2,
    slide3: bookpile_slide3,
    short_details:
      "NoteFriend is a website for storing and managing significant notes. All notes are systematized by date.",
    details:
      "BookPile is a book inventory management website where the admin will control the entire system. Inventory management features like add, update and deliver books are included in this site. Book suppliers can stock new collections.",
    key_features: [
      "Manage Inventory",
      "Entry new books",
      "Enlist suppliers details",
    ],
      technology: ["React.js", " Node.js", " MongoDB", " Firebase"],
    live_site: "https://bookpile-66c24.web.app/",
    client_site: "https://github.com/EloraBarua62/BookPile-client-side",
    server_site: "https://github.com/EloraBarua62/BookPile-server-side",
    video: "",
    duration: "2 Weeks",
    type: "Inventory Management System",
    work: "Web Development",
    status: "Finish",
    user: "Admin",
    start_date: "May 1, 2022",
    end_date: "May 14, 2022",
  },
  {
    id: 6,
    title: "Interior Design",
    class: "interior",
    webimage: interior,
    short_details:
      "A website of interior design where company offer Architecture, Interior design, Home Decore in various price. User can demand for personal preference.",
    details:
      "A website of interior design where company offer Architecture, Interior design, Home Decore in various price. Project's video reference and sample of successful works. User can demand for personal preference and communicate with our experts conveniently",
    key_features: [
      "Check works",
      "Communicate & order",
    ],
      technology: ["Next.js", "Tailwind"],
    live_site: "https://dhruva-parisad-clientside.vercel.app/user",
    client_site:
      "https://www.loom.com/share/f5b131dae8cc49eabb7b6886141c9aa6?sid=9e8cf0ad-7184-4cd6-869b-5cf92d7a8fc3",
    server_site: "",
    video: "",
    duration: "2 Weeks",
    type: "Portfolio",
    work: "Frontend Development",
    status: "Finish",
    user: "Buyer",
    start_date: "November 5, 2022",
    end_date: "November 22, 2022",
  },
  {
    id: 7,
    title: "Foodie",
    class: "dhruva",
    webimage: dhurva,
    short_details: "",
    details:
      "A project of ‘The Board of Cultural Institute - Dhruva Parishad’ on exam management systems where students of different cultural schools register for examinations under four districts, choose multiple courses according to their preferences, download auto generated admit-cards and get results with auto generated certificates on the result publication date. School Principals send requests to admin to enlist their school information; observe the result of his/her school. Besides, the admin updates exam results, grants new requested schools to enlist them, updates news. Admin will update the exam date and result publication date; students can only access the result portal after publication.",
    key_features: [
      "Check food menu, review",
      "Place order",
      "Manage food items"
    ],
      technology: ["Next.js", "MaterialUI"],
    live_site: "https://dhruva-parisad-clientside.vercel.app/user",
    client_site:
      "https://www.loom.com/share/f5b131dae8cc49eabb7b6886141c9aa6?sid=9e8cf0ad-7184-4cd6-869b-5cf92d7a8fc3",
    server_site: "",
    video: "",
    duration: "3 Weeks",
    type: "Website",
    work: "Frontend Development",
    status: "Finish",
    user: "User",
    start_date: "December 1, 2022",
    end_date: "December 24, 2022",
  },
];


export const myHistory = [
  {
    name: 'Abo Akademi University',
    title: 'MSc in Information Technology',
    duration: '2024 - 2026',
    learning: 'Data Science, Machine Learning, Project Course, Artificial Intelligence, Computer Vision, Software Engineering',
    certificate: ''
  },
  {
    name: 'Programming Hero',
    title: 'Full Stack Web Development',
    duration: '2024 - 2026',
    learning: 'Data Science, Machine Learning, Project Course, Artificial Intelligence, Computer Vision, Software Engineering',
    certificate: ''
  },
  {
    name: 'Sythet Engineering College',
    title: 'BSc in Computer Science & Engineering',
    duration: '2017 - 2022',
    learning: 'Basic Programming, OOP, Data Structure & Algorithm, Database, Basic Artificial Intelligence, Software Engineering',
    certificate: ''
  },
  {
    name: 'Codechemist',
    title: 'Junior Software Engineer',
    duration: '2024 - 2026',
    learning: 'Redux, NextJS, MySQL',
    certificate: ''
  },
  {
    name: 'Dhrubo Parishad',
    title: 'Web Developer',
    duration: '2024 - 2026',
    learning: 'NextJS, NodeJS, MongoDB',
    certificate: ''
  },
  {
    name: 'Solutya Private Limited',
    title: 'Software Eningeer Intern',
    duration: 'Nov 2022 - Jan 2023',
    learning: 'NextJS, MaterialUI, SCSS',
    certificate: ''
  },
];