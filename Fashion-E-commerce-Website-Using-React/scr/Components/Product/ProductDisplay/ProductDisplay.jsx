import React, { useContext } from 'react';
import styles from './ProductDisplay.module.css';
import startIcon from '../../Assets/star_icon.png';
import starDullIcon from '../../Assets/star_dull_icon.png';
import { ShopContext } from '../../ShopCategory/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    const handleAddToCart = (event) => {
        event.preventDefault(); // Prevents the default action
        addToCart(product.id);
    };

    return (
        <div className={styles.ProductDisplay}>
            <div className={styles.ProductDisplayLeft}>
                <div className={styles.ProductDisplayImgList}>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className={styles.ProductDisplayImg}>
                    <img className={styles.ProductDisplayMainImg} src={product.image} alt="" />
                </div>
            </div>
            <div>
            <div className={styles.ProductDisplayRight}>
                    <h1>{product.name}</h1>
                    <div className={styles.ProductDisplayRightStar}>
                        <img src={startIcon} alt="" />
                        <img src={startIcon} alt="" />
                        <img src={startIcon} alt="" />
                        <img src={startIcon} alt="" />
                        <img src={starDullIcon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className={styles.ProductDisplayRightPrices}>
                        <div className={styles.ProductDisplayRightPricesOld}>${product.old_price}</div>
                        <div className={styles.ProductDisplayRightPricesNew}>${product.new_price}</div>
                    </div>
                    <div className={styles.ProductDisplayRightDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat laboriosam quisquam earum iusto dolor quo iure ipsa, tenetur deserunt?
                    </div>
                    <div className={styles.ProductDisplayRightSize}>
                        <h1>Select Size</h1>
                        <div className={styles.ProductDisplayRightSizes}>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={handleAddToCart}>ADD TO CART</button>
                    <p className={styles.ProductDisplayRightCategory}><span>Category: </span>Women, T-shirt, Crop Top</p>
                    <p className={styles.ProductDisplayRightCategory}><span>tag: </span>Modern, Lastest</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
