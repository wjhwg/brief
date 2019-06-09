const defaultState = {
    isFouces: false
};
export default (state = defaultState, action) => {
    if(action.type === 'search_focus'){
        return {isFouces: true};
    }
    if(action.type === 'search_blur'){
        return {isFouces: false};
    }
    return state;
}