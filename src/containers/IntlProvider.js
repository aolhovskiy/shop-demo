import {connect} from 'react-redux'

import {IntlProvider as IntlProviderComp, addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
addLocaleData(en)

const locale = (state) => ({
  formats: {
    currency: 'USD',
    currencyDisplay: 'symbol'
  },
  locale: state.locale.locale,
  messages: state.locale.messages
})

const IntlProvider = connect(locale)(IntlProviderComp)

export {IntlProvider}
