import React from 'react';
import ReactDOM from 'react-dom';

export default class MapBox extends React.Component {
  componentWillMount () {
    L.mapbox.accessToken = this.props.token;
  }
  componentDidMount (argument) {
    var props = this.props;

    var mapId = props.mapId || props.src || "mapbox.streets";

    var options = {};
    var ownProps = ['mapId', 'onMapCreated'];
    for (var k in props) {
      if (props.hasOwnProperty(k) && ownProps.indexOf(k) === -1) {
        options[k] = props[k];
      }
    }

    var map = L.mapbox.map(ReactDOM.findDOMNode(this), mapId, options);
  }
  render () {
    var mapStyle = {
      width: '100%',
      height: '100%'
    };

    return (
      <div className="MapBox" style={mapStyle}>
      </div>
    );
  }
}
