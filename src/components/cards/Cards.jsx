import React from 'react'
import styles from "./cards.module.scss"
const Cards = (props) => {
  const {description,title,img}=props
  return (
    <main>
      <div className={styles.wrapper}>
        <h1 className={styles["country-title"]}>{title} </h1>
        <img className={styles["country-img"]} src={img} alt="" />
      {/* <p className={styles["country-info"]}>{description}</p> */}
      </div>

    </main>
  )
}

export default Cards