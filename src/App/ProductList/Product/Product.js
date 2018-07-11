import React from 'react'
import {FormattedMessage} from 'react-intl'
import {CurrencyAmount} from '../../Common'
import './Product.css'

export const Product = (props) => {
  const {item, onCartAdd} = props
  return <div className="product">
    <img src={item.imgSrc} alt={item.itemName} />
    <div className="title">{item.itemName}</div>
    <div className="stock">
      <div className="price">
        <CurrencyAmount amount={item.price} />
      </div>
      <div className="remaining">
        <FormattedMessage id="PRODUCT_REMAINING" defaultMessage="{value} in Stock"
          values={{value: item.quantityRemaining}} />
      </div>
    </div>
    <div className="add">
      <button className="btn add-to-cart" disabled={item.quantityRemaining <= 0} onClick={() => onCartAdd(item)} >
        <FormattedMessage id="PRODUCT_ADD" defaultMessage="Add to Cart" />
      </button>
    </div>
  </div>
}
