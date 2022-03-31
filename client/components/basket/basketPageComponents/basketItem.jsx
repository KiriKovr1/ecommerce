import React from "react";

const TableItem = (props) => {
    const price = props.price * props.actualCurrency
    console.log(props)
    return (
        <tr className="table__tableItem">
            <td className="tableItem__column">
                <div className="tableItem__imgSize">
                    <img src={props.img} alt="product" className="tableItem__img" />
                </div>
            </td>
            <td className="tableItem__column" align="center">
                <div className="column__name">
                    <p>
                        {props.name}
                    </p>
                </div>
            </td>
            <td className="tableItem__column" align="end">
                {price.toFixed(2)} {props.actualCurrencyName}
            </td>
        </tr>
    )
}

export default TableItem