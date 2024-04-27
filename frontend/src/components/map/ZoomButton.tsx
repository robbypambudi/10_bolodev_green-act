import clsx from 'clsx';
import L from 'leaflet';
import { ZoomIn, ZoomOut } from 'lucide-react';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import IconButton from '@/components/buttons/IconButton';

type ZoomButtonProps = {
  mapRef: React.RefObject<L.Map>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function ZoomButton({
  className,
  mapRef,
  ...rest
}: ZoomButtonProps) {
  return (
    <div
      className={clsxm(
        'absolute inset-x-4 top-4 z-[1001]',
        'flex flex-col items-start gap-4',
        'pointer-events-none print:hidden',
        className,
      )}
      {...rest}
    >
      <div
        className={clsx(
          'rounded-xl bg-white p-1',
          'flex flex-col gap-2',
          'pointer-events-auto',
        )}
      >
        <IconButton
          onClick={() => mapRef.current?.zoomIn()}
          icon={ZoomIn}
          variant='ghost'
          size='sm'
        />
        <IconButton
          onClick={() => mapRef.current?.zoomOut()}
          icon={ZoomOut}
          variant='ghost'
          size='sm'
        />
      </div>
    </div>
  );
}
