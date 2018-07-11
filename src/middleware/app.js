import * as ActionTypes from '../actions/types'
import locale from '../actions/locale'
import product from '../actions/product'

export const app = store => next => action => {
  next(action)

  if (action.type === ActionTypes.APP.INIT) {
    store.dispatch(locale.onLocaleLoad())
    store.dispatch(product.onProductLoadItems())
  }
}
