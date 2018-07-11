import React from 'react'
import {FormattedMessage} from 'react-intl'
import {ProductList} from '../../containers/ProductList'
import {Cart} from '../../containers/Cart'
import './Root.css'

export const Root = props => {
  if (props.locale.isLoading) {
    return <div className="root loading"></div>
  }

  return <div className="root">
    <div className="header">
      <div className="title">
        <FormattedMessage id="TITLE" defaultMessage="Fruits" />
      </div>
      <div className="stripe">&nbsp;</div>
    </div>
    <div className="main">
      <div className="left"><ProductList /></div>
      <div className="right"><Cart /></div>
    </div>
  </div>
}
