import { findDOMNode } from 'react-dom';
import videojs from 'video.js';

class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.state = { player: {} };
  }

  componentDidMount() {
    let player = findDOMNode(this.refs.player);
    let options = {
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
    };
    this.state.player = videojs(player, options);
  }

  render() {
    return (
      <video className="video-js vjs-skin-articulate" ref="player">
        {this.props.children}
      </video>
    );
  }
}

export default VideoPlayer;
