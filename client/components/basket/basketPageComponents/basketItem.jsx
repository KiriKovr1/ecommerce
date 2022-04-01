import React from "react";
import { useDispatch } from "react-redux";

import { addProduct, removeProduct } from "../../../redux/reducers/basket";

const TableItem = (props) => {
    const dispatch = useDispatch()
    const price = props.price * props.actualCurrency
    console.log(props)
    return (
        <tr className="table__tableItem">
            <td className="tableItem__column">
                <div className="tableItem__imgSize">
                    <img src={props.img} alt="product" className="tableItem__img" />
                </div>
            </td>
            <td className="tableItem__column" align="start">
                <p>
                    {props.name}
                </p>
            </td>
            <td className="tableItem__column--button" align='end'>
                <button
                    type='button'
                    className="column__button"
                    onClick={() => {
                        dispatch(removeProduct(props.id))
                    }}
                >
                    -
                </button>
            </td>
            <td className="tableItem__column--button" align="center">
                <p>
                    {props.repeat}
                </p>
            </td>
            <td className="tableItem__column--button">
                <button
                    type='button'
                    className="column__button"
                    onClick={() => {
                        dispatch(addProduct({
                            name:props.name,
                            price:props.price,
                            img:props.img
                        }))
                    }}

                >
                    +
                </button>
            </td>
            <td className="tableItem__column" align="end">
                {price.toFixed(2)} {props.actualCurrencyName}
            </td>
        </tr>
    )
}

export default TableItem