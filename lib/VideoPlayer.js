const {Component, PropTypes} = require('react');
const vjs = require('video.js/dist/alt/video.novtt');

class VideoPlayer extends Component {
  constructor() {
    super();
    this.state = {};
    this.setDimensions = this.setDimensions.bind(this);
  }

  static defaultProps = {
    aspectRatio: (9 / 16),
    fullWidthAt: 0,
    options: {
      preload: 'auto',
      controls: true,
      controlBar: {
        remainingTimeDisplay: true,
        volumeMenuButton: {
          inline: false
        }
      }
    }
  };

  static propTypes = {
    aspectRatio: PropTypes.number,
    fullWidthAt: PropTypes.number,
    options: PropTypes.shape({
      bigPlayButton: PropTypes.bool,
      preload: PropTypes.string,
      controls: PropTypes.bool,
      controlBar: PropTypes.object
    })
  };

  componentDidMount() {
    window.addEventListener('resize', this.setDimensions);
    let player = this.player = vjs(this.video, this.props.options);
    player.on('ended', () => {
      player.posterImage.show();
      player.bigPlayButton.show();
      player.currentTime(0);
    });
    this.setDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setDimensions);
  }

  getBoundingRect() {
    return this.container.parentNode.getBoundingClientRect();
  }

  getParentPadding() {
    let computedStyle = window.getComputedStyle(this.container.parentNode, null);
    const getProperty = (cs, value) => parseInt(cs.getPropertyValue(value), 10) || 0;
    return {
      top: getProperty(computedStyle, 'padding-top'),
      bottom: getProperty(computedStyle, 'padding-bottom')
    };
  }

  render() {
    return (
      <div className="videoContainer" style={this.state.dimensions} ref={(node) => { this.container = node; }}>
        <video className="video-js vjs-default-skin" ref={(node) => { this.video = node; }}>
          {this.props.children}
        </video>
      </div>
    );
  }

  setDimensions() {
    let {width: parentWidth, height: parentHeight} = this.getBoundingRect();
    const padding = this.getParentPadding();
    parentHeight = parentHeight - padding.top - padding.bottom;
    const aspectRatio = this.props.aspectRatio;
    let width, height;
    if ((parentWidth * aspectRatio <= parentHeight) ||
      (this.props.fullWidthAt && window.innerWidth < this.props.fullWidthAt)
    ) {
      width = parentWidth;
      height = parentWidth * aspectRatio;
    } else {
      height = parentHeight;
      width = parentHeight * (1 / aspectRatio);
    }
    this.setState({ dimensions: { width, height } });
  }

  snapshot() {
    var canvas = document.createElement('canvas'),
        ctx    = canvas.getContext('2d'),
        height = this.player.videoHeight(),
        width  = this.player.videoWidth();

    canvas.width  = width;
    canvas.height = height;
    ctx.drawImage(this.video, 0, 0, width, height);
    return canvas.toDataURL('image/png');
  }
}

module.exports = VideoPlayer;
