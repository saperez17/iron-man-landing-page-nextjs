import React from "react";
import styles from "./CharacterDescription.module.css";
import Image from "next/image";
import CharacterIcon from "../CharacterIcon/CharacterIcon";

const CharacterDescription = () => {
  return (
    <div className={styles.container}>
      <Image
        src={"/images/IronManAPIAsset.png"}
        width={335}
        height={335}
        quality={100}
        alt="iron man"
        className={styles.mainImage}
      />

      <section className={styles.DescriptionSectionContainer}>
        <div className={styles.DescriptionSectionItem}>
          <CharacterIcon type="genius" height={40} width={40} />
          <p className={styles.DescriptionSectionItemText}>
            Quite apart from the powers granted him by the suit, Tony Stark is
            far more than a mechanical engineering prodigy who graduated from
            the Massachusetts Institute of Technology with honors at the age of
            17.
          </p>
        </div>
        <div className={styles.DescriptionSectionItem}>
          <CharacterIcon type="tactician" height={56} width={40} />
          <p className={styles.DescriptionSectionItemText}>
            He is a brilliant tactician capable of quickly formulating battle
            strategies and new plans if the situation changes, like being able
            to elaborate complex plans in order to defeat different enemies.
          </p>
        </div>
        <div className={styles.DescriptionSectionItem}>
          <CharacterIcon type="engineer" height={40} width={40} />
          <p className={styles.DescriptionSectionItemText}>
            He is a brilliant tactician capable of quickly formulating battle
            strategies and new plans if the situation changes, like being able
            to elaborate complex plans in order to defeat different enemies.
          </p>
        </div>
        <div className={styles.DescriptionSectionItem}>
          <CharacterIcon type="businessman" width={33} height={40} />
          <p className={styles.DescriptionSectionItemText}>
            Stark is extremely well-respected in the business world, able to
            command peoples attentions when he speaks on economic matters. He
            has built up several multi-million dollar companies from virtually
            nothing.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CharacterDescription;
