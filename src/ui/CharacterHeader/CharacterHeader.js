import React from "react";
import styles from "./CharacterHeader.module.css";
import Image from "next/image";
import Button from "../../ui/Button/Button";
import Text from "../Text/Text";

const CharacterHeader = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headerTitle}>IRON MAN</h1>
      <div className={styles.headerContentContainer}>
        <Image
          src={"/images/IronManCartoon.png"}
          width={240}
          height={320}
          quality={100}
          alt="iron man"
          className={styles.characterHeaderImage}
        />
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>
            Wounded, captured and forced to build a weapon by his enemies,
            billionaire industrialist Tony Stark instead created an advanced
            suit of armor to save his life and escape captivity. Now with a new
            outlook on life, Tony uses his money and intelligence to make the
            world a safer, better place as Iron Man.
          </p>

          <Button variant="primary" m="12px 0px 0px 0px" p="12px 40px">
            <Text
              content="Get Started"
              size="15px"
              weight="700"
              className={styles.characterHeaderCta}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CharacterHeader;
