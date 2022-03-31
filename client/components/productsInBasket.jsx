import React from 'react'

const ProductsInBasket = (props) => {
    return (
        <div className={props.size === 0 ?
            `ProductsInBasket--${props.parent}--hidden` :
            `ProductsInBasket--${props.parent}`
        }>
            <p>
                {props.size}
            </p>
        </div>
    )
}

export default ProductsInBasket