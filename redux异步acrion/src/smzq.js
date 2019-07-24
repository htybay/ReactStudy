import React, { Component } from 'react';
import axios from 'axios';
/**
 * 生命周期
 * 
 */
class SmzqItem extends Component {
    //1. 初始化 init
    constructor(props) {
        super(props);
        this.state = {  }
        console.log('constructor')
    }
    //挂在之前
    componentWillMount(){
        console.log('componentWillMount')
    }
    //组件挂载
    componentDidMount(){
        console.log('componentDidMount')
        axios.post('https://juejin.im').then((res)=>{
            console.log('axios 数据获取成功'+JSON.stringify(res))
        }).catch((error)=>{
            console.log('axios 数据获取成功'+error)
        })
    }
    //渲染
    render() { 
        console.log('render')
        return (  <div>
            Csstransition
            生命周期
        </div>);
    }
componentWillReceiveProps(){
    console.log('shouldComponentUpdate')  
}
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
        //返回fasle 就不渲染
        if(nextProps.content !==this.props.content){
            return true
        }else{
            return false
        }
     
    }
    componentWillUpdate(){
        console.log('componentWillUpdate') 
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')   
    }
}
 
export default SmzqItem;