import React, { useState } from 'react'
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import style from './Navigate.module.css'
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { RiMenu4Line } from "react-icons/ri";
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';


const Navigate = () => {
    const navList = [{
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Products',
      path: '/products'
    },
    {
      name: 'About us',
      path: '/about'
    },
    {
      name: 'Contact us',
      path: '/contact'
    },
  ]

const {list} = useSelector(({products}) => products)
const listCat =  [...new Set(list.filter(({catecories})=> typeof catecories !== 'undefined').map(({catecories})=> catecories))]  
const [menuState, setNemuState] = useState(false)
const handelsubmit = (e)=> {
  e.preventDefault()
  setNemuState(!menuState)
  console.log(menuState)
}
  return (
    <>
    <div className={style.mainNav}>
      <ul className={style.listMenu}>
      {
        navList.map(el => (
          <li key={uuid()} className={style.element}>
            <Link className={style.itemMenu} to={el.path}>{el.name}</Link>
          </li>
        ))
      }
      </ul>
      <div className={style.blockIcon}>
      <Link className={style.element} to='profile' style={{color: '#222222'}}><CgProfile className={style.icon}/></Link>
      <Link className={style.element} to='cart' style={{color: '#222222'}}><CiShoppingCart className={style.icon}/></Link>
      <Button className={style.element} style={{color: '#222222'}} onClick={handelsubmit}><RiMenu4Line className={style.icon}></RiMenu4Line></Button>
      </div>
    </div>
    <nav className={menuState? style.hiddenMenuActive : style.hiddenMenu}>
    <ul className={style.listCosmeticMenu}>
      {listCat.map(el=> (
        <li className={style.hoverStyle} key={uuid()}><Link className={style.textMenu}>{el}</Link></li>
      ))}
        
      </ul>
    </nav>
    </>
  )
}

export default Navigate
