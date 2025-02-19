import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.Container} id="about">
      <h2 className={styles.title}>about</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="me sitting with a laptop"
        />
        <div>
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl("about/cursorIcon.png")}
                alt="cursor image"
              />
              <div className={styles.aboutItemText}>
                <h3>Focus</h3>
                <p>I am a student interested in Front-End!</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl("about/serverIcon.png")}
                alt="server icon"
              />
              <div className={styles.aboutItemText}>
                <h3>Virginia Tech</h3>
                <p>Gpa: 3.6</p>
                <p>Dean's List 1x</p>
                <p>Major: Computer Science</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
                <img src ={getImageUrl("about/uiIcon.png")} alt= "ui image" />
              <div className={styles.aboutItemText}>
                <h3>Nova Community College</h3>
                <p>Gpa: 3.6</p>
                <p>Dean's List 2x</p>
                <p>Major: Computer Science</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
