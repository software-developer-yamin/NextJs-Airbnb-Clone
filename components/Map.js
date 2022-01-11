import { getCenter } from 'geolib';
import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

function Map({ searchResults }) {
     const [selectedLocation, setSelectedLocation] = useState({});
     const coordinates = searchResults.map((result) => ({
          latitude: result.lat,
          longitude: result.long,
     }))

     const center = getCenter(coordinates);

     const [viewport, setViewport] = useState({
          latitude: center.latitude,
          longitude: center.longitude,
          zoom: 11,
          width: "100%",
          height: "100%",
     });
     return (
          <ReactMapGL
               mapStyle={"mapbox://styles/developeryamin/ckx4xhohn6jph15ns5qqfrrrz"}
               mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
               {...viewport}
               onViewportChange={(viewport) => setViewport(viewport)}
          >
               {
                    searchResults.map((result) => (
                         <div key={result.long}>
                              <Marker
                                   longitude={result.long}
                                   latitude={result.lat}
                                   offsetLeft={-20}
                                   offsetTop={-10}
                              >
                                   <p onClick={() => setSelectedLocation(result)} rule='img' className="text-2xl cursor-pointer animate-bounce" aria-label='push-pin'>📌</p>
                              </Marker>
                              {
                                   selectedLocation.long === result.long && (
                                        <Popup
                                             closeOnClick={true}
                                             onClose={() => setSelectedLocation({})}
                                             latitude={result.lat}
                                             longitude={result.long}
                                        >
                                             {result.title}
                                        </Popup>
                                   )
                              }
                         </div>
                    ))
               }
          </ReactMapGL>
     )
}

export default Map;
