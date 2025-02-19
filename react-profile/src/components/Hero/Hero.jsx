import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Emily</h1>
        <p className={styles.description}>
          I am a Junior at Virginia Tech studying Computer Science. I am looking
          for a summer internship. My focus is front-end and React. Reach out if
          you'd like to learn more.
        </p>
        <a className={styles.contactBtn} href="mailto:emilyhoanggs@gmail.com">
          Contact Me
        </a>
        {/*sets up the mailing*/}
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image of Me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
