class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let video = this.refs.video;
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
    this.state.video = videojs(video, options);
  }

  render() {
    return (
      <video className="video-js vjs-skin-articulate" ref="video">
        {this.props.children}
      </video>
    );
  }
}

export default VideoPlayer;
