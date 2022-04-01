import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { getData } from '../../../redux/reducers/products'
import { setCurrency } from '../../../redux/reducers/currency'
import ProductCart from './productCart'


const Store = () => {
    const dispatch = useDispatch()
    const productData = useSelector((s) => s.products)
    React.useEffect(() => {
        if (productData.length === 0) {
            axios.get('/api/v1/getData')
                .then(resProduct => resProduct.data)
                .then((data) => {
                    dispatch(getData(data))
                })
                .catch(err => console.log(err))
        }
        axios.get('/api/v1/currency')
            .then(resCurrency => resCurrency.data)
            .then((data) => {
                dispatch(setCurrency(data))
            })
            .catch(err => console.log(err))
    }, [])
    const currency = useSelector((s) => s.currency)
    console.log(currency)
    return (
        <div className='store'>
            {productData.map((it, index) => {
                return (
                    <div key={`${it.id} ${it.productName} ${index}`} className="stroe__products">
                        <ProductCart
                            id={it.id}
                            productName={it.productName}
                            weight={it.weight}
                            price={it.price}
                            img={it.img}
                            currency={currency}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Store