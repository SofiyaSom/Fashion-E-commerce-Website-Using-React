import React, { useContext } from 'react'
import { ShopContext } from '../Components/ShopCategory/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../Components/Product/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/Product/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/Product/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/Product/RelatedProducts/RelatedProducts'
import styles from './ModuleCSS/Product.module.css'

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className={styles.product}>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      {/* <DescriptionBox/> */}
      <RelatedProducts/>
    </div>
  )
}

export default Product
