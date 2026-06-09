const setItem = (key, data) => {
  if (typeof data === 'object') {
    window.localStorage.setItem(key, JSON.stringify(data))
  } else {
    window.localStorage.setItem(key, data)
  }
}

const getItem = (key) => {
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (err) {
    return window.localStorage.getItem(key)
  }
}

const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

const removeAllItem = () => {
  window.localStorage.clear()
}

export { setItem, getItem, removeItem, removeAllItem }
