import React from 'react'
import style from './PartTwo.module.css'
import img1 from './img/Airbnb Logo.png'  
import img2 from './img/FedEx Logo (1).png'
import img3 from './img/Google Logo.png'  
import img4 from './img/Hubspot Logo.png' 
import img5 from './img/Microsoft Logo.png' 
import img6 from './img/Walmart Logo.png' 


const PartTwo = () => {
  return (
    <div className={style.logo1}>
      <ul className={style.listImg}>
        <li><img src={img1} className={style.itemImg}/></li>
        <li><img src={img2} className={style.itemImg}/></li>
        <li><img src={img3} className={style.itemImg}/></li>
        <li><img src={img4} className={style.itemImg}/></li>
        <li><img src={img5} className={style.itemImg}/></li>
        <li><img src={img6} className={style.itemImg}/></li>
      </ul>
    </div>
  )
}

export default PartTwo
