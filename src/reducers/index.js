import {combineReducers} from 'redux'
import cart from './cart'
import locale from './locale'
import product from './product'

const state = combineReducers({
  cart,
  locale,
  product: combineReducers(product)
})

export default state
