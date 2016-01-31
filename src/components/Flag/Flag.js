import React, { Component } from 'react';
import Location from '../../core/Location';

class Flag extends Component {
  _flag_clicked() {
    Location.pushState({}, `/#/preview/${this.props.flag.code}/${this.props.flag.name}`);
  }

  static imageForFlag(flag) {
    const code = flag.code;
    return require('../../flag-icon/svg/country-4x3/' + code.toLowerCase() + '.svg');
  };
  render () {
    return (
      <div className="flag" onClick={this._flag_clicked.bind(this)}>
        <img className="flag-img" src={this.constructor.imageForFlag(this.props.flag)}/>
        <p className="flag-caption">{this.props.flag.name}</p>
      </div>
    );
  }
}

export default Flag;
