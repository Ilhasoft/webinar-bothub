import axios from 'axios'

export default {
  get $http() {
    return axios.create({
      baseURL: 'http://127.0.0.1:2657',
      crossdomain: true, 
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer 8092e752-8c59-444d-ad3f-92900aa21b74'
      },
    });
  },
};