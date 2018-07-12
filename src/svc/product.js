import http from './http'

export default {
  list: () => http.getJSON('/assets/data/store_items.json')
}
