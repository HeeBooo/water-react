import React, { Component } from 'react';
import './head.scss';
import headIcon from '../../images/head.png';


class Head extends Component {
    render () {
        return (
            <div className="head">
                <span>人工智能综合运营管理平台</span>
                <div>
                    <img src={headIcon} alt="" />
                    <span>欢迎您,admin | </span>
                    <a>个人中心</a>
                    <a className="icon information"> </a>
                    <a className="icon copyright"> </a>
                    <a className="icon exit"> </a>
                </div>
            </div>
        );
    }
}

export default Head;