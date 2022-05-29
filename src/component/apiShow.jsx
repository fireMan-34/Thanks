import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import useMoreAndLessArrayMap from '../hook/useMoreAndLessArrayMap';
import {getGitHubAction, getGitHubAsnycPromise } from '../store/api';

const ApiShowItem = ({ name, stargazers_count, forks_count }) => {
    return <li>
        {name}-收藏{stargazers_count}-分支{forks_count}
    </li>
}
function ApiShow({apiItems,dispatch}) {
    const items = apiItems;
    const {lessPage,morePage,data}=useMoreAndLessArrayMap(apiItems,3);
    useEffect(()=>{
        getGitHubAsnycPromise()(dispatch).then(
            res=>{
                const {items}=res;
                dispatch(getGitHubAction(items));
            }
        )
    },[]);
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