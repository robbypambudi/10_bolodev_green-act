import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { AlertTriangle } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { Lock } from 'lucide-react';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import { googleMapsLoader } from '@/components/map/helper';
import Typography from '@/components/typography/Typography';

import { DEFAULT_COORDINATE } from '@/constant/common';

const FALLBACK_COORDINATE: google.maps.LatLngLiteral = {
  lat: DEFAULT_COORDINATE.LATITUDE,
  lng: DEFAULT_COORDINATE.LONGITUDE,
};

type GoogleMapProps = {
  showLoading?: boolean;
  isLocked?: boolean;

  lockSubtitle?: React.ReactNode;
  withLockOverlay?: boolean;

  mapOptions: google.maps.MapOptions;
  onCreateMap?: (map: google.maps.Map) => void;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 * Component that shows basic google map
 * @param mapOptions options for the map (center, zoom, etc)
 * @param onCreateMap callback after creating map
 * @example
 *  <GoogleMap
      mapOptions={{ 
        center: {
          lat: <your-latitude>,
          lng: <your-longitude>,
        }
      }}
      className='aspect-square'
    />
 *
 */
export default function GoogleMap({
  showLoading = false,
  isLocked = false,
  lockSubtitle,
  withLockOverlay = false,
  mapOptions: { center = FALLBACK_COORDINATE, zoom = 15, ...restMapOptions },
  onCreateMap,
  className,
  ...rest
}: GoogleMapProps) {
  //#region  //*=========== Initialize Map ===========
  const {
    data: Map,
    isLoading,
    isError,
  } = useQuery(['import-maps'], {
    queryFn: async () => {
      const { Map } = await googleMapsLoader.importLibrary('maps');
      return Map;
    },
  });

  const mapRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!mapRef.current || !Map) return;

    const drawMap = async () => {
      const options: google.maps.MapOptions = {
        center: center,
        zoom: zoom,
        clickableIcons: false,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        },
        streetViewControl: false,
        rotateControl: true,
        ...restMapOptions,
      };
      const map = new Map(mapRef.current as HTMLDivElement, options);
      onCreateMap?.(map);
    };

    drawMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Map]);
  //#endregion  //*======== Initialize Map ===========

  // to control the loading state outside of the map component
  const shouldShowLoading = isLoading || showLoading;

  return (
    <div className={clsxm('relative h-full w-full', className)} {...rest}>
      <div
        className={clsx([
          'h-full w-full',
          'transition-opacity',
          shouldShowLoading ? 'opacity-0' : 'opacity-100',
        ])}
        ref={mapRef}
      />

      <MapStateOverlay
        isLoading={shouldShowLoading}
        isError={isError}
        isLocked={isLocked}
        withLockOverlay={withLockOverlay}
        lockSubtitle={lockSubtitle}
      />
    </div>
  );
}

type MapStateOverlayProps = {
  isLoading: boolean;
  isError: boolean;
  isLocked: boolean;
  withLockOverlay: boolean;
  lockSubtitle?: React.ReactNode;
};
function MapStateOverlay({
  isLoading,
  isError,
  isLocked,
  withLockOverlay,
  lockSubtitle,
}: MapStateOverlayProps) {
  if (isLoading)
    return (
      <div
        className={clsx([
          'absolute inset-0 ',
          'flex flex-col items-center justify-center p-4',
          ' bg-gray-100  text-center',
        ])}
      >
        <div className='inline-flex items-center justify-center rounded-lg border border-typo-divider bg-gray-50 p-2'>
          <Loader2 className='animate-spin text-typo' />
        </div>
        <Typography variant='b3' className='mt-2' color='secondary'>
          Memuat Peta
        </Typography>
      </div>
    );
  if (isError)
    return (
      <div
        className={clsx([
          'absolute inset-0',
          'flex flex-col items-center justify-center p-4',
          ' bg-gray-50  text-center',
        ])}
      >
        <div className='inline-flex items-center justify-center rounded-lg border border-red-100 bg-red-100 p-2'>
          <AlertTriangle className='text-red-900' />
        </div>
        <Typography variant='b3' className='mt-2' color='secondary'>
          Terjadi kesalahan dalam menampilkan peta
        </Typography>
      </div>
    );
  return (
    <div
      className={clsx([
        'absolute inset-0 ',
        'flex flex-col items-start justify-end p-4',
        'text-left',
        isLocked
          ? 'cursor-not-allowed opacity-100'
          : 'pointer-events-none opacity-0',
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
  );
}
