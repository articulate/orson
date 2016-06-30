import vjs from 'video.js/dist/alt/video.novtt';
import './VideoPlayer.scss';

class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static defaultProps = {
    aspectRatio: (9 / 16),
    options: {
      preload: 'auto',
      controls: true,
      controlBar: {
        fullscreenToggle: false,
        remainingTimeDisplay: true,
        volumeMenuButton: {
          inline: false
        }
      }
    }
  }

  static propTypes = {
    aspectRatio: React.PropTypes.number,
    options: React.PropTypes.shape({
      bigPlayButton: React.PropTypes.bool,
      preload: React.PropTypes.string,
      controls: React.PropTypes.bool,
      controlBar: React.PropTypes.object
    })
  }

  componentDidMount() {
    let video = vjs(this.video, this.props.options);
    this.setDimensions();
    this.setState({ video });
  }

  setDimensions() {
    let width = this.video.clientWidth;
    let height = (this.props.aspectRatio * width);
    this.setState({ dimensions: { width, height } });
  }

  render() {
    return (
      <div className="videoContainer" style={this.state.dimensions}>
        <video className="video-js" ref={(node) => { this.video = node; }}>
          {this.props.children}
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
