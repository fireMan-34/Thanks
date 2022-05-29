// import data from './data.json';
// export const getGitHub=()=>{
//     return new Promise(
//         (resolve,reject)=>{
//             // resolve(data)
//         }
//     )
// }
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
)
const getGitHub = () => myAxios.get(
    'https://api.github.com/search/repositories?q=react', { auth: null }
)
export {
    getGitHub
}