import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiIcons } from 'react-icons/ai'
import classes from './header.module.scss'
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className ={classes.header__content__logo}>BinaryLeo</h2>
    
        <nav className={classes.header__content__nav}>
          <ul>
            <li a href="/">
              PageOne
            </li>
            <li a href="/">
              PageTwo
            </li>
            <li a href="/">
              PageThree
            </li>
          </ul>
          <button>CTA</button>
        </nav>
        <div className={classes.header__content__toggle}>
          <BiMenuAltRight></BiMenuAltRight>
        </div>
        </div>
    </header>
  )
}

export default Header
