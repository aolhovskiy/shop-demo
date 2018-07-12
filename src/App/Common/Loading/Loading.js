import React from 'react'
import {FormattedMessage} from 'react-intl'
import './Loading.css'

export const Loading = (props) => {
  const {isLoading, error, children} = props
  if (!isLoading && !error) return <div className={props.className}>{children}</div>
  const className = `${props.className || ''} ${isLoading ? 'loading' : ''} ${error ? 'error' : ''}`
  return <div className={className}>
    {error && <div className="error">
      <FormattedMessage id={error} defaultMessage="Unexpected error" />
    </div>}
    {isLoading && !error && 
      <FormattedMessage id="LOADING" defaultMessage="Loading..." />
    }
  </div>
}
