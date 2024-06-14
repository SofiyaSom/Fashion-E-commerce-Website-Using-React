import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Item.module.css';

const Item = (props) => {
  return (
    <div className={styles.item}>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className={styles.itemPrices}>
        <div className={styles.itemPriceNew}>
          ${props.newPrice}
        </div>
        <div className={styles.itemPriceOld}>
          ${props.oldPrice}
        </div>
      </div>
    </div>
  );
}

export default Item;
