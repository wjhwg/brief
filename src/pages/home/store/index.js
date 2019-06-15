import { fromJS} from 'immutable'
const defaultState = fromJS({
    topNavList: [
        {
            id: 1,
            name: '百度',
            imguRL: 'http://www.baidu.com'
        },
        {
            id: 2,
            name: '搜狗',
            imguRL: 'http://www.sougou.com'
        }
    ]
});
export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}