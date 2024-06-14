import React from 'react';
import styles from './Hero.module.css';
import hand_icon from '../../Assets/hand_icon.png';
import arrow_icon from '../../Assets/arrow_icon.png';
import heroImages from '../../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.heroLeft}>
            <h2>News Arrivals Only</h2>
                <div className={styles.heroHandIcon}>
                    <p>NEW !!</p>
                </div>
              <p>collections</p>
              <p>for everyone</p>
          <div className={styles.heroLateestBtn}>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className={styles.heroRight}>
        </div>
    </div>
  );
}

export default Hero;
