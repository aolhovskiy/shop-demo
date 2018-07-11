import React from 'react'
import {Product} from './Product'
import './ProductList.css'

export const ProductList = (props) => {
  const {items, onCartAdd} = props
  return <div className="product-list">
    {items.map(item => <Product
      key={item.itemName}
      item={item}
      onCartAdd={onCartAdd} />
    )}
  </div>
}
