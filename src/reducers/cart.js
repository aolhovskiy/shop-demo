import {CART} from '../actions/types'

const initialState = {
  items: []
}

const isItemValid = (item) => item.quantity >= 0 && item.quantity <= item.quantityRemaining

const changeQuantity = (items, item, delta) => {
  const index = items.findIndex(x => x.itemName === item.itemName)
  if (index > -1) {
    const item = {...items[index]}
    item.quantity = item.quantity + delta
    if (!isItemValid(item)) return items
    if (item.quantity === 0) {
      return [...items.slice(0, index), ...items.slice(index + 1)]
    }

    return Object.assign([], items, {[index]: item})
  }

  const newItem = {...item, quantity: Math.min(item.quantityRemaining, delta)}
  return newItem.quantity > 0 ? [...items, newItem] : items
}

const cart = (state = initialState, payload) => {
  switch (payload.type) {
    case CART.CHANGE_QUANTITY:
      return {...state, items: changeQuantity(state.items, payload.item, payload.delta)}
    case CART.CLEAR:
      return initialState
    case CART.CHECKOUT:
      return initialState
    default: return state
  }
}

export default cart
