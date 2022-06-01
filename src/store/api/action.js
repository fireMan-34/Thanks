import { GETDATA,REQUEST_POST,RECIEVE_POST,INVALIDATE_POST } from './type';
import { getGitHub } from '../../api/mockApi';
import { isCheckRulesForString, mapKey } from '../../util';
const rules = [
    /_count/, /_url/
];
const curryIsCheckRulesForString = (str) => isCheckRulesForString(rules, str);
export const getGitHubAction = (props) => ({ type: GETDATA, props });
export const requestGitHubAction=props=>({type:REQUEST_POST,props});
export const recieveGithubAction=props=>({type:RECIEVE_POST,props});
export const invalidateGithubAction=props=>({type:INVALIDATE_POST,props});
export const getGitHubAsnyc = () => () => getGitHub();
export const getGitHubActionDispatch = async (dispatch,errorHandler) => {
    try {
        const { items } = await getGitHub();
        const result = items.map(
            item => ({
                id: item.id, name: item.name,
                ...mapKey(item, key => curryIsCheckRulesForString(key))
            }),
        )
        dispatch(getGitHubAction(result));
        return true
    } catch (error) {
        errorHandler(error)
    }
}
export const fetchGitHubSearchPost=(...args)=>{
    return (dispatch)=>{
        dispatch(recieveGithubAction());
        return getGitHub(...args).then(
            ({items})=>{
                dispatch(recieveGithubAction(items.map(
                    item=>({
                        id:item.id,
                        name:item.name,
                        ...mapKey(item,key=>curryIsCheckRulesForString(key))
                    })
                )));
            },error=>dispatch(invalidateGithubAction(error))
        )
    }
}