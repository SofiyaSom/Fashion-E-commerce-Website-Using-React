import React, { useContext } from 'react';
import styles from './CartItem.module.css';
import { ShopContext } from '../ShopCategory/ShopContext';
import removeIcon from '../Assets/cart_cross_icon.png';

const CartItem = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  
  const totalAmount = getTotalCartAmount();

  return (
    <div className={styles.cartItems}>
      <div className={styles.cartItemsFormatMain}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
       <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className={styles.cartItemsFormat}>
                <img src={e.image} alt={e.name} className={styles.CartIconProductIcon} />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className={styles.cartItemsQuantity}>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img 
                  className={styles.CartIconRemoveIcon} 
                  src={removeIcon} 
                  onClick={() => removeFromCart(e.id)} 
                  alt="Remove" 
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={styles.cartItemsDown}>
        <div className={styles.cartItemsTotal}>
          <h1>Cart Totals</h1>
          <div>
            <div className={styles.cartItemsTotals}>
              <p>Subtotal</p>
              <p>${totalAmount}</p>
            </div>
            <hr />
            <div className={styles.cartItemsTotals}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className={styles.cartItemsTotals}>
              <h3>Total</h3>
              <h3>${totalAmount}</h3>
            </div>
          </div>
          <button>PROCESS TO CHECKOUT</button>
        </div>
        <div className={styles.cartItemsPromocode}>
          <p>If you have promo code, Enter it here</p>
          <div className={styles.cartItemsPromobox}>
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
