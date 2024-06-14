import React from 'react'
import styles from './Breadcrum.module.css'
import arrowIcon from '../../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className={styles.breadcrum}>
        HOME <img src={arrowIcon} alt="" /> 
        SHOP <img src={arrowIcon} alt="" />
        {product.category} <img src={arrowIcon} alt="" />
        {product.name} 
    </div>
  )
}   

export default Breadcrum
