import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Emily</h1>
        <p className={styles.description}>
          I'm currently a Junior at Virginia Tech, pursuing a degree in
          Computer Science, and I'm on the lookout for an exciting summer
          internship opportunity. My expertise lies in front-end development,
          with a particular focus on React. Feel free to reach out if you’d like
          to connect or learn more about my skills and experiences!
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
