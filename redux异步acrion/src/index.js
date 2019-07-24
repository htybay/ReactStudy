import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//react-redux 第三步
import { Provider } from 'react-redux'
import Store from './store'
ReactDOM.render(
    <Provider store={Store}>

        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//1.创建reducers
//2.合并reducers
//3.createStore
//4.Provider store={store}
//5.connect(mapStatrToProps)(youComponent)
//6.actionCreate
//7.修改reducers
/**
 * 同步
 */
//actionCreator => 自动dispatch（action）=>reducer =>store =view
/**
 * 异步
 */
//actionCreator=>middleware处理新的action =>手动dispatch(action)=>reducer =>store =view