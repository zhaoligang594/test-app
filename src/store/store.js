import {createStore} from './StoreUtils'

export default createStore({
    token:localStorage.getItem("user_token"),
    //我们的右侧的标题
    articleTitles:[]
})