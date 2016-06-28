class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.state = {video: {}};
  }

  componentDidMount() {
    console.log('componentDidMount... ed');

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

    let video = videojs(this.refs.player, options);

    this.setState({ video });
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
