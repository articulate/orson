import { findDOMNode } from 'react';

class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let { ref } = this.props;
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
    this.state.video = videojs(findDOMNode(ref), options);
  }

  render() {
    let { ref } = this.props;
    return (
      <video className="video-js vjs-skin-articulate" ref={ref}>
        {this.props.children}
      </video>
    );
  }
}

export default VideoPlayer;
