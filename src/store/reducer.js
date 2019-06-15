import { combineReducers } from 'redux';
import headerReducer from '../common/header/store/reducer';
import homeReducer from '../pages/home/store/index';
const reducer  =  combineReducers({
    header: headerReducer,
    home: homeReducer
});
export default reducer;