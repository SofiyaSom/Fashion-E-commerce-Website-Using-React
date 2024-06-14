import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}>

        <div className={styles.footerpara}>
          <h3>About</h3>
          <p>About us</p>
          <p>Term And Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className={styles.footerpara}>
          <h3>Shop</h3>
          <p>Best Seller</p>
          <p>Collections</p>
          <p>Location</p>
          <p>Offers</p>
        </div>
        <div className={styles.footerpara}>
          <h3>Help and Advice</h3>
          <p>Return Policy</p>
          <p>Shipping</p>
          <p>Contect us</p>
        </div>
        <div className={styles.footerpara}>
          <h3>Social</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Youtube</p>
          <p>Tiktok</p>
        </div>
      </div>

      <div className={styles.footerr}>
      <hr />
      Copyright © 2024, Designed With by sofiya

      </div>
    </div>
  )
}

export default Footer
