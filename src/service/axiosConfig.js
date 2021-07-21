import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

const baseURL = 'https://api.tvmaze.com'

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },

});

export default axiosInstance;