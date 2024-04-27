import { Loader } from '@googlemaps/js-api-loader';

import { MultiPolygon } from '@/types/entities/village';

export const googleMapsLoaderConf = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  version: 'weekly',
  language: 'id',
};
export const googleMapsLoader = new Loader(googleMapsLoaderConf);

export async function isMarkerInsideBoundary(
  position: google.maps.LatLng,
  multiPolygon: google.maps.Polygon[],
) {
  const { poly } = await googleMapsLoader.importLibrary('geometry');
  return multiPolygon.some((polygon) =>
    poly.containsLocation(position, polygon),
  );
}

export async function constructMultiPolygon(
  map: google.maps.Map,
  multiPolygon: MultiPolygon,
) {
  const { Polygon } = await googleMapsLoader.importLibrary('maps');
  const result: google.maps.Polygon[] = [];

  for (const shape of multiPolygon.map((polygon) => {
    const boundaryPoints = polygon?.map((coordinate) => ({
      lng: coordinate[0],
      lat: coordinate[1],
    }));

    const boundaryPolygon = new Polygon({
      paths: boundaryPoints,
      strokeColor: '#20188A',
      strokeOpacity: 1,
      strokeWeight: 2,
      fillColor: '#C2BEFA',
      fillOpacity: 0.4,
      zIndex: 1,
    });

    return boundaryPolygon;
  })) {
    shape.setMap(map);
    result.push(shape);
  }

  return result;
}

export async function getVisualBoundary(polygons: google.maps.Polygon[]) {
  const { LatLngBounds } = await googleMapsLoader.importLibrary('core');
  const bounds = new LatLngBounds();

  for (let b = 0; b < polygons.length; b++) {
    const paths = polygons[b].getPaths();
    let path;

    for (let p = 0; p < paths.getLength(); p++) {
      path = paths.getAt(p);
      for (let i = 0; i < path.getLength(); i++) {
        bounds.extend(path.getAt(i));
      }
    }
  }

  return bounds;
}

type MarkerType = 'inside-boundary' | 'outside-boundary';
export async function getMarkerIcon(type: MarkerType) {
  const { Point, Size } = await googleMapsLoader.importLibrary('core');
  if (type === 'inside-boundary')
    return {
      url: '/svg/map/inside.svg',
      anchor: new Point(16, 45),
      scaledSize: new Size(32, 45),
    };

  return {
    url: '/svg/map/outside.svg',
    anchor: new Point(16, 45),
    scaledSize: new Size(32, 45),
  };
}
export async function constructMarker(map: google.maps.Map, type: MarkerType) {
  const { Marker } = await googleMapsLoader.importLibrary('marker');

  const marker = new Marker({
    position: map.getCenter(),
    map: map,
    draggable: true,
    icon: await getMarkerIcon(type),
  });

  return marker;
}
