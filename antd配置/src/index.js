import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {mainRouter} from './routes'

ReactDOM.render(

 <Router>
    <Switch>
        <Route  path ="/admin"  render={(routerProps)=>{
            //TODO 需要登录才能访问admin
            return<App {...routerProps}/>
        }}>
     
        </Route>
        {
            mainRouter.map(route=>{
                return(<Route key={route.pathname} path={route.pathname} component={route.component}/>)
            })
        }
        <Redirect to="/admin" from = "/"  exact/>
        <Redirect to="/404" />
    </Switch>
</Router> 
//<App />
, 
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
