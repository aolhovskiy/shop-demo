import React from 'react'
import './LinkButton.css'

export const LinkButton = (props) => {
  const onClick = (e) => {
    e.preventDefault()
    if (props.disabled) return
    props.onClick()
  }
  const className = `link-button ${props.className || ''} ${props.disabled ? 'disabled': ''}`
  return <a className={className} href="" onClick={onClick}>{props.children}</a>
}
