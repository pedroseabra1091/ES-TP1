import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import Header from './Header.jsx';
import Register from './Register.jsx';
import Footer from './Footer.jsx';
import Login from './Login.jsx';

var MainClass = React.createClass ({ 
  render: function(){
    return(
      <div>
        <Header/>
        <Login/>
       	<Footer/>
      </div>
    );
  }
});

const app = document.getElementById('app');
ReactDOM.render(
	<Router>
		<Route path="/" component={Header}>
			<Route path = "login" component={Login}/>
			<Route path = "register" component={Register}/>
		</Route>
	</Router>
,app);