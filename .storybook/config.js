import { configure } from '@storybook/react';

import './base.scss'
import 'video.js/src/css/vjs.scss'
import '../lib/VideoPlayer.scss'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
