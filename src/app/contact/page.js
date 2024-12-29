"use client";
import { useState } from "react";
import styles from "./contact.module.scss";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";

const Contact = () => {
  const [selectField, setSelectField] = useState("");
  const info_array = [
    {
      property_title1: "Email: ",
      property_value1: "elorabarua.official@gmail.com",
      property_title2: "LinkedIn : ",
      property_value2: "Elora Barua",
    },
    {
      property_title1: "Country : ",
      property_value1: "Finland",
      property_title2: "City : ",
      property_value2: "Vaasa",
      property_title3: "Contact : ",
      property_value3: "449244648",
      property_title4: "Whatsapp : ",
      property_value4: "01753600844",
    },
  ];
  return (
    <div className={styles.contact_page_design}>
      {/* Contact Information */}
      <div className={styles.heading}>Contact information</div>
      <div className={styles.info_section}>
        {info_array.map((info, index) => (
          <div key={index} className={styles.info_container}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p className={styles.title}>{info.property_title1}</p>
              <p className={styles.value}>{info.property_value1}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p className={styles.title}>{info.property_title2}</p>
              {info.property_title2 == "LinkedIn : " ? (
                <Link
                  className={styles.value}
                  href="https://www.linkedin.com/in/elora-barua-684157206/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  {info.property_value2}
                </Link>
              ) : (
                <p className={styles.value}>{info.property_value2}</p>
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p className={styles.title}>{info.property_title3}</p>
              <p className={styles.value}>{info.property_value3}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p className={styles.title}>{info.property_title4}</p>
              <p className={styles.value}>{info.property_value4}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Get in touch */}
      <div className={styles.heading}>Get in touch</div>
      <form className={styles.message_section}>
        <div className={styles.field_design1}>
          <div
            className={`${styles.icon_background} ${
              selectField === "person" ? styles.selected : ""
            }`}
          >
            <IoPersonSharp />
          </div>
          <input type="text" onSelect={() => setSelectField("person")} />
        </div>
        <div className={styles.field_design1}>
          <div
            className={`${styles.icon_background} ${
              selectField === "email" ? styles.selected : ""
            }`}
          >
            <MdOutlineAlternateEmail />
          </div>
          <input type="text" onSelect={() => setSelectField("email")} />
        </div>
        <div className={styles.field_design2}>
          <div
            className={`${styles.icon_background} ${
              selectField === "message" ? styles.selected : ""
            }`}
          >
            <MdOutlineMailOutline />
          </div>
          <textarea type="text" onSelect={() => setSelectField("message")} />
        </div>
        <div className={styles.button_section}>
          <button className={styles.button_design}>Explore My World</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
