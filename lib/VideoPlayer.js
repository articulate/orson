import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import mergeDeepRight from 'ramda/src/mergeDeepRight'
import vjs from 'video.js'

const defaultProps = {
  options: {
    aspectRatio: '16:9',
    autoplay: false,
    controls: true,
    controlBar: {
      remainingTimeDisplay: true,
      volumePanel: {
        inline: false
      }
    },
    preload: 'auto',
  }
}

export default class VideoPlayer extends Component {
  static get defaultProps() {
    return defaultProps
  }

  static get propTypes() {
    return {
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
    const opts = mergeDeepRight(defaultProps.options, this.props.options)

    this.player = vjs(this.video, opts, function onPlayerReady() {
      this.on('ended', function onPlayerEnded() {
        this.posterImage.show()
        this.bigPlayButton.show()
        this.currentTime(0)
      })
    })
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }
  render() {
    const { children, poster } = this.props

    return (
      <div className="videoContainer" data-vjs-player>
        <video
          className="video-js vjs-default-skin"
          poster={poster}
          ref={c => { this.video = c }}
        >
          {children}
        </video>
      </div>
    )
  }

  snapshot() {
    const canvas = document.createElement('canvas')
    const ctx    = canvas.getContext('2d')
    const height = this.player.videoHeight()
    const width  = this.player.videoWidth()

    canvas.width  = width
    canvas.height = height
    ctx.drawImage(this.video, 0, 0, width, height)
    return canvas.toDataURL('image/png')
  }
}
