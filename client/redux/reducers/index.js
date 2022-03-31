import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import products from './products'
import basket from './basket'
import currency from './currency'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    products,
    basket,
    currency
  })

export default createRootReducer
