import React from 'react'
import {FormattedMessage} from 'react-intl'
import './CartHeader.css'

export const CartHeader = ({items}) => {
  return (
    <div className="cart-header">
      <div className="title">
        <FormattedMessage id="CART_TITLE" defaultMessage="Shopping Cart" />
      </div>
      <div className="total">
        <FormattedMessage id="CART_TOTAL_ITEMS" defaultMessage="{value} items"
          values={{value: items.length}} />
      </div>
    </div>)
}
