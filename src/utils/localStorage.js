const put = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const get = (key) => {
  const result = window.localStorage.getItem(key);
  return JSON.parse(result);
}

export default {
  get,
  put
}
