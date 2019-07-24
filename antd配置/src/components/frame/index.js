import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
 import logo from './logo.png'
 import  './frame.less'
 import {adminRoutes} from '../../routes'
 import {withRouter} from 'react-router-dom'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

@withRouter
 class Frame extends Component {
   onclickItem = ({ item, key, keyPath, domEvent }) =>{
    console.log(key)
    this.props.history.push(key)
   }

    render() {
        return (
<Layout>
    <Header className="header react-header" >
      <div className="react-logo" >
        <img src={logo} alt="学习React"/>
        </div>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          onClick ={this.onclickItem}
        >
{

  adminRoutes.filter(route=>route.isNav===true).map((route)=>{
    return ( <Menu.Item key={route.pathname}>
      <Icon type={route.icon}/>
      {route.title}
      </Menu.Item>)
  })
 

}
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {this.props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
        )
    }


}
export default Frame