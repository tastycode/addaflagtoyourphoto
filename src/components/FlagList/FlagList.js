import React, { Component } from 'react';
import Flag from '../Flag';
import styles from './FlagList.css';
import flags from '../../flags.json';
import withStyles from '../../decorators/withStyles';
@withStyles(styles)
class FlagList extends Component {
  constructor() {
    super();
    this.state = {
      filterValue: null
    };
  }
  _filterChanged(e) {
    this.setState({filterValue: e.target.value});
  }
  filteredFlags() {
    let codeToFlag = (code) => {
      return {
        code: code,
        name: flags[code]
      };
    }
    if (!this.state.filterValue) {
      return Object.keys(flags).slice(0, 5).map(codeToFlag);
    }
    return Object.keys(flags).filter((code) => {
      const name = flags[code];
      return (new RegExp(this.state.filterValue, 'i')).test(name);
    }).slice(0,5).map(codeToFlag);
  }
  render () {
    return (
      <div>
        <input className="flagInput" value={this.state.filterValue} onChange={this._filterChanged.bind(this)}/>
        <ul className="flagList">
          {this.filteredFlags().map((flag) => {
            return (
              <li>
                <Flag flag={flag} code={flag.code}/>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default FlagList;
