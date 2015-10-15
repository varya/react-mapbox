'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var MapBox = (function (_React$Component) {
  _inherits(MapBox, _React$Component);

  function MapBox() {
    _classCallCheck(this, MapBox);

    _get(Object.getPrototypeOf(MapBox.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MapBox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      L.mapbox.accessToken = this.props.token;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(argument) {
      var props = this.props;

      var mapId = props.mapId || props.src || "mapbox.streets";

      var options = {};
      var ownProps = ['mapId', 'onMapCreated'];
      for (var k in props) {
        if (props.hasOwnProperty(k) && ownProps.indexOf(k) === -1) {
          options[k] = props[k];
        }
      }

      console.log(this.refs);
      var map = L.mapbox.map(_reactDom2['default'].findDOMNode(this), mapId, options);
    }
  }, {
    key: 'render',
    value: function render() {
      var mapStyle = {
        width: '100%',
        height: '100%'
      };

      return _react2['default'].createElement('div', { className: 'MapBox', style: mapStyle });
    }
  }]);

  return MapBox;
})(_react2['default'].Component);

exports['default'] = MapBox;
module.exports = exports['default'];
