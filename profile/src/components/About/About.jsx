import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="pixelated version of me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
            <h3>Focus</h3>
            <p>My expected graduation date is May 2026!</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
            <h3>Virginia Tech</h3>
                <p>Gpa: 3.6</p>
                <p>Dean's List 1x</p>
                <p>Major: Computer Science</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
            <h3>Nova Community College</h3>
                <p>Gpa: 3.6</p>
                <p>Dean's List 2x</p>
                <p>Major: Computer Science</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

