import React from 'react'
import VideoPlayer from '../lib/VideoPlayer'

const VideoStory = props => {
  return (
    <VideoPlayer
      options={{ preload: 'none', controlBar: { remainingTimeDisplay: false } }}
      poster="https://vjs.zencdn.net/v/oceans.png"
      {...props}
    >
      <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
      <source src="https://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
      <source src="https://vjs.zencdn.net/v/oceans.ogv" type="video/ogg" />
    </VideoPlayer>
  )
}

export default VideoStory
