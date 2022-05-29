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


const ApiShowItem = ({ name, stargazers_count, forks_count }) => {
    return <li>
        {currySimpeSpan(name)}-收藏-{currySimpeSpan(stargazers_count)}-分支-{currySimpeSpan(forks_count)}
    </li>
}



function ApiShow({ apiItems, dispatch }) {
    const { lessPage, morePage, data } = useMoreAndLessArrayMap(apiItems, 3);
    useEffect(() => {
        getGitHubAsnycPromise()(dispatch).then(
            res => {
                const { items } = res;
                const result = items.map(
                    item => ({
                        id: item.id, name: item.name,
                        ...mapKey(item, key => curryIsCheckRulesForString(key))
                    }),
                )
                dispatch(getGitHubAction(result));
            }
        )
    }, []);
    return (
        <div>
            渲染内容
            <button onClick={lessPage}>Less</button>
            <button onClick={morePage}>More</button>
            <ul>
                {data?.map((props => <ApiShowItem key={props?.id} {...props} />))}
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