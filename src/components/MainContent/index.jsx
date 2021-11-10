import React, { Component } from 'react'
//引入路由
import { Route, Switch } from 'react-router-dom'
import routers from '../../router';
export default class MainContent extends Component {
    componentDidMount() {
        // 1.接收到props中的history对象
        // const history = this.props.history;

        // console.log(this.props)
        // console.log(routers)
    }
    // writeBreadcrumb(props) {
    //     let pathname = props.location.pathname
    // }

    render() {
        return (
            <div>
                <Switch>
                    {
                        routers.map(function (item, index) {
                            if (item.children.length > 0) {
                                return (
                                    item.children.map(function (v, k) {
                                        return (
                                            <Route exact key={v.key} path={v.path} component={v.component} />
                                        );
                                    })
                                );
                            } else {
                                return (
                                    <Route exact key={item.key} path={item.path} component={item.component} />
                                )
                            }
                        })
                    }
                </Switch>
            </div>
        )
    }
}

