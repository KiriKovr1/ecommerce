import React from 'react'

import { useDispatch } from 'react-redux'
import { sort } from '../redux/reducers/products'
import { getCurrency } from '../redux/reducers/currency'

const Sort = () => {
    const dispatch = useDispatch()
    return (
        <div className='headerButtons__sort'>
                <p>Sort:</p>
                <select
                    name="sort"
                    className='sort__sortType'
                    onChange={(e) => dispatch(sort(e.target.value))}
                >
                    <option value="withoutSort">
                        without sort
                    </option>
                    <option value="sortByAlphabet">
                        sort by alphabet
                    </option>
                    <option value="sortByPrice">
                        sort by price
                    </option>
                </select>
            </div>
    )
}

const Buttons = () => {
    const dispatch = useDispatch()
    return (
        <div className='headerButtons__currencyButtons'>
                <p>Currency:</p>
                <button
                    type='button'
                    className='currencyButtons__button'
                    value='USD'
                    onClick={(e)=> {
                        dispatch(getCurrency(e.target.value))
                    }}
                >
                    USD
                </button>
                <button
                    type='button'
                    className='currencyButtons__button'
                    value='EUR'
                    onClick={(e)=> {
                        dispatch(getCurrency(e.target.value))
                    }}
                >
                    EUR
                </button>
                <button
                    type='button'
                    className='currencyButtons__button'
                    value='CAD'
                    onClick={(e)=> {
                        dispatch(getCurrency(e.target.value))
                    }}
                >
                    CAD
                </button>
            </div>
    )
}

const HeaderButtons = () => {
    return (
        <div className='header__headerButtons'>
            <Buttons /> 
            <Sort />
        </div>
    )
}

export default HeaderButtons