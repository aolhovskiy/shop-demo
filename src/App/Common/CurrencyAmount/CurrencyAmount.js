import React from 'react'
import {FormattedNumber} from 'react-intl'
import './CurrencyAmount.css'

export const CurrencyAmount = (props) => {
  const {amount, currency = 'USD', round = false, style='currency'} = props
  const value = round ? Math.ceil(amount) : amount
  return <FormattedNumber
    value={value}
    currency={currency}
    style={style} />
}
