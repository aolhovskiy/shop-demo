import http from './http'

export default {
  list: () => {
    return http.getJSON('/assets/data/store_items.json')
  }
}
