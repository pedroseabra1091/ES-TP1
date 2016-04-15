import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import Layout from './Layout.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';
import DashboardClient from './DashboardClient.jsx';
import DashboardOwner from './DashboardOwner.jsx';


const app = document.getElementById('app');
ReactDOM.render(
	<Router history={browserHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Login} />
				<Route path="login" component={Login}/>
				<Route path="register" component={Register}/>
				<Route path="dashboardClient/:userType/:id" component={DashboardClient}/>
				<Route path="dashboardOwner/:userType/:id" component={DashboardOwner}/>
			</Route>
	</Router>
,app);
