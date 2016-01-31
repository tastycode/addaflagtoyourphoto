import React, { PropTypes, Component } from 'react';
import FlagList from '../FlagList';

class ChoosePage extends Component {

  render() {
    return (<div className="ChoosePage">
              <h2 className="instruction">Type in your country name</h2>
              <FlagList/>
              <p className="instruction-small">Click on your flag to continue</p>
            </div>);
  }

}

export default ChoosePage;
