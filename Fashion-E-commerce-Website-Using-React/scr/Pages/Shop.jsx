import React from 'react'
import Hero from '../Components/Shop/Hero/Hero'
import Popular from '../Components/Shop/Popular/Popular'
import Offers from '../Components/Shop/Offers/Offers'
import NewCollections from '../Components/Shop/NewCollections/NewCollections'
import NewLetter from '../Components/Shop/NewLetter/NewLetter'
import styles from '../Pages/ModuleCSS/Shop.module.css'

const Shop = () => {
  return (
    <div className={styles.shop}>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewLetter/>
    </div>

  )
}

export default Shop
