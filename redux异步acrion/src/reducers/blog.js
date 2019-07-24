import actionType from '../action/actionType'

const initState={ list:[{id:1,title:'哔哩哔哩',body:'哔哩哔哩动画~~~~'}], isLoading:true}
export default (state=initState,action)=>{
    switch(action.type){
        case actionType.START_FETCH_BLOG_LIST:
         return {
             ...state,
             isLoading:true
         }
         case actionType.FETCH_BLOG_LIST_SUCC:
            return {
                ...state,
                isLoading:false,
                list:action.payload.list
            }
            case actionType.FETCH_BLOG_LIST_ERROR:
                return {
                    ...state,
                    isLoading:false
                }
        default:
            return state
    }

}