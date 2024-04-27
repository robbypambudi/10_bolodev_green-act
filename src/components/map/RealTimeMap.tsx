import L from 'leaflet';
import dynamic from 'next/dynamic';
import * as React from 'react';

import clsxm from '@/lib/clsxm';
import { formatCoordinate } from '@/lib/coordinate';

import Typography from '@/components/typography/Typography';

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

type RealTimeMapProps = {
  /** Add this props to load coordinate to React Hook Form */
  formId?: [string, string];
  /** Initial center for the map */
  initialCenter?: [number, number];
  lockSubtitle?: React.ReactNode;
  listenIsLocked?: (isLocked: boolean) => void;
  defaultIsLocked?: boolean;
  timeInterval?: number;
  checkIsAbleToLock?: () => boolean;
} & React.ComponentPropsWithoutRef<'div'>;

export default function RealTimeMap({
  className,
  formId,
  initialCenter,
  lockSubtitle,
  timeInterval = 6000,
  ...rest
}: RealTimeMapProps) {
  const mapRef = React.useRef<L.Map>(null);
  const [center, setCenter] = React.useState<L.LatLng | undefined>(() =>
    mapRef.current?.getCenter(),
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      mapRef.current?.locate({ setView: true });
    }, timeInterval);

    return () => clearInterval(interval);
  }, [timeInterval]);

  return (
    <div data-cy='movable-map' className={clsxm('', className)} {...rest}>
      <figure className='relative z-10 flex aspect-square flex-grow sm:aspect-video'>
        <BaseMap
          mapRef={mapRef}
          isLocked={false}
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
    </div>
  );
}
