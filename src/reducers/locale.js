import * as ActionTypes from '../actions/types'

const initialState = {
  isLoading: false,
  error: null,
  locale: 'en',
  messages: {}
}

const locale = (state = initialState, payload) => {
  switch (payload.type) {
    case ActionTypes.LOCALE.ERROR:
      return {...state, isLoading: false, error: payload.error}
    case ActionTypes.LOCALE.LOADING:
      return {...initialState, isLoading: true}
    case ActionTypes.LOCALE.LOADED:
      return {...state, locale: payload.locale, messages: payload.translations, isLoading: false}
    default:
      return state
  }
}

export default locale
