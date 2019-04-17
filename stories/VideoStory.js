import React from 'react'
import VideoPlayer from '../lib/VideoPlayer'

const VideoStory = () => {
  const style = {
    margin: '40px auto',
    padding: '20px',
    position: 'relative',
    width: '80%'
  }
  const opts = {
    preload: 'none',
    controlBar: {
      remainingTimeDisplay: false
    }
  }
  return (
    <div style={style}>
      <VideoPlayer options={opts} poster="https://vjs.zencdn.net/v/oceans.png">
        <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
        <source src="https://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
        <source src="https://vjs.zencdn.net/v/oceans.ogv" type="video/ogg" />
      </VideoPlayer>
    </div>
  )
}

export default VideoStory
