import cart from './cart'
import actions from '../actions/cart'

const FIRST = {itemName: 'first', price: 11.11, quantityRemaining: 1}
const SECOND = {itemName: 'second', price: 22.22, quantityRemaining: 2}

describe('cart', () => {
  it('should return initial state', () => {
    expect(cart(undefined, {})).toEqual({items: []})
  })

  let current = cart(undefined, {})

  it('should add first product to the cart', () => {
    current = cart(current, actions.onCartAdd(FIRST))
    expect(current).toEqual({
      items: [
        {...FIRST, quantity: 1}
      ]
    })
  })

  it('should not add first product to the cart second time', () => {
    const first = current.items[0]
    current = cart(current, actions.onCartAdd(first))
    expect(current).toEqual({
      items: [
        {...FIRST, quantity: 1}
      ]
    })
  })

  it('should remove first product from the cart on decrease', () => {
    const first = current.items[0]
    current = cart(current, actions.onCartChangeQuantity(first, -1))
    expect(current).toEqual({
      items: []
    })
  })

  it('should add second product to the cart twice', () => {
    current = cart(current, actions.onCartChangeQuantity(SECOND, 2))
    expect(current).toEqual({
      items: [
        {...SECOND, quantity: 2}
      ]
    })
  })

  it('should clear cart', () => {
    // Do not reset current.
    expect(cart(current, actions.onCartClear())).toEqual({items:[]})
  })

  it('should checkout cart', () => {
    expect(cart(current, actions.onCartCheckout())).toEqual({items:[]})
  })
})


