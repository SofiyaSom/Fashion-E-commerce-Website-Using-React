import React, { useState, useEffect } from 'react';
import styles from './NewLetter.module.css';
import logoImage from '../../Assets/EmailIcon.webp';

const NewLetter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const button = document.querySelector(`.${styles.submitEmail}`);
    const form = document.querySelector(`.${styles.subscription}`);

    const handleMouseDown = (e) => {
      e.preventDefault();
      if (email) {
        form.classList.add(styles.done);
      }
    };

    if (button) {
      button.addEventListener('mousedown', handleMouseDown);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (button) {
        button.removeEventListener('mousedown', handleMouseDown);
      }
    };
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setError('');
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <div className={styles.newLetter}>
      <img src={logoImage} alt="Newsletter Logo" />
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className={styles.best}>
        <form className={`${styles.subscription} ${isSubmitted ? styles.done : ''}`} onSubmit={handleSubmit}>
          <input
            className={styles.addEmail}
            type="email"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className={styles.submitEmail} type="submit">
            <span className={styles.beforeSubmit} style={{ display: isSubmitted ? 'none' : 'inline' }}>
              Subscribe
            </span>
            <span className={styles.afterSubmit} style={{ display: isSubmitted ? 'inline' : 'none' }}>
              Thank you for subscribing!
            </span>
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default NewLetter;
