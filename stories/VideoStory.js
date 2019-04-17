import React from 'react'
import VideoPlayer from '../lib/VideoPlayer'

const containerStyle = {
  margin: '40px auto',
  padding: '20px',
  position: 'relative',
  width: '80%'
}

const VideoStory = ({
  options,
  poster='https://vjs.zencdn.net/v/oceans.png'
}) => (
  <div style={containerStyle}>
    <VideoPlayer options={options} poster={poster}>
      <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
      <source src="https://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
      <source src="https://vjs.zencdn.net/v/oceans.ogv" type="video/ogg" />
    </VideoPlayer>
  </div>
)

export default VideoStory
