import React from 'react'
import { storiesOf } from '@storybook/react'

import VideoStory from './VideoStory'

storiesOf('VideoPlayer', module)
  .add('with defaults', () => <VideoStory />)
  .add('with some options', () => (
    <VideoStory
      options={{
        preload: 'none',
        controlBar: {
          remainingTimeDisplay: false
        }
      }}
    />
  ))
  .add('with no poster', () => <VideoStory poster="" />)
