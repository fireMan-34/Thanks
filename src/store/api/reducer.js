import { GETDATA } from './type';
const initState = [
    {
        id:"null",
        name: "null",
        stargazers_count: "null",
        forks_count: "null",
    }
]
export const apiReducer= (state = initState, action) => {
    switch (action.type) {
        case GETDATA:
            return action?.props?.length > 0 ? action.props : state;
        default: return state;
    }
}