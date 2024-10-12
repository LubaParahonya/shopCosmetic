import React from 'react'
import img from './img/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction (1) 1.png' 
import style from './PartSix.module.css'
import Rating from '@mui/material/Rating';

const PartSix = () => {
  return (
    <div className={style.main}>
      <div className={style.imgMain}>
      <img src={img}></img>
      </div>
      <div>
        <p className={style.topText}>Amazing Cosmetic</p>
        <Rating className={style.star}name="half-rating" defaultValue={2.5} precision={0.5} />
        <div className={style.bottomText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
      <p className={style.personName}>Rusmin Islam</p>
      <p className={style.job}>Designer</p>
      <button className={style.next}>{'>'}</button>
      </div>
    </div>
  )
}

export default PartSix
