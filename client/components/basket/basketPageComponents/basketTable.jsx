import React from "react";
import { useSelector } from "react-redux";

import TableItem from "./basketItem";

const BasketTable = () => {
    const basket = useSelector((s) => s.basket)
    const currency = useSelector((s) => s.currency)
    return (
            <table className="basketPage__table">
                <thead>
                    <tr>
                        <td colSpan={3} align = "center">
                            <p className="table__title">
                                Basket
                            </p>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {basket.map((product,index) => {
                        return <TableItem
                            key={`${product.productName}${index}0`}
                            img={product.img}
                            name={product.name}
                            price={product.price}
                            actualCurrencyName={currency.actualСurrencyName}
                            actualCurrency={currency.actualСurrency}
                        />
                    })}
                </tbody>
            </table>
    )
}

export default BasketTable