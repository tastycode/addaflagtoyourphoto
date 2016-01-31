/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { Component } from 'react';

import styles from './PreviewImage.css';
import download from 'downloadjs';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

function fit(contains = true){
    return function(containerWidth, containerHeight, width, height){
        let doRatio = width / height;
        let cRatio = containerWidth / containerHeight;
        let targetWidth = 0;
        let targetHeight = 0;
        let test = contains ? (doRatio > cRatio) : (doRatio < cRatio);

        if (test) {
            targetWidth = containerWidth;
            targetHeight = targetWidth / doRatio;
        } else {
            targetHeight = containerHeight;
            targetWidth = targetHeight * doRatio;
        }

        return {
            width: targetWidth,
            height: targetHeight,
            x: (containerWidth - targetWidth) / 2,
            y: (containerHeight - targetHeight) / 2
        };
    }
}

let cover = fit(false);

@withStyles(styles)
class PreviewImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    }
  }

  canvasContext() {
    return this.canvas().getContext('2d');
  }


  componentDidMount() {
    this.paint(this.canvasContext());
  }

  componentDidUpdate() {
    this.canvasContext().clearRect(0, 0, this.state.width, this.state.height);
    this.paint(this.canvasContext());
  }

  canvas() {
    return [...React.findDOMNode(this).children]
      .find(child => child.tagName === 'CANVAS');
  }

  _onDownloadClicked = () => {
    download(this.canvas().toDataURL());
  };

  paint = async (context) => {
    let profileImg = new Image();
    profileImg.src = this.props.profileSrc;
    profileImg.crossOrigin = 'Anonymous';
    let profileLoadPromise = new Promise((resolve, reject) => {
        profileImg.onload = resolve;
    });
    await profileLoadPromise;
    this.setState({
      width: profileImg.width,
      height: profileImg.height
    });
    context.drawImage(profileImg, 0, 0);
    let flagImg = new Image();
    flagImg.crossOrigin = 'Anonymous';
    flagImg.src = this.props.flagSrc;
    let {width, height, x, y} = cover(profileImg.width, profileImg.height, flagImg.width, flagImg.height);
    context.globalAlpha = 0.5;
    context.drawImage(flagImg, 0, 0, flagImg.width, flagImg.height, x, y, width, height);
    context.globalAlpha = 1.0;
  };

  render() {
    return (
      <div className="canvasContainer">
        <canvas className="canvas" width={this.state.width} style={this.canvasStyles()} height={this.state.height}></canvas>
        <a className="button" href="#" onClick={this._onDownloadClicked}>Download</a>
          <a className="chooseAgainLink" href="/#/choose" onClick={Link.handleClick}>Choose Again</a>
      </div>
    );
  }
  canvasStyles() {
    return {
        width: `${this.state.width}px`,
        height: `${this.state.height}px`
    };
  }

}


export default PreviewImage;
