import L from 'leaflet';
import { Lock, Map, Unlock } from 'lucide-react';
import dynamic from 'next/dynamic';
import * as React from 'react';

import clsxm from '@/lib/clsxm';
import { formatCoordinate } from '@/lib/coordinate';

import Button from '@/components/buttons/Button';
import Typography from '@/components/typography/Typography';

import { DEFAULT_COORDINATE } from '@/constant/common';

const BaseMap = dynamic(() => import('@/components/map/BaseMap'), {
  ssr: false,
});
const CenterGetter = dynamic(
  () => import('@/components/map/components/CenterGetter'),
  {
    ssr: false,
  },
);
const HookFormLoader = dynamic(
  () => import('@/components/map/components/HookFormLoader'),
  {
    ssr: false,
  },
);

type MovableMapProps = {
  /** Add this props to load coordinate to React Hook Form */
  formId?: [string, string];
  /** Initial center for the map */
  initialCenter?: [number, number];
  lockSubtitle?: React.ReactNode;
  listenIsLocked?: (isLocked: boolean) => void;
  defaultIsLocked?: boolean;
  checkIsAbleToLock?: () => boolean;
} & React.ComponentPropsWithoutRef<'div'>;

export default function MovableMap({
  className,
  formId,
  initialCenter,
  lockSubtitle,
  listenIsLocked,
  defaultIsLocked = false,
  checkIsAbleToLock = () => true,
  ...rest
}: MovableMapProps) {
  const mapRef = React.useRef<L.Map>(null);
  const [center, setCenter] = React.useState<L.LatLng | undefined>(() =>
    mapRef.current?.getCenter(),
  );

  const [isLocked, setIsLocked] = React.useState(defaultIsLocked);

  return (
    <div data-cy='movable-map' className={clsxm('', className)} {...rest}>
      <figure className='relative z-10 flex aspect-square flex-grow sm:aspect-video'>
        <BaseMap
          mapRef={mapRef}
          isLocked={isLocked}
          initialCenter={initialCenter}
          lockSubtitle={lockSubtitle}
          withMapFixedMarker
          className='flex-grow overflow-hidden rounded-xl'
        >
          <CenterGetter setCenter={setCenter} />
          {formId && <HookFormLoader formId={formId} />}
        </BaseMap>
      </figure>
      <Typography className='mt-2' variant='b3' color='secondary'>
        Lokasi yang anda pilih berada di Latitude:{' '}
        <b className='font-mono' data-cy='latitude-preview'>
          {formatCoordinate(center?.lat)}
        </b>
        , Longitude:{' '}
        <b className='font-mono'>{formatCoordinate(center?.lng)}</b>
      </Typography>

      <div className='mt-4 flex flex-col gap-2 md:flex-row'>
        <Button
          variant='secondary'
          disabled={isLocked}
          leftIcon={Map}
          onClick={() => mapRef.current?.locate({ setView: true })}
        >
          Gunakan Lokasi GPS
        </Button>
        {isLocked ? (
          <Button
            variant='warning'
            leftIcon={Lock}
            onClick={() => {
              setIsLocked(false);
              listenIsLocked?.(false);
            }}
          >
            Buka Kunci Titik
          </Button>
        ) : (
          <Button
            variant='primary'
            leftIcon={Unlock}
            data-cy='lock-button'
            onClick={() => {
              if (!checkIsAbleToLock()) return;

              setIsLocked(true);
              listenIsLocked?.(true);
            }}
          >
            Kunci Titik
          </Button>
        )}
        <Button
          className='hidden'
          data-cy='move-map-testing-button'
          variant='secondary'
          onClick={() => {
            mapRef.current?.setView([
              DEFAULT_COORDINATE.LATITUDE,
              DEFAULT_COORDINATE.LONGITUDE,
            ]);
          }}
        >
          Testing Button
        </Button>
      </div>
    </div>
  );
}
