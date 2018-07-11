import * as ActionTypes from './types'

const onCartChangeQuantity = (item, delta) => ({
  type: ActionTypes.CART.CHANGE_QUANTITY,
  item,
  delta
})

const onCartClear = () => ({type: ActionTypes.CART.CLEAR})

const onCartCheckout = (items) => ({type: ActionTypes.CART.CHECKOUT, items})

export default {
  onCartAdd: (item) => onCartChangeQuantity(item, 1),
  onCartChangeQuantity,
  onCartClear,
  onCartCheckout
}
