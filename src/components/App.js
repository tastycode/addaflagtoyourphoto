import React, { Component } from 'react';
import { Link }  from 'react-router';
import packageJSON from '../../package.json';
import LoginPage from './LoginPage';
import styles from './App.css';
import withStyles from '../decorators/withStyles';

@withStyles(styles)
export default class App extends Component {
  defaultComponent() {
    return (<LoginPage/>);
  }

  render() {
    const version = packageJSON.version;

    return (
      <div>
        <div className="container">
          {this.props.children || this.defaultComponent()}
        </div>
        <div className="attribution">by <a href="http://twitter.com/tastyc0de">@tastyc0de</a></div>
        <a href="https://github.com/you"><img style={this.githubImage()} src="https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png"/></a>
      </div>
    )
  }

  githubImage() {
      return {
          position: 'absolute',
          top: 0,
          right: 0,
          border: 0
      }
  }
};
