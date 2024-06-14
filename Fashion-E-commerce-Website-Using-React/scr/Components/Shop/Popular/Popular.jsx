import React from 'react'
import styles from './Popular.module.css'
import data_product from '../../Assets/data'
import Item from '../../Item/Item'

const Popular = () => {
  return (
    <div className={styles.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className={styles.popularItem}>
        {data_product.map((item, i) => (
          <Item
            key={item.id}  // Using item.id as the key is better practice than index
            id={item.id}
            name={item.name}
            image={item.image}
            newPrice={item.new_price}
            oldPrice={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular
