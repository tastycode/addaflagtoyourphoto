/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import FacebookLogin from 'react-facebook-login';

import styles from './LoginPage.css';
import Location from '../../core/Location';
// import withStyles from '../../decorators/withStyles';

class LoginPage extends Component {

  responseFacebook = async () => {
    var fbPromise = new Promise(function(resolve, reject) {
      FB.api('/me/picture?width=500', resolve);
    });
    const response = await fbPromise;
    window.localStorage['flagImage'] = response.data.url;
    Location.pushState({}, '/#/choose');
  };

  render() {
    const title = 'Log In';
    return (
      <div className="centeredContainer">
          <h1>Show your true colors</h1>
          <p className="subtitle">Add a flag to your facebook profile photo</p>

          <FacebookLogin
            className="button button--cta"
            appId="452839681582929"
            autoLoad={true}
            callback={this.responseFacebook}/>
      </div>
    );
  }

}

export default LoginPage;
