import React from 'react'
import  styles from "./navbar.module.scss"
const Navbar = () => {
  return (
    <div>
        <ul className={styles["nav-list"]}>
        <li className={styles["list-item"]} >For you</li>
        <li className={styles["list-item"]}>Abous us</li>
        <li className={styles["list-item"]}>Services</li>
        <li className={styles["list-item"]}>Blog</li>
        <li className={styles["list-item"]}>Vlog</li>
        <li className={styles["list-item"]}>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar