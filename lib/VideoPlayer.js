import vjs from 'video.js/dist/alt/video.novtt';
import './VideoPlayer.scss';

class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.state = {};
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
  }

  static propTypes = {
    aspectRatio: React.PropTypes.number,
    fullWidthAt: React.PropTypes.number,
    options: React.PropTypes.shape({
      bigPlayButton: React.PropTypes.bool,
      preload: React.PropTypes.string,
      controls: React.PropTypes.bool,
      controlBar: React.PropTypes.object
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.setDimensions.bind(this));
    this.player = vjs(this.video, this.props.options);
    this.setDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setDimensions);
  }

  getBoundingRect() {
    return this.container.parentNode.getBoundingClientRect();
  }

  render() {
    return (
      <div className="videoContainer" style={this.state.dimensions} ref={(node) => { this.container = node; }}>
        <video className="video-js vjs-default-skin" ref={(node) => { this.video = node; }} crossOrigin='anonymous'>
          {this.props.children}
        </video>
      </div>
    );
  }

  setDimensions() {
    const dimensions = this.getBoundingRect();
    const aspectRatio = this.props.aspectRatio;
    let width, height;
    if ((dimensions.width * aspectRatio <= dimensions.height) ||
      (this.props.fullWidthAt && window.innerWidth < this.props.fullWidthAt)
    ) {
      width = dimensions.width;
      height = dimensions.width * aspectRatio;
    } else {
      height = dimensions.height;
      width = dimensions.height * (1 / aspectRatio);
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

export default VideoPlayer;
