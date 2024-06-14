import React from 'react'
import styles from './DescriptionBox.module.css'

const DescriptionBox = () => {
  return (
    <div className={styles.DescriptionBox}>
        <div className={styles.DescriptionBoxNavigation}>
            <div className={styles.DescriptionBoxNavbox}>Description</div>
            <div className={styles.DescriptionBoxNavbox}>Reviews (122)</div>
        </div>
        <div className={styles.DescriptionBoxDescription}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia consectetur explicabo maxime neque possimus natus soluta ipsum quidem doloribus, amet sequi deleniti porro odio commodi quibusdam ad sed? Beatae, vero.</p>
        </div>
    </div>
  )
}

export default DescriptionBox
