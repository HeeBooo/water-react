import React, { Component } from 'react';
import './head.scss';

class Head extends Component {
    render() {
        const { headIcon, user } = this.props.headInfo;
        return (
            <div className="head">
                <span>人工智能综合运营管理平台</span>
                <div>
                    <img src={headIcon} alt="" />
                    <span>欢迎您, </span>
                    <span>{user} !</span>
                    <span className="ge">|</span>
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