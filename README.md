# Orson [![NSP Status](https://nodesecurity.io/orgs/articulate/projects/b1ab5729-5cba-4672-a2f9-2f047db32b86/badge)](https://nodesecurity.io/orgs/articulate/projects/b1ab5729-5cba-4672-a2f9-2f047db32b86)

An Articulate flavored React component video player.

## Install

`npm install @articulate/orson`

## Usage
Import the stylesheets

```html
<link rel="stylesheet" src="/path/to/videojs.css" />
<link rel="stylesheet" src="node_modules/@articulate/orson/dist/VideoPlayer.css" />
```

or, if using webpack and sass-loader on your project

```scss
@import "~@articulate/orson/lib/index.webpack";
```

Import `VideoPlayer` into your component.

```jsx
import VideoPlayer from '@articulate/orson';

<VideoPlayer>
  <source src="__path_to_mp4__" type="video/mp4" />
  <source src="__path_to_format__" type="video/format" />
  <p>
    Custom Error Message
  </p>
</VideoPlayer>
```

## API

### Props

- **aspectRatio** (number, default: 9/16) Desired ratio between width and height.
- **fullWidthAt** (number) Specifies a screen breakpoint under which the player will try to use the entire width of the parent.
- **options** (object) Options passed to video.js ([see reference][vjs-options])

### Methods

You'll need to capture a ref to the VideoPlayer instance for this.

- **.setDimensions()** calculates and sets the ideal dimensions for the video player.
- **.snapshot()** creates a base64 image of the video in png.

### Properties

You'll need to capture a ref to the VideoPlayer instance for this.

- **.player** gets the video.js player reference. You can then [use any of the video.js player API's methods][vjs-player-api]

## Upgrading to 1.0.

The following steps need to be performed if using a version pre-1.0

1. Remove webpack configuration for this plugin.
This plugin used to require setting up exceptions in webpack's config loaders section, which is no longer needed.
1. Import the CSS. Previously, stylesheets would be imported automatically with sass-loader. That's no longer the case.
1. Change imports from `import VideoPlayer from '@articulate/orson/lib/VideoPlayer'` to `import VideoPlayer from '@articulate/orson'`

  [vjs-options]: http://docs.videojs.com/docs/guides/options.html#component-options
  [vjs-player-api]: http://docs.videojs.com/docs/api/player.html#methods
