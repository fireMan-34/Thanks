import axios from 'axios';
const myAxios = axios.create(
    {
        auth: null,
        headers: {
        }
    }
);
myAxios.interceptors.response.use(
    res=>res.data
);
export {myAxios};