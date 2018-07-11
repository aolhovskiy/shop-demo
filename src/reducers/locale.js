import * as ActionTypes from '../actions/types'

const initialState = {
  isLoading: true,
  locale: 'en',
  messages: {}
}

const locale = (state = initialState, payload) => {
  switch (payload.type) {
    case ActionTypes.LOCALE.LOADED:
      return {...state, locale: payload.locale, messages: payload.translations, isLoading: false}
    default:
      return state
  }
}

export default locale
