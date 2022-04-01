import React from "react";
import { useSelector } from "react-redux";


import TableItem from "./basketItem";

const BasketTable = () => {
    const basket = useSelector((s) => s.basket)
    const repeat = basket.reduce((acc, rec) => {
        return {
            ...acc,
            [rec.name]: (typeof acc[rec.name] !== 'undefined')
                ? acc[rec.name] + 1
                : 1
        }
    },
        {}
    )
    const basketItems = basket.reduce((acc, rec) => {
        if (acc.map(it => it.name).indexOf(rec.name) === -1) {
            return [...acc, rec]
        }
        return [...acc]
    }, [])
    const currency = useSelector((s) => s.currency)
    return (
        <table className="basketPage__table">
            <thead >
                <tr>
                    <td colSpan={6} align="center">
                        <div className="table__tableHead">
                            <p className="table__title">
                                Basket
                            </p>
                        </div>
                    </td>
                </tr>
            </thead>
            <tbody>
                {basketItems.map((product, index) => {
                    console.log({ lin: product.name })
                    return <TableItem
                        key={`${product.name}${index}0`}
                        id={product.id}
                        img={product.img}
                        name={product.name}
                        price={product.price}
                        actualCurrencyName={currency.actualСurrencyName}
                        actualCurrency={currency.actualСurrency}
                        repeat={repeat[product.name]}
                    />
                })}
            </tbody> 
        </table>
    )
}

export default BasketTable