import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, hashHistory } from 'react-router'

import Header from './Header.jsx';
//import Register from './Register.jsx';
import Footer from './Footer.jsx';
import LoginForm from './LoginForm.jsx';

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