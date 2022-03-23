/**
 * @param  {string} url - URL to query
 * @param  {Object} payload
 * @param  {Object}} - headers can be specified or else default will be set
 */
const fetchPost = (
  url,
  payload,
  headers = { "Content-Type": "application/json" }
) => {
  return fetch(url, {
    method: "POST",
    body: payload,
    headers: headers,
  })
    .then(async (response) => {
      let data = await response.json();
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
};
/**
 * @param  {string} url - URL to query
 * @param  {Object} payload
 * @param  {Object}} - headers can be specified or else default will be set
 */
const fetchPut = (
  url,
  payload,
  headers = { "Content-Type": "application/json" }
) => {
  return fetch(url, {
    method: "PUT",
    body: payload,
    headers: headers,
  })
    .then((response) => {
      return response || "OK";
    })
    .catch((e) => {
      console.log(e);
    });
};
/**
 * @param  {string} url - URL to query
 * @param  {Object}} - headers can be specified or else default will be set
 */
const fetchGet = (url, headers = { "Content-Type": "application/json" }) => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

module.exports = {
  fetchGet,
  fetchPost,
  fetchPut,
};
