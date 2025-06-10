import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Sergio</h1>
        <p className={styles.description}>
          Soy un programador dedicado al Backend usando Nestjs y 
          teniendo algo de experiencia con el uso de frameworks como NextJs y Angular
        </p>
        <a href="mailto:sergioantonioqui@email.com" className={styles.contactBtn}>
          Contactame
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroimage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
