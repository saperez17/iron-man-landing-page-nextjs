import React from "react";
import styles from "./navbar.module.css";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Button p="2px 10px">
            <p style={{ fontSize: "12px", color: "white" }}>Sign In</p>
          </Button>
        </li>
        <li>
          <Button variant="primary" p="4px 16px">
            <p style={{ fontSize: "12px", color: "white" }}>Sign Up</p>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
