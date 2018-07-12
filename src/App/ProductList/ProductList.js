import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Loading} from '../Common'
import {Product} from './Product'
import './ProductList.css'

export const ProductList = (props) => {
  const {items, isLoading, error, onCartAdd} = props
  return <Loading isLoading={isLoading} error={error && 'PRODUCT_LIST_ERROR'} className="product-list">
    {items.length === 0 && <div className="no-items">
      <FormattedMessage id="PRODUCT_NO_ITEMS" defaultMessage="No product items" />
    </div>}
    {items.map(item => <Product
      key={item.itemName}
      item={item}
      onCartAdd={onCartAdd} />
    )}
  </Loading>
}
