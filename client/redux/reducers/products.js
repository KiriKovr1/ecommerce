const GETDATA = 'GETDATA'

const initialState = []

/* eslint-disable default-param-last */
export default (state = initialState, action) => {
  switch (action.type) {
    case GETDATA: {
      return state.concat(action.products)
    }
    case 'sortByAlphabet': {
      return state.sort((a, b) => {
        return b.productName.localeCompare(a.title)
      }).map(it => it)
    }
    case 'withoutSort': {
      return state.sort((a, b) => {
        return a.id - b.id
      }).map(it => it)
    }
    case 'sortByPrice': {
      return state.sort((a, b) => {
        return a.price - b.price
      }).map(it => it)
    }
    default:
      return state
  }
}

export function getData(data) {
  return { type: GETDATA, products: data }
}

export function sort(sortType) {
  return { type: sortType }
}