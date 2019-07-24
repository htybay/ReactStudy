import React, { Component } from 'react';
import BlogItem from './BlogItem'
import {connect} from 'react-redux'
import { fetchBlogList } from '../../action/blog'
class BlogList extends Component {

componentDidMount(){
   this.props.fetchBlogList()
}
    render() { 
        const {
            list,
             isloading
        }=this.props
        console.log(this.props)
        return (<ul>
            {
               isloading ?  <div>isLoading</div>:
               list.map(item=>{
                    return(
                        <BlogItem key={item.id}{ ...item }/>
                    )
                })
            }
       
        </ul>  );
    }
}
 const mapState = (state)=>({
     list: state.blog.list,
     isloading:state.blog.isLoading
    
 })
export default connect(mapState, { fetchBlogList})(BlogList);



