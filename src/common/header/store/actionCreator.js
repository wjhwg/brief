import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});
export const mouseIn = () => ({
    type: constants.MOUSE_ENTER
});
export const mouseOut = () => ({
    type: constants.MOUSE_OUT
});
export const changePage = (data) => ({
    type: constants.CHANGE_PAGE,
    data
});
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})
export const getList = () => {
    return (dispatch) => {
        axios.get("/api/headerList.json").then((res) => {
            const data = res.data;
            const action = changeList(data.data);
            dispatch(action);
        }).catch(() => {

        })
    }
    
}