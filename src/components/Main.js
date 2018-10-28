require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Signin from './signin';
import Signup from './signup';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

class AppComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/signin' component={Signin}></Route>
          <Route path='(/|/signup)' component={Signup}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
