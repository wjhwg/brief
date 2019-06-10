import * as constants from './constants'
const defaultState = {
    isFouces: false
};
export default (state = defaultState, action) => {
    if(action.type === constants.SEARCH_FOCUS){
        return {isFouces: true};
    }
    if(action.type === constants.SEARCH_BLUR){
        return {isFouces: false};
    }
    return state;
}