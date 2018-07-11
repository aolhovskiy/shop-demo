import React from 'react'
import {FormattedMessage} from 'react-intl'
import {CurrencyAmount, LinkButton} from '../../Common'
import './CartTotal.css'

export const CartTotal = (props) => {
  const {items, onCartClear, onCartCheckout} = props
  if (items.length === 0) {
    return <div className="cart-total no-items">
      <FormattedMessage id="CART_NO_ITEMS" defaultMessage="Empty Cart" />
    </div>
  }

  const total = items.reduce((sum, item) => sum += item.quantity * item.price, 0)
  return (
    <div className="cart-total">
      <div className="stripe">&nbsp;</div>
      <div className="total">
        <FormattedMessage id="CART_TOTAL_PRICE" defaultMessage="Total: " />
        <CurrencyAmount amount={total} />
      </div>
      <div className="empty">
        <LinkButton className="empty" onClick={() => onCartClear()}>
          <FormattedMessage id="CART_EMPTY" defaultMessage="Empty Cart" />
        </LinkButton>
      </div>
      <div className="checkout">
        <button onClick={() => onCartCheckout(items)}>
          <FormattedMessage id="CART_CHECKOUT" defaultMessage="Confirm Purchase" />
        </button>
      </div>
    </div>
  )
}
