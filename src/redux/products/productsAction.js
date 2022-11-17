import axios from 'axios';
const BASE_URL = 'https://fakestoreapi.com';

const requestFetch = () => {
  return { type: 'REQUEST_FETCH_LOADING' };
};

const requestSuccess = (data) => {
  return { type: 'REQUEST_FETCH_SUCCESS', payload: data };
};

const requestFailed = (message) => {
  return { type: 'REQUEST_FETCH_FAILED', payload: message };
};

const getDataFromApi = (dispatch, id = null) => {
  const url = id ? `${BASE_URL}/products/${id}` : `${BASE_URL}/products/`;
  dispatch(requestFetch());
  axios
    .get(url)
    .then((response) => {
      dispatch(requestSuccess(response.data));
    })
    .catch((error) => {
      dispatch(requestFailed(error.message));
    });
};

export { requestFetch, requestFailed, requestSuccess, getDataFromApi };
