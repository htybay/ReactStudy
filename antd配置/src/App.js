import React, { Component } from 'react';
 //Route路由控件  Switch  Redirect路由优先级
import {Route ,Switch,Redirect} from 'react-router-dom'
import { adminRoutes } from './routes'
import {Frame} from './components'

  /**
 * 
 * 
 * 配置装饰器模式 步骤 1 进入npm网站  customize-cra  添config-overrids加addDecoratorsLegacy() 接口
 * 2安装  npm i @babel/plugin-proposal-decorators
 * 添加react-router-dom
 * 
 */
// const Hocc =(AppComponent)=>{
//   return class wrappendComponent extends Component{
//     render(){
//       return(
//         <>
//         <AppComponent/>
//         <span>
//           这是高阶组件
//         </span>
//         </>
//       )
//     }
//   }
// }


class App extends Component {
render(){
  return (
    <Frame>
<Switch>
    {
      adminRoutes.map(route=>{
        return(<Route key={route.pathname} path={route.pathname}render={(routerProps)=>{
          return(<route.component {...routerProps} />)
        }
     
        }/>)
      })
    }
   
    <Redirect to={adminRoutes[0].pathname} from='/admin' exact/>
    <Redirect to='/404' from='/admin' />
   </Switch>
    </Frame>
   
      );
}

}

export default App;
