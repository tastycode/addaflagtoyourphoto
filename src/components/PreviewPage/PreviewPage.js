
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import Flag from '../Flag';
import PreviewImage from '../PreviewImage';

class PreviewPage extends Component {
  sourceImageUrl() {
    if (typeof(window) !== 'undefined') {
      return window.localStorage.flagImage;
    }
  }

  render() {
    return (
      <div className="PreviewPage">
        <h2 className="instruction">Here is your new profile pic</h2>
        <PreviewImage className="flagPreview" profileSrc={this.sourceImageUrl()} flagSrc={Flag.imageForFlag(this.props.flag)}/>
      </div>
    );
  }

}

export default PreviewPage;
