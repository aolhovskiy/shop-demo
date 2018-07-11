import list from './list'
import * as ActionTypes from '../../actions/types'
import cartActions from '../../actions/cart'

const FIRST = {itemName: 'first', price: 11.11, quantityRemaining: 1}
const SECOND = {itemName: 'second', price: 22.22, quantityRemaining: 2}

describe('product list', () => {
  let current
  it('should return initial state', () => {
    current = (list(undefined, {}))
    expect(current).toEqual({
      error: false,
      isLoading: false,
      items: []
    })
  })

  it('should init with products', () => {
    current = list(current, {type: ActionTypes.PRODUCT_LIST.LOADED, items: [FIRST, SECOND]})
    expect(current).toEqual({
      error: false,
      isLoading: false,
      items: [FIRST, SECOND]
    })
  })

  it('should checkout', () => {
    const items = [{...FIRST, quantity: 1}, {...SECOND, quantity: 1}]
    current = list(current, {type: ActionTypes.CART.CHECKOUT, items})
    expect(current).toEqual({
      error: false,
      isLoading: false,
      items: [{...FIRST, quantityRemaining: 0}, {...SECOND, quantityRemaining: 1}]
    })
  })
})
