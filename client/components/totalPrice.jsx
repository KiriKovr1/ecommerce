import React from 'react'
import { useSelector } from 'react-redux'

const TotalPrice = () => {
    const currency = useSelector((s) => s.currency)
    const basket = useSelector((s) => s.basket)
    const totalPriceUSD = basket.reduce((acc,rec) => {
        return acc + rec.price
    }, 0)
    const totalPrice = totalPriceUSD * currency.actualСurrency
    return ( 
        <h3>
            {totalPrice.toFixed(2)} {currency.actualСurrencyName}
        </h3>
    )
}

export default TotalPrice