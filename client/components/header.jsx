import React from 'react'



import HeaderTitle from './headerTitle'
import Basket from './basket'
import HeaderButtons from './headerButtons'
import TotalPrice from './totalPrice'


const Header = () => {
  return (
    <div className='mainPage__header'>
      <div className='header__main'>
        <HeaderTitle />
        <Basket />
          <div className='header__totalPrice'>
            <p>to pay</p>
            <TotalPrice />
          </div>
      </div>
      <HeaderButtons />
    </div>
  )
}

export default Header
