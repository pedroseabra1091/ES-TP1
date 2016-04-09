import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import Layout from './Layout.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';


const app = document.getElementById('app');
ReactDOM.render(
	<Router history={browserHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Login} />
				<Route path="login" component={Login}/>
				<Route path="register" component={Register}/>
			</Route>
	</Router>
,app);
