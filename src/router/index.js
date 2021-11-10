import {
    LineChartOutlined,
    ProfileOutlined,
    SettingOutlined,
    HomeOutlined,
} from '@ant-design/icons';

import home from '../pages/home/index'
import report from '../pages/reportdata/index'
import ReportTable from '../pages/reportdata/table';
import reportChart from '../pages/reportdata/chart';
import basic from '../pages/basicdata/index.jsx'
import system from '../pages/system/index.jsx'

const routers = [
    {
        path: "/",
        component: home,
        exact: true,
        title: '首页',     //  导航名称
        meta: ['首页'],
        icon: HomeOutlined, 
        key:'0',
        children: []
    },
    {
        path: '/report',    //  一级路由path
        title: '报表数据',     //  导航名称
        meta: ['报表数据'],
        icon: LineChartOutlined,      //  所用icon
        key: "1",
        // 所用组件 
        component: report,
        children: [  //二级路由
            {
                path: '/report/table',  //二级路由path ，react将会渲染为/report/table
                title: '表格',
                meta: ['报表数据', '表格'],
                icon: '',
                key: '1-1',
                // component: () => import('../pages/reportdata/table') ,
                component: ReportTable,
                children: []
            },
            {
                path: '/report/chart',
                title: '图表',
                meta: ['报表数据', '图表'],
                icon: '',
                key: '1-2',
                // component: () => import('../pages/reportdata/chart'),
                component: reportChart,
                children: [],
            },
        ],
    },
    {
        path: '/basic',
        title: '基础数据',
        meta: ['基础数据'],
        icon: ProfileOutlined,
        key: '2',
        component: basic,
        children: []
    }, {
        path: '/system',
        title: '系统设置',
        meta: ['系统设置'],
        icon: SettingOutlined,
        key: '3',
        component: system,
        children: []
    }

]
export default routers;