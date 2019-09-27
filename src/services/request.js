import axios from 'axios'

export default {
  get $http() {
    return axios.create({
      baseURL: 'https://nlp.bothub.it/',
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Token 1bdc624b-873c-42c5-bc0f-bc450941c0cd'
      },
    });
  },
};