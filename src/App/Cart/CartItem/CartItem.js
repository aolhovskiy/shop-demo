import React from 'react'
import {FormattedMessage} from 'react-intl'
import {CurrencyAmount, LinkButton} from '../../Common'
import './CartItem.css'

export const CartItem = (props) => {
  const {item, onCartChangeQuantity} = props
  return <div className="cart-item">
    <div className="info">
      <div className="icon">
        <img src={item.imgSrc} alt={item.itemName} />
      </div>
      <div className="quantity">
        <LinkButton
          className="change"
          onClick={() => onCartChangeQuantity(item, -1)}>-</LinkButton>
        <div className="value">{item.quantity}</div>
        <LinkButton className="change"
          disabled={item.quantity === item.quantityRemaining}
          onClick={() => onCartChangeQuantity(item, 1)}>+</LinkButton>
      </div>
    </div>
    <div className="subtotal">
      <div className="value">
        <FormattedMessage id="CART_SUBTOTAL_PREFIX" defaultMessage="@" />
        <CurrencyAmount amount={item.price} />
        <FormattedMessage id="CART_SUBTOTAL_SUFFIX" defaultMessage="each" />
        <FormattedMessage id="CART_SUBTOTAL_EQUALS" defaultMessage=" = " />
        <CurrencyAmount amount={item.price * item.quantity} />
      </div>
      <LinkButton className="delete"
        onClick={() => onCartChangeQuantity(item, -item.quantity)}>
        <FormattedMessage id="DELETE" defaultMessage="Delete" />
      </LinkButton>
    </div>
  </div>
}
