import {GETDATA} from './type';
import {getGitHub} from '../../api/mockApi';
export const getGitHubAction=(props)=>({type:GETDATA,props});
export const getGitHubAsnycPromise=()=>dispatch=>getGitHub();