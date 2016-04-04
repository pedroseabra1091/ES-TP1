import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.jsx';
import Body from './body.jsx';

class Mainclass extends React.Component {
  render(){
    return(
      <div>
        <Header/>
        <Body/>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Mainclass/>,app);
