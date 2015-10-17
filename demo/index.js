import React from 'react';

import {render} from 'react-dom';

import MapBox from "../";

require("!style!css!./index.css");

render(
  <div>
    <h1>Hello, world!</h1>
        <div className="map">
        <MapBox
            mapId="mapbox.streets"
            zoomControl={false}
            token="pk.eyJ1IjoidG9pdm9uZW5zIiwiYSI6ImNpZm1zdzQ2azAxODZ0ZWx4Zzk2aGhzc2IifQ.lIIyFiIEgF5jLnpK0UZ_EA"
            center={[60.1688656, 24.9308968]}
          />
        </div>
  </div>
  ,
  document.getElementById('example')
);
