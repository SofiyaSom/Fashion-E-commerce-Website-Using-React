// this one for man, woman and kids section 

import React, { useContext } from 'react';
import styles from './ModuleCSS/ShopCategory.module.css';
import { ShopContext } from '../Components/ShopCategory/ShopContext'
import dropdownIcon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Filter products based on category
  const categoryProducts = all_product.filter(item => item.category === props.category);

  return (
    <div className={styles.shopCategory}>
      <img className={styles.shopCategoryBanner} src={props.banner} alt={`${props.category} banner`} />
      <div className={styles.shopCategoryIndexSort}>
        <p>
          <span>Showing 1-12</span> out of {categoryProducts.length} products
        </p>
        <div className={styles.shopCategorySort}>
          Sort by <img src={dropdownIcon} alt="" />
        </div>
      </div>
      <div className={styles.shopCategoryProducts}>
        {categoryProducts.map(item => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            newPrice={item.new_price}
            oldPrice={item.old_price}
          />
          
        ))}
      </div>
      {/* <div className={styles.shopCategoryLoadmore}>
        Explore More
      </div> */}
    </div>
  );
};

export default ShopCategory;
