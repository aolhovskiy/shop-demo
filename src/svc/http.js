const getJSON = (url) => {
  return fetch(url).then(r => r.json())
}

export default {
  getJSON
}
