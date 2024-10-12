import React from 'react'
import {useSelector} from 'react-redux'

import style from './PartThree.module.css'
import img1 from './img/Group 5107.png' 
import img2 from './img/Group 5108.png' 
import { Link } from 'react-router-dom'


const PartThree = ({amount = 2}) => {
  const {list} = useSelector(({products}) => products)
  const products = list.filter((_,i) => i < amount)
  return (
    <div className={style.block}>
      <div className={style.mailText}>
      Our Porular Product
      </div>
      <div className={style.smallBlock}>
        <div className={style.smallText}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        </div>
        <Link to='products' className={style.ourProduct}>
            Discover Our Products 
        </Link>
      </div>
      <div className={style.partPhoto}>
      {Array.isArray(products) ? products.map(({id, url, title, discription, price })=> (
      <div className={style.item} key={id}>
      <img src={url} className={style.itemPhoto}/>
      <div className={style.blockInfo}>
      <p className={style.title}>{title}</p>
      <p className={style.text}>{discription}</p>
    <div className={style.partButton}>
        <button className={style.buyNow}>Buy Now</button>
        <button className={style.addToCart}>Add To Cart</button>
        <div className={style.price}>${price}</div>
        </div>
    </div>
    </div>
      
     ))
     : null
     }
      
      </div> 

    </div>
  )
}

export default PartThree
