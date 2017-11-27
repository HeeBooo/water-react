import React, { Component } from 'react';
import Head from './components/head/head';
import Main from './components/menu/menu';

import headIcon from './images/head.png';

import menuIcon1 from './images/menu1.png';
import menuIcon2 from './images/menu2.png';
import menuIcon3 from './images/menu3.png';
import menuIcon4 from './images/menu4.png';
import menuIcon5 from './images/menu5.png';
import menuIcon6 from './images/menu6.png';
import menuIcon7 from './images/menu7.png';
import menuIcon8 from './images/menu8.png';
import menuIcon9 from './images/menu9.png';
import menuIcon10 from './images/menu10.png';

// 顶部信息
const headInfo = {
  headIcon: headIcon,
  user: 'admin',
};

const menu = [
  {
    name: '概览',
    img: menuIcon1,
    sec: [],
  },
  {
    name: '智能路径',
    img: menuIcon2,
    sec: [],
  },
  {
    name: '基础信息',
    img: menuIcon3,
    sec: [
      {
        name: '组织机构管理',
        url: '/organ'
      },
      {
        name: '角色管理',
        url: '/role'
      },
      {
        name: '人员管理',
        url: '/person'
      },
      {
        name: '账号管理',
        url: '/account'
      },
      {
        name: '资质管理',
        url: '/qualify'
      }
    ]
  },
  {
    name: '资源管理',
    img: menuIcon4,
    sec: [],
  },
  {
    name: '调度管理',
    img: menuIcon5,
    sec: [],
  },
  {
    name: '审批管理',
    img: menuIcon6,
    sec: [],
  },
  {
    name: '工单管理',
    img: menuIcon7,
    sec: [],
  },
  {
    name: '统计报表',
    img: menuIcon8,
    sec: [],
  },
  {
    name: '知识库',
    img: menuIcon9,
    sec: [],
  },
  {
    name: '个人中心',
    img: menuIcon10,
    sec: [],
  }
];


class App extends Component {
  render() {
    return (
      <div>
        <Head headInfo={headInfo}></Head>
        <Main menu={menu}></Main>
      </div>
    );
  }
}

export default App;
