import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addProduct } from '../../../redux/reducers/basket'
import ProductsInBasket from '../../productsInBasket'


const ProductCart = (props) => {
    const basketSize = useSelector(s => s.basket)
        .reduce((acc, rec) => {
            if (props.productName === rec.name) {
                return acc + 1
            }
            return acc
        }, 0)
        console.log(basketSize)
    const dispatch = useDispatch()
    const productInfo = {
        name: props.productName,
        price: props.price,
        img: props.img
    }
    const price = props.price * props.currency.actualСurrency 
    return (
        <div className='store__productCart'>
            <div className='ProductCart__ImageSizes'>
                <img src={props.img} alt="productImg" className='ProductCart__image' />
            </div>
            <ProductsInBasket parent='productCart' size={basketSize} />
            <div className='productCart__info'>
                <div className='productCart__infoDescription'>
                    <div>
                        <h3 className='productCart__title'>{props.productName}</h3>
                        <p className='productCart__weight'>{props.weight}g</p>
                    </div>
                    <div className='productCart__price'>
                        <p className='productCart__priceText'>{price.toFixed(2)} {props.currency.actualСurrencyName}</p>
                    </div>
                </div>
                <button
                    type='button'
                    className='ProductCart__Button'
                    onClick={() => {
                        dispatch(addProduct(productInfo))
                    }}
                >
                    <span className='ProductCart__Button__context'>
                        <span>
                            <img src="images/basket.png" alt="basket" className="productCart__basketImg" />
                        </span>
                        <span>
                            add to basket
                        </span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default ProductCart