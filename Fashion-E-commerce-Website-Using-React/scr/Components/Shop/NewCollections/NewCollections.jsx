import React from 'react'
import styles from './NewCollections.module.css'
import new_collection from '../../Assets/new_collections'
import Item from '../../Item/Item'

const NewCollections = () => {
  return (
    <div className={styles.newCollections}>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className={styles.collections}>
            {new_collection.map((item,i)=>{
                return <Item
                key={item.id}  
                id={item.id}
                name={item.name}
                image={item.image}
                newPrice={item.new_price}
                oldPrice={item.old_price}
              />
            })}
        </div>
    </div>
  )
}

export default NewCollections
