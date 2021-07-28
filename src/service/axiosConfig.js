import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios,axios)


Vue.prototype.$ajax = axios

const baseURL = 'https://api.tvmaze.com'

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },

});

export default axiosInstance;