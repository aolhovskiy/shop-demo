import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Loading} from '../Common'
import {ProductList} from '../../containers/ProductList'
import {Cart} from '../../containers/Cart'
import './Root.css'

export const Root = props => {
  const {isLoading, error} = props.locale
  return <Loading className="root" isLoading={isLoading} error={error && 'Failed to load locale'}>
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
  </Loading>
}
