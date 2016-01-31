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
      <div className="container">
        {this.props.children || this.defaultComponent()}
      </div>
    )
  }
};
