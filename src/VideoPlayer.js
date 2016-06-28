class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.state = {video: {}};
  }

  componentDidMount() {
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

    let video = videojs(this.video, options);

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
