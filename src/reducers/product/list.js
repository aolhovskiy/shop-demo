import {PRODUCT_LIST, CART} from '../../actions/types'

const initialState = {
  error: false,
  isLoading: false,
  items: []
}

const list = (state = initialState, payload) => {
  switch (payload.type) {
    case PRODUCT_LIST.LOADING:
      return {...state, error: false, isLoading: true}
    case PRODUCT_LIST.LOADED:
      return {...state, error: false, isLoading: false, items: payload.items}
    case PRODUCT_LIST.ERROR:
      return {...state, error: true, isLoading: false, items: []}
    case CART.CHECKOUT:
      return {
        ...state,
        items: state.items.map(product => {
          const cartItem = payload.items.find(x => x.itemName === product.itemName)
          if (!cartItem) return product
          return {
            ...product,
            quantityRemaining: product.quantityRemaining - cartItem.quantity
          }
        })
      }
    default: return state
  }
}

export default list
