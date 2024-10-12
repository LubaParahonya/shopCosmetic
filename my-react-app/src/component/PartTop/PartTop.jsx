import React from 'react'
import style from './PartTop.module.css'
import { IoSearch } from "react-icons/io5";
import img from './img/a7ea30f075e243febc5e0be46e7b89b3.jpeg' 

const PartTop = () => {
  return (
    <div className={style.mainContaner}>
      <div >
        <div className={style.bigTitle}>Get Your Best Cosmetic Products Here</div>
        <div className={style.smallTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
        <div className={style.contanerSearch}>
          <input className={style.search} type='Search' placeholder='search'></input>
          <IoSearch className={style.iconSearch}/>
        </div>
        <button className={style.buttonShow} type='sumbit'>Show now</button>
     </div>
      <img src={img} className={style.picture}></img>
    </div>
  )
}

export default PartTop
