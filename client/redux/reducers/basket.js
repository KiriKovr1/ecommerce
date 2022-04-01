const ADDPRODUCT = 'ADDPRODUCT'
const REMOVEPRODUCT = 'REMOVEPRODUCT'

const initialState = []

/* eslint-disable default-param-last */
export default (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT: {
      const basket = [...state, {...action.newProduct, id:  new Date().getTime()}]
      return basket
    }
    case REMOVEPRODUCT: {
      return state.filter(it => it.id !== action.id )
    }
    default:
      return state
  }
}

export function addProduct(product) {
  return { type: ADDPRODUCT, newProduct: product }
}
export function removeProduct(data) {
  return { type: REMOVEPRODUCT, id:data}
}