import L from 'leaflet';
import * as React from 'react';
import { Marker, useMapEvent } from 'react-leaflet';

import { DefaultIcon } from '@/components/map/components/DefaultMarker';

export function MapFixedMarker() {
  const map = useMapEvent('move', () => {
    setCenter(map.getCenter());
  });

  const [center, setCenter] = React.useState<L.LatLng>(() => map.getCenter());

  return center ? <Marker position={center} icon={DefaultIcon} /> : null;
}
