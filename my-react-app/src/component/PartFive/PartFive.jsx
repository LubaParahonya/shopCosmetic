import React from 'react'
import img from './img/Rectangle 8.png' 
import style from './PartFive.module.css'

const PartFive = () => {
  return (
    <div className={style.main}>
     <div>
    <div className={style.title}>The Perfect Beauty Of You</div>
    <div className={style.contanerText}>
     <p className={style.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <p className={style.text}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <button className={style.showNow}>Show Now</button>
     </div>
     <img src={img}></img>
    </div>
  )
}

export default PartFive
