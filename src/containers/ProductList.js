import {connect} from 'react-redux'

import productActions from '../actions/product'
import cartActions from '../actions/cart'
import {ProductList as ProductListComp} from '../App/ProductList'

const productList = (state) => state.product.list

const actions = {
  ...productActions,
  ...cartActions
}

const ProductList = connect(productList, actions)(ProductListComp)

export {ProductList}
