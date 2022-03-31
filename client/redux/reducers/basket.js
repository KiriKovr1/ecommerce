const ADDPRODUCT = 'ADDPRODUCT'

const initialState = []

/* eslint-disable default-param-last */
export default (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT: {
      return [...state, action.newProduct]
    }
    default:
      return state
  }
}

export function addProduct(product){
  return {type: ADDPRODUCT, newProduct: product}
}
