import React from 'react'
import {CartHeader} from './CartHeader'
import {CartItem} from './CartItem'
import {CartTotal} from './CartTotal'

export const Cart = (props) => {
  const {items} = props.cart
  const {onCartChangeQuantity, onCartClear, onCartCheckout} = props
  return <div className="cart">
    <CartHeader items={items} />
    <div className="cart-items">
      {items.map(item => <CartItem
        key={item.itemName}
        item={item}
        onCartChangeQuantity={onCartChangeQuantity} />
      )}
    </div>
    <CartTotal
      items={items}
      onCartCheckout={onCartCheckout}
      onCartClear={onCartClear} />
  </div>
}
