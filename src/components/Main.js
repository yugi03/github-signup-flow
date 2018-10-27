require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Signin from './signin';


class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Signin />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
