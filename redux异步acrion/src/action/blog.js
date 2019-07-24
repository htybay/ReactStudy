import actionType from './actionType'
import { getPosts } from '../services'
const startFetchBlogList =()=>{
    return {
        type:actionType.START_FETCH_BLOG_LIST
    }
}

const startFetchBlogSucces =(payload)=>{
    return {
        type:actionType.FETCH_BLOG_LIST_SUCC,
        payload
    }
}
const startFetchBlogError =()=>{
    return {
        type:actionType.FETCH_BLOG_LIST_ERROR
    }
}
export const fetchBlogList=()=>dispatch =>{
    dispatch(startFetchBlogList())
    getPosts().then(resp=>{
        console.log(resp)
        dispatch(startFetchBlogSucces({
            list:resp.data
        }))
    }).catch(
        error=>{
            console.log(error)
            dispatch(startFetchBlogError())
        }
    )
}