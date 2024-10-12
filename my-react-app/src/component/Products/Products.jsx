import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import img from './img/20098679.png'
import img2 from './img/__-15.jpg'
import img3 from './img/_30.jpg'
import img4 from './img/333.jpg'
import img5 from './img/20098679.png'
import img6 from './img/23324972.jpg'
import img7 from './img/24188292.jpg'
import img8 from './img/28971755.jpg'
import img9 from './img/47166827.jpg'
import img10 from './img/53364023.jpg'
import img11 from './img/53456063.jpg'
import img12 from './img/66159977.jpg'
import img13 from './img/68596410.jpg'
import img14 from './img/74075173.png'
import img15 from './img/74445705.jpg'
import img16 from './img/76000056.jpg'


import style from './Products.module.css'
import { filterCategoriesReduser } from '../../features/products/productsSlice'


const Products = ({amount = 8}) => {
  const {list} = useSelector(({products}) => products)
  const products = list.filter((_,i) => i < amount)
  const listCat =  [...new Set(list.filter(({catecories})=> typeof catecories !== 'undefined').map(({catecories})=> catecories))]
  const dispatch = useDispatch()

  const getCategories = (catecories) =>{
    console.log(catecories)
    //e.preventDefault()
    dispatch(filterCategoriesReduser(catecories))
  }
  
  return (
    <>
    <div className={style.listCategories}>
    {Array.isArray(listCat) ? listCat.map(el =>(
        <button onClick={() =>getCategories(el)} className={style.itemCategories} key={el}>{el}</button>
      )): null}
      </div>
    <div className={style.main}>
     {Array.isArray(products) ? products.map(({id, title, url, discription, price })=> (
      <div className={style.item} key={id}>
      <img src={url} className={style.itemImg}/>
      <div className={style.blockInfo} >
      <p className={style.title} style={{display:'flex', textAlign: 'center'}}>{title} </p>
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
    </>
  )
}

export default Products




