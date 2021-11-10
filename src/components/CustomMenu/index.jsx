import React from 'react'
import { Menu } from 'antd';
import routers from '../../router';
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;

// class CustomMenu extends Component {
   
const CustomMenu = ({selectedKeys})=>{
    // render() {
        return (
            <Menu theme="dark" mode="inline" selectedKeys={selectedKeys} >
                {
                    routers.map(function (item, index) {
                        if (item.children.length > 0) {
                            return (
                                <SubMenu key={item.key} title={item.title} icon={<item.icon />}>
                                    {
                                        item.children.map(function (v, k) {
                                            return (
                                                <Menu.Item key={v.key}><Link to={v.path}>{v.title}</Link></Menu.Item>
                                            );
                                        })
                                    }
                                </SubMenu>
                            );
                        } else {
                            return (
                                <Menu.Item key={item.key} icon={<item.icon />} ><Link to={item.path}>{item.title}</Link></Menu.Item>
                            )
                        }
                    }
                    )
                }
            </Menu>
        )
    // }
}

export default CustomMenu