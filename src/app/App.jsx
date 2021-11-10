// import logo from './logo.svg';

import React from 'react';
import './App.less';
import { Layout, Breadcrumb, Menu, Dropdown, message } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    LockOutlined,
    ImportOutlined
} from '@ant-design/icons';
import routers from '../router';
// Menu 组件
import CustomMenu from '../components/CustomMenu';
// content 组件
import MainContent from '../components/MainContent';


// import { BrowserRouter } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const { Header, Sider, Content, Footer } = Layout;


class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            collapsed: false,
            cHeight: document.documentElement.clientHeight,
            BreadArray: [],
            selectedKeys: '',
            showHome: false
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    matchBreadcrumb(pathname) {
        if (pathname === '/') {
            this.setState({
                showHome: false
            })
        } else {
            this.setState({
                showHome: true
            })
        }
        routers.map((item) => {
            if (item.children.length > 0) {
                item.children.map(v => {
                    if (v.path === pathname) {
                        this.setState({
                            BreadArray: v.meta,
                            selectedKeys: v.key,
                        })
                    }
                })
            } else {
                if (item.path === pathname) {
                    this.setState({
                        BreadArray: item.meta,
                        selectedKeys: item.key,
                    })
                }
            }
        })
    }

    componentDidMount() {
        this.matchBreadcrumb(this.props.location.pathname)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        // 判断跳转路由不等于当前路由
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.matchBreadcrumb(nextProps.location.pathname)
        }
    }


    render() {
        const onClick = ({ key }) => {
            message.info(`Click on item ${key}`);
        };

        const menu = (
            <Menu onClick={onClick}>
                <Menu.Item key="1" icon={<LockOutlined />}>修改密码</Menu.Item>
                <Menu.Item key="2" icon={<ImportOutlined />}>退出登录</Menu.Item>
            </Menu>
        );
        return (
            <div>
                {/* <BrowserRouter> */}
                {/* this.state.cHeight */}
                <Layout style={{ height: '100vh' }}>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <CustomMenu selectedKeys={this.state.selectedKeys} />
                    </Sider>
                    <Layout className="site-layout" >
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            <div className="site-flex">
                                <div>
                                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                        className: 'trigger',
                                        onClick: this.toggle,
                                    })}
                                </div>
                                <div style={{ margin: '0 16px' }}>
                                    <Dropdown overlay={menu}>
                                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <UserOutlined style={{ fontSize: '16px' }} />
                                            <span style={{ fontSize: '16px', marginLeft: '10px' }}>Wendy</span>
                                        </a>
                                    </Dropdown>
                                </div>
                            </div>
                        </Header>
                        <div className='breadstyle' style={{ display: this.state.showHome ? 'block' : 'none' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                {
                                    this.state.BreadArray.map((item, index) => {
                                        return (
                                            <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                                        )
                                    })
                                }
                            </Breadcrumb>

                        </div>
                        <Content style={{ backgroundColor: '#fff',margin:'20px' }}>
                            <MainContent />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Study React ©2021 Created by Wendy</Footer>
                    </Layout>
                </Layout>
                {/* </BrowserRouter> */}
            </div>
        );
    }
}

// ReactDOM.render(<SiderDemo />, mountNode);
export default withRouter(App);

