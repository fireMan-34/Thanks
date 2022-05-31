import { GETDATA } from './type';
import { getGitHub } from '../../api/mockApi';
import { isCheckRulesForString, mapKey } from '../../util';
const rules = [
    /_count/, /_url/
];
const curryIsCheckRulesForString = (str) => isCheckRulesForString(rules, str);
export const getGitHubAction = (props) => ({ type: GETDATA, props });
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