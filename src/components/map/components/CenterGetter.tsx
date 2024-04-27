import * as React from 'react';
import { useMapEvent } from 'react-leaflet';

type CenterGetterProps = {
  setCenter: React.Dispatch<React.SetStateAction<L.LatLng | undefined>>;
};

export default function CenterGetter({ setCenter }: CenterGetterProps) {
  const map = useMapEvent('move', () => {
    setCenter(map.getCenter());
  });

  // For initial data
  React.useEffect(() => {
    setCenter(map.getCenter());
  }, [map, setCenter]);

  return null;
}
