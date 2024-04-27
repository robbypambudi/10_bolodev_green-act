import clsx from 'clsx';
import L from 'leaflet';
import { Lock } from 'lucide-react';
import * as React from 'react';
import { CircleMarker, MapContainer, Tooltip } from 'react-leaflet';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';

import 'leaflet/dist/leaflet.css';

import clsxm from '@/lib/clsxm';

import { MapFixedMarker } from '@/components/map/components/MapFixedMarker';
import { googleMapsLoaderConf } from '@/components/map/helper';
import ZoomButton from '@/components/map/ZoomButton';
import Typography from '@/components/typography/Typography';

import { DEFAULT_COORDINATE } from '@/constant/common';

import { VisitorMap } from '@/types/entities/map';

type BaseMapProps = {
  mapRef: React.RefObject<L.Map>;

  isLocked?: boolean;
  initialCenter?: [number, number];
  lockSubtitle?: React.ReactNode;
  withMapFixedMarker?: boolean;
  withLockOverlay?: boolean;

  mapOptions?: React.ComponentPropsWithoutRef<typeof MapContainer>;

  visitor?: VisitorMap[];
} & React.ComponentPropsWithoutRef<'div'>;

const FALLBACK_COORDINATE: [number, number] = [
  DEFAULT_COORDINATE.LATITUDE,
  DEFAULT_COORDINATE.LONGITUDE,
];

export default function BaseMap({
  className,
  children,
  isLocked = false,
  initialCenter = FALLBACK_COORDINATE,
  mapRef,
  lockSubtitle,
  withMapFixedMarker = false,
  withLockOverlay = true,
  mapOptions,
  visitor,
  ...rest
}: BaseMapProps) {
  return (
    <div className={clsxm('relative', className)} {...rest}>
      <MapContainer
        className='h-full'
        zoom={18}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        center={initialCenter}
        ref={mapRef}
        zoomControl={false}
        attributionControl={false}
        {...mapOptions}
      >
        <ReactLeafletGoogleLayer googleMapsLoaderConf={googleMapsLoaderConf} />
        {withMapFixedMarker && <MapFixedMarker />}
        {visitor && visitor.map((v, index) =>
          <CircleMarker center={v.center} radius={v.radius} key={index} pathOptions={v.pathOptions}>
            <Tooltip className='bg-white' direction='top' offset={[0, -10]}>
              <Typography variant='b3'>
                {v.tooltip}
              </Typography>
            </Tooltip>

          </CircleMarker>
        )}

        {children}
      </MapContainer>

      <div
        className={clsx([
          'absolute inset-0 z-[1001]',
          'flex flex-col items-start justify-end p-4',
          'text-left',
          isLocked ? 'cursor-not-allowed' : 'pointer-events-none opacity-0',
          withLockOverlay && 'bg-gradient-to-b from-black/20 to-black/80',
        ])}
      >
        {withLockOverlay && (
          <>
            <Lock color='white' />
            <Typography variant='h3' color='white' className='mt-2'>
              Titik telah dikunci
            </Typography>
            {lockSubtitle && (
              <Typography variant='b3' color='white'>
                {lockSubtitle}
              </Typography>
            )}
          </>
        )}
      </div>

      <ZoomButton mapRef={mapRef} />
    </div>
  );
}
