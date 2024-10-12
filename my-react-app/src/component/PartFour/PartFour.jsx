import React from 'react'
import style from './PartFour.module.css'

const PartFour = () => {
  return (
    <div className={style.main}>
      <div className={style.block}>
        <div className={style.value}>100%</div>
        <div className={style.text}>Organic Products</div>
      </div>
      <div className={style.block}>
        <div className={style.value}>2М+</div>
        <div className={style.text}>Yearly Sales</div>
      </div>
      <div className={style.block}>
        <div className={style.value}>1.9M+</div>
        <div className={style.text}>Happy Customar</div>
      </div>
    </div>
  )
}

export default PartFour
