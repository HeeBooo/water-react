import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './menu.scss';

import Organ from '../organ/organ';
import Role from '../role/role';




import menuIcon1 from '../../images/menu1.png';
import menuIcon2 from '../../images/menu2.png';
import menuIcon3 from '../../images/menu3.png';
import menuIcon4 from '../../images/menu4.png';
import menuIcon5 from '../../images/menu5.png';
import menuIcon6 from '../../images/menu6.png';
import menuIcon7 from '../../images/menu7.png';
import menuIcon8 from '../../images/menu8.png';
import menuIcon9 from '../../images/menu9.png';
import menuIcon10 from '../../images/menu10.png';



const routes = [
    {
        path: '/organ',
        exact: true,
        component: Organ
    },
    {
        path: '/role',
        exact: true,
        component: Role
    }
]

class Main extends Component {
    constructor() {
        super();
        this.state = {
            firstState: false
        }
        this.firstMenu = [
            { name: '概览',
             img: menuIcon1, sec: []},
            { name: '智能路径',
             img: menuIcon2 },
            { name: '基础信息',
             img: menuIcon3, sec: ['组织机构管理', '角色管理', '人员管理', '账号管理', '资质管理']},
            { name: '资源管理',
             img: menuIcon4 },
            { name: '调度管理',
             img: menuIcon5 },
            { name: '审批管理',
             img: menuIcon6 },
            { name: '工单管理',
             img: menuIcon7 },
            { name: '统计报表',
             img: menuIcon8 },
            { name: '知识库',
             img: menuIcon9 },
            { name: '个人中心',
             img: menuIcon10 }
        ];
    }

    handleClick() {
        console.log(this)
    }
    render() {
        return (
            <Router>
                <div className="main">
                    <div className="menu">
                        <ul>
                            {
                                this.firstMenu.map((item, index) => {
                                        return (
                                            <li key={index}
                                                ref={`${index}`}
                                            >
                                                <a title={item.name}>
                                                    <img src={item.img} alt="" />
                                                </a>
                                            </li>
                                        )
                                })
                            }
                        </ul>
                    </div>

                    <div className="content">
                        {
                            routes.map((route, index) => {
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.component}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
            </Router>
        );
    }
}

export default Main;