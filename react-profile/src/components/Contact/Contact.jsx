import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2> <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="email icon"/>
            <a href="mailto:emilyhoanggs@gmail.com">emilyhoanggs@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon"/>
            <a href="https://www.linkedin.com/in/emily-hoang-compsci-vt">linkedin.com/emilyhoang</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="gitHub icon"/>
            <a href="https://www.github.com/emvyh">github.com/emvyh</a>
        </li>
      </ul>
    </footer>
  );
};
