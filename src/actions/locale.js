import * as ActionTypes from './types'
import http from '../svc/http'

const onLocaleLoad = () => (dispatch) => {
  dispatch({type: ActionTypes.LOCALE.LOADING})
  http.getJSON('/assets/i18n/en.json')
  .then(translations => dispatch({
    type: ActionTypes.LOCALE.LOADED, 
    locale: 'en',
    translations
  }))
  .catch(error => dispatch({type: ActionTypes.LOCALE.ERROR, error}))
}

export default {
  onLocaleLoad
}
