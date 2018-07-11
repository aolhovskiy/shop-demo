import React from 'react'
import {Provider} from 'react-redux'

import {store} from '../containers/store'
import {IntlProvider} from '../containers/IntlProvider'
import {Root} from '../containers/Root'
import './App.css'

export const App = (props) => {
  return (
    <Provider store={store}>
      <IntlProvider>
        <div className="App">
          <Root />
        </div>
      </IntlProvider>
    </Provider>
  )
}
