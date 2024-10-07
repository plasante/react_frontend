import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const fetchGetData = (uri) => {
  const url = `${BASE_URL}${uri}`;
  return axios.get(url).catch((error) => {
    console.log('Error fetching data for URL: ', url, 'Error', error);
    throw error;
  });
};

const fetchPostData = (uri, payload) => {
  const url = `${BASE_URL}${uri}`;
  return axios.post(url, payload).catch((error) => {
    console.log('Error posting data to URL: ', url, 'Error', error);
    throw error;
  });
};

export default fetchGetData;
export { fetchPostData };
