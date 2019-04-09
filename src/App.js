import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from './pages/login/index';
import Admin from './pages/admin/index';
import './assets/less/reset.less';

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Admin}/>
            </Switch>
        )
    }
}
