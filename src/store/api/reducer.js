import { GETDATA } from './type';
const initState = [
    {
        id:"null",
        name: "null",
        stars: "null",
        forks: "null",
    }
]
export const apiReducer= (state = initState, action) => {
    switch (action.type) {
        case GETDATA:
            return action?.props?.length > 0 ? action.props: state;
        default: return state;
    }
}