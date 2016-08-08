# Orson

An Articulate flavored react component video player.

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
```
import VideoPlayer from '@articulate/orson';

<VideoPlayer>
  <source src="__path_to_mp4__" type="video/mp4" />
  <source src="__path_to_format__" type="video/format" />
  <p>
    Custom Error Message
  </p>
</VideoPlayer>
```

## Available Props
These props are not required, but available if needed.

- `aspectRatio` - a number, defualts to `(9 / 16)`
- `options` - video.js options used to create the player object.  See [Videojs Options](http://docs.videojs.com/docs/guides/options.html#component-options)
