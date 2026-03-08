import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { SearchBox } from '@mapbox/search-js-react';

export default function AppMap({ user, dishes, setView, setSelectedLocation }) {
  const [selectedDish, setSelectedDish] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const initialViewState = {
    longitude: user?.location?.coordinates?.lng ?? -74.006,
    latitude: user?.location?.coordinates?.lat ?? 40.7128,
    zoom: 11,
  };

  return (
    <div style={{ height: '100%', width: '100%', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', zIndex: 10, width: '320px' }}>
        <SearchBox
          accessToken={MAPBOX_TOKEN}
          value={inputValue}
          onChange={(v) => setInputValue(v)}
          onRetrieve={(result) => {
            const [lng, lat] = result.features[0].geometry.coordinates;
            const placeName = result.features[0].properties.full_address;
            setSelectedLocation({ lng, lat, placeName });
            setView('ImageUpload');
          }}
        />
      </div>

      <Map
        initialViewState={initialViewState}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{ width: '100%', height: '100%' }}
      >
        {dishes.map((dish) =>
          dish.location?.coordinates ? (
            <Marker
              key={dish._id}
              longitude={dish.location.coordinates.lng}
              latitude={dish.location.coordinates.lat}
              anchor="bottom"
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setSelectedDish(dish);
              }}
            >
              <div style={{ fontSize: '24px', cursor: 'pointer' }}>📍😋</div>
            </Marker>
          ) : null
        )}

        {selectedDish && (
          <Popup
            anchor="top"
            longitude={selectedDish.location.coordinates.lng}
            latitude={selectedDish.location.coordinates.lat}
            onClose={() => setSelectedDish(null)}
          >
            <div style={{ color: 'black' }}>
              <h3 style={{ margin: '0 0 5px 0' }}>{selectedDish.name}</h3>
              <p style={{ margin: 0 }}>{selectedDish.restaurantName}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}