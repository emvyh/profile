import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Me.module.css";
export const Me = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h1 className={styles.title}>Who am I?</h1>
        <p className={styles.desc}>
          When I’m not coding, you’ll probably find me dancing! I’m proud to be
          a member of Shidae, the K-Pop dance crew at Virginia Tech. I like to
          think of myself as a creative person with a variety of passions.
          Beyond dancing, I enjoy crocheting, getting lost in video games,
          journaling to reflect and grow, and experimenting with makeup to
          express myself in new ways.
        </p>
      </div>
      <div className={styles.pictures}>
        <div className={styles.pic}>
          <img src={getImageUrl("me/shidae.png")} alt="shidae logo" />
        </div>
          <a className= {styles.shidae} href="https://www.instagram.com/shidaeatvt/?hl=en">Shidae Logo</a>
        <div className={styles.pic}>
          <img src={getImageUrl("me/crochet.png")} alt="my crochet creations" />{" "}
        </div>
        <p>Crochet Bunnies</p>
      </div>
    </section>
  );
};
