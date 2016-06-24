'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoPlayer = function (_React$Component) {
  _inherits(VideoPlayer, _React$Component);

  function VideoPlayer() {
    _classCallCheck(this, VideoPlayer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VideoPlayer).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(VideoPlayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var video = (0, _reactDom.findDOMNode)(this.refs.video);
      var options = {
        bigPlayButton: false,
        preload: 'auto',
        controls: true,
        controlBar: {
          fullscreenToggle: false,
          remainingTimeDisplay: true,
          volumeMenuButton: {
            inline: false
          }
        }
      };
      this.state.video = videojs(video, options);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'video',
        { className: 'video-js vjs-skin-articulate', ref: 'video' },
        this.props.children
      );
    }
  }]);

  return VideoPlayer;
}(React.Component);

exports.default = VideoPlayer;