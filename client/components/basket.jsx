import React from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ProductsInBasket from './productsInBasket'

const Basket = () => {
    const basketSize = useSelector((s) => s.basket.length)
    return (
        <Link to='/basket'>
            <div className='header__basket'>
                <span>
                    <span>
                        <img src="images/basket.png" alt="basket" className='header__basketImage' />
                    </span>
                    <span >
                        <ProductsInBasket parent='header' size={basketSize} />
                    </span>
                </span>
            </div>
        </Link>
    )
}

export default Basket