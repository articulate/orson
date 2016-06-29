# Orson

An Articulate flavored react component video player.

## Usage

Install `video.js` into your project.

`npm install --save video.js`

Update your webpack config loaders

```
{
  test: /\.js$/,
  loader: 'babel-loader',
  include: path.join(__dirname, 'node_modules', 'orson')
},

{
  test: /\.eot$/,
  loader: 'url-loader'
}
```
> Note: you may need to npm install the `url-loader` and it's dependent `file-loader`.


Import `VideoPlayer` into your component.
```
import VideoPlayer from 'orson/src/VideoPlayer';

<VideoPlayer>
  <source src="__path_to_mp4__" type="video/mp4" />
  <source src="__path_to_format__" type="video/format" />
  <p>
    Custom Error Message
  </p>
</VideoPlayer>
```
