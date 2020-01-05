import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import silderEach from '../utils/silderEach';
import {LayoutRoutes} from '../router'
import {withRouter} from 'react-router-dom';
import {Logo} from './style'
const { Header, Content, Footer, Sider } = Layout;

@withRouter

 class Wrapper extends Component {
    render() {
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <Logo className="logo" />
                    <Menu 
                        theme="dark" 
                        mode="inline" 
                        defaultSelectedKeys={['/home']}
                        onClick={this.handleToggle.bind(this)}
                    >
                        {silderEach(LayoutRoutes)}
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    {/* 头部 */}
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>

                    {/* 内容区 */}
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                            {this.props.children}
                        </div>
                    </Content>


                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
    handleToggle({key}){
        this.props.history.push(key)
    }
}

export default Wrapper;
