import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import useMoreAndLessArrayMap from '../hook/useMoreAndLessArrayMap';
import { getGitHubAction, getGitHubAsnycPromise } from '../store/api';
import { mapKey, isCheckRulesForString } from '../util';

const rules = [
    /_count/, /_url/
];
const curryIsCheckRulesForString = (str) => isCheckRulesForString(rules, str);


const simpeSpan = (str, style) => <span style={style}>{str}</span>;
const style = { display: 'inline-block', textAlign: "center", width: '10em', height: "3em", lineHeight: "3em" };
const currySimpeSpan = (str) => simpeSpan(str, style);


const ApiShowItem = ({ name, stargazers_count, forks_count, index }) => {
    return <li>
        {index}
        {currySimpeSpan(name)}-收藏-{currySimpeSpan(stargazers_count)}-分支-{currySimpeSpan(forks_count)}
    </li>
}



function ApiShow({ apiItems, dispatch }) {
    const { lessPage, morePage, data } = useMoreAndLessArrayMap(apiItems, 3);
    useEffect(() => {
        const fetchData = async () => {
            const { items } = await getGitHubAsnycPromise()(dispatch);
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