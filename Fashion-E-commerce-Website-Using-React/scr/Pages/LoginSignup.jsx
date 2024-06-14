import React from 'react'
import styles from './ModuleCSS/LoginSignup.module.css'

const LoginSignup = () => {
  return (
    <div className={styles.loginSignup}>
      <div className={styles.loginSignupContainer}>
        <h1>Sign Up</h1>
        <div className={styles.LoginSignupFields}>
          <input type="text"  placeholder='Your Name'/>
          <input type="email" placeholder='Email Adress'/>
          <input type="password" placeholder='Password' />
          <button>Continue</button>
        </div>
        <p className={styles.loginSignupLogin}>Already Have an Account? <span>Login Here</span></p>
        <div className={styles.loginSignupAgree}>
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree the term of use and privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
