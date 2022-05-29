import {myAxios} from '../util';
const getGitHub = () => myAxios.get(
    'https://api.github.com/search/repositories?q=react', { auth: null }
)
export {
    getGitHub
}