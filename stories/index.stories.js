import React from 'react'
import { storiesOf } from '@storybook/react'

import VideoStory from './VideoStory'

storiesOf('VideoPlayer', module)
  .add('with defaults', () => <VideoStory />)
