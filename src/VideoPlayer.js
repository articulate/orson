import vjs from 'video.js/dist/alt/video.novtt';
import './VideoPlayer.scss';

class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.state = {video: {}};
  }

  static defaultProps = {
    options: {
      bigPlayButton: false,
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
    options: React.PropTypes.shape({
      bigPlayButton: React.PropTypes.bool,
      bigPlayButton: React.PropTypes.bool,
      preload: React.PropTypes.string,
      controls: React.PropTypes.bool,
      controlBar: React.PropTypes.object
    })
  }

  componentDidMount() {
    let { options } = this.props;
    let video = vjs(this.video, options);
    this.setState({ video });
  }

  render() {
    return (
      <video className="video-js vjs-skin-articulate" ref={(node) => { this.video = node; }}>
        {this.props.children}
      </video>
    );
  }
}

export default VideoPlayer;
