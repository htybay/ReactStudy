import React, { Component } from 'react';
import './App.css';
import {BlogList}  from './components' 


/**
 * ref 数据绑定
 * proptypes 校验传值
 */
class App extends Component {

  render(){
    return(<>
    <BlogList/>
    </>)
  }
}
export default App;
