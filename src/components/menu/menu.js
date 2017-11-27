import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './menu.scss';

import Organ from '../organ/organ';
import Role from '../role/role';


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
    constructor(props) {
        super(props);
        this.state = {
            firstState: false
        }
    }

    firstMenuClick = () => {
        const firstState = this.state.firstState;
        if (firstState === false) {
            this.setState({
                firstState: true
            })
        } else {
            this.setState({
                firstState: false
            })
        }
    }

    render() {
        return (
            <Router>
                <div className="main">
                    <div className="menu">
                        <ul>
                            {
                                this.props.menu.map((item, index) => {
                                    return (
                                        <li key={index}
                                            ref={`fm${index}`}
                                            className={this.state.firstState === false ? null : 'active'}
                                            onClick={this.firstMenuClick}
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