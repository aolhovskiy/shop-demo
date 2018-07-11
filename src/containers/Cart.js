import {connect} from 'react-redux'

import cartActions from '../actions/cart'
import {Cart as CartComp} from '../App/Cart'

const cart = (state) => ({
  cart: state.cart
})

const actions = cartActions

const Cart = connect(cart, actions)(CartComp)
export {Cart}
