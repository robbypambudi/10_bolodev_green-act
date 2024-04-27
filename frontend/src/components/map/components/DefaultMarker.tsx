import L from 'leaflet';
import * as React from 'react';
import { Marker, MarkerProps } from 'react-leaflet';

type DefaultMarkerProps = {
  position: [number, number];
} & MarkerProps;

/**
 * Marker with predefined icon
 */
export default function DefaultMarker({
  position,
  ...rest
}: DefaultMarkerProps) {
  return <Marker position={position} icon={DefaultIcon} {...rest} />;
}

export const DefaultIcon = L.icon({
  iconSize: [32, 45],
  iconAnchor: [16, 45],
  popupAnchor: [0, -45],
  iconUrl: '/svg/map/inside.svg',
});
