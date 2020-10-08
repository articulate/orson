import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import vjs from 'video.js'

export default class VideoPlayer extends Component {
  constructor(...params) {
    super(...params);
    this.state = {};
    this.setDimensions = this.setDimensions.bind(this);
    this.shouldBeFullWidth = this.shouldBeFullWidth.bind(this);
    this.getParentDimensions = this.getParentDimensions.bind(this);
  }

  static get defaultProps() {
    return {
      aspectRatio: 9 / 16,
      fullWidth: false,
      fullWidthAt: 0,
      options: {
        preload: 'auto',
        controls: true,
        controlBar: {
          remainingTimeDisplay: true,
          volumePanel: {
            inline: false
          }
        }
      }
    }
  }

  static get propTypes() {
    return {
      aspectRatio: PropTypes.number,
      fullWidth: PropTypes.bool,
      fullWidthAt: PropTypes.number,
      options: PropTypes.shape({
        bigPlayButton: PropTypes.bool,
        preload: PropTypes.string,
        controls: PropTypes.bool,
        controlBar: PropTypes.object
      }),
      poster: PropTypes.string
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.setDimensions);

    this.player = vjs(this.video, this.props.options, function onPlayerReady() {
      this.on('ended', function onPlayerEnded() {
        this.posterImage.show();
        this.bigPlayButton.show();
        this.currentTime(0);
      });
    });

    this.setDimensions();
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }

    window.removeEventListener('resize', this.setDimensions);
  }

  getParentPadding() {
    let computedStyle = window.getComputedStyle(this.container.parentNode, null);
    const getProperty = (cs, value) => parseInt(cs.getPropertyValue(value), 10) || 0;
    return {
      top: getProperty(computedStyle, 'padding-top'),
      bottom: getProperty(computedStyle, 'padding-bottom')
    };
  }

  getParentDimensions() {
    const { width, height } = this.container.parentNode.getBoundingClientRect();
    const padding = this.getParentPadding();
    const parentHeight = height - padding.top - padding.bottom;
    return { parentHeight, parentWidth: width };
  }

  render() {
    return (
      <div className="videoContainer" style={this.state.dimensions} ref={node => { this.container = node; }}>
        <video crossOrigin="anonymous" className="video-js vjs-default-skin" ref={node => { this.video = node; }} poster={this.props.poster}>
          {this.props.children}
        </video>
      </div>
    );
  }

  shouldBeFullWidth() {
    const { aspectRatio, fullWidth, fullWidthAt } = this.props;
    const { parentWidth, parentHeight } = this.getParentDimensions();

    return (
      fullWidth ||
      (parentWidth * aspectRatio <= parentHeight) ||
      (fullWidthAt && window.innerWidth < fullWidthAt)
    );
  }

  setDimensions() {
    const { aspectRatio } = this.props;
    const { parentWidth, parentHeight } = this.getParentDimensions();
    const isFullWidth = this.shouldBeFullWidth();
    const width = isFullWidth ? parentWidth : parentHeight / aspectRatio;
    const height = isFullWidth ? parentWidth * aspectRatio : parentHeight;
    this.setState({ dimensions: { width, height } });
  }

  snapshot() {
    const canvas = document.createElement('canvas');
    const ctx    = canvas.getContext('2d');
    const height = this.player.videoHeight();
    const width  = this.player.videoWidth();

    canvas.width  = width;
    canvas.height = height;
    ctx.drawImage(this.video, 0, 0, width, height);
    return canvas.toDataURL('image/png');
  }
}
