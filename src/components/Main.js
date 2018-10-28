require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Signin from './signin';
import Signup from './signup';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        {/* <Signin /> */}
        <Signup />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
