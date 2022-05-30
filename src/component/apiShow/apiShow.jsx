import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {ApiShowItem} from './apiShowItem';
import { GitHubApiItem } from './githubApiItem';
import useMoreAndLessArrayMap from '../../hook/useMoreAndLessArrayMap';
import { getGitHubAction, getGitHubAsnyc } from '../../store/api';
import { mapKey, isCheckRulesForString } from '../../util';

const rules = [
    /_count/, /_url/
];
const curryIsCheckRulesForString = (str) => isCheckRulesForString(rules, str);

function ApiShow({ apiItems, dispatch }) {
    const { lessPage, morePage, data } = useMoreAndLessArrayMap(apiItems, 3);
    useEffect(() => {
        const fetchData = async () => {
            const { items } = await getGitHubAsnyc()(dispatch);
            const result = items.map(
                item => ({
                    id: item.id, name: item.name,
                    ...mapKey(item, key => curryIsCheckRulesForString(key))
                }),
            )
            dispatch(getGitHubAction(result));
        };
        fetchData();
        return () => { }
    }, [dispatch]);
    return (
        <div>
            渲染内容
            <button onClick={lessPage}>Less</button>
            <button onClick={morePage}>More</button>
            <ul>
                {data?.map(((props, i) => <ApiShowItem key={props?.id} {...props} index={i} />))}
                {data?.map((props, i) => <GitHubApiItem key={"githubApi"+props.id} name={props.name}
                    stars={props.stars||null} forks={props.forks_count}
                />)}
            </ul>
        </div>
    )
}
function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        apiItems: state.apiItems,
    }
}
export default connect(mapStateToProps)(ApiShow);