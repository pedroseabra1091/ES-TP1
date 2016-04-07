import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';


import Layout from './Layout.jsx';
import Register from './Register.jsx';
=======
//import { Router, Route, hashHistory } from 'react-router'

import Header from './Header.jsx';
//import Register from './Register.jsx';
>>>>>>> Login
import Footer from './Footer.jsx';
import LoginForm from './LoginForm.jsx';

<<<<<<< HEAD

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={browserHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Login} />
				<Route path="register" component={Register}/>
			</Route>
	</Router>
,app);
=======
var MainClass = React.createClass ({ 
  render: function(){
    return(
      <div>
        <Header/>
        <LoginForm />
       	<Footer/>
      </div>
    );
  }
});

const app = document.getElementById('app');
ReactDOM.render(<MainClass/>,app);
>>>>>>> Login
