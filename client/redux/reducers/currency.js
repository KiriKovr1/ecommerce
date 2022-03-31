const SETCURRENCY = 'SETCURRENCY'
const GETCURRENCY = 'GETCURRENCY'

const initialState = {}

/* eslint-disable default-param-last */
export default (state = initialState, action) => {
    switch (action.type) {
        case SETCURRENCY: {
            return {
                ...state,
                USD: action.cuurency.USD,
                EUR: action.cuurency.EUR,
                CAD: action.cuurency.CAD,
                actualСurrency: action.cuurency.USD,
                actualСurrencyName: 'USD'
            }
        }
        case GETCURRENCY: {
            switch (action.currency) {
                case 'USD': {
                    return {
                        ...state,
                        actualСurrency: state.USD,
                        actualСurrencyName: action.currency
                    }
                }
                case 'EUR': {
                    return {
                        ...state,
                        actualСurrency: state.EUR,
                        actualСurrencyName: action.currency
                    }
                }
                case 'CAD': {
                    return {
                        ...state,
                        actualСurrency: state.CAD,
                        actualСurrencyName: action.currency
                    }
                }
                default: {
                    return state
                }
            }
        }
        default: {
            return state
        }
    }
}

export function setCurrency(data) {
    return { type: SETCURRENCY, cuurency: data }
} 

export function getCurrency(data) {
    return { type: GETCURRENCY, currency: data }
} 