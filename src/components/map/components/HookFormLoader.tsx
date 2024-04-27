import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { useMapEvent } from 'react-leaflet';

type HookFormLoaderProps = {
  formId: [string, string];
};

export default function HookFormLoader({ formId }: HookFormLoaderProps) {
  const { setValue, getValues } = useFormContext();

  const setLatLng = React.useCallback(
    (center: L.LatLng) => {
      // don't run if value is already the same
      if (
        center.lat === Number(getValues(formId[0])) &&
        center.lng === Number(getValues(formId[1]))
      ) {
        return;
      }

      setValue(formId[0], center.lat);
      setValue(formId[1], center.lng);
    },
    [formId, getValues, setValue],
  );

  const map = useMapEvent('move', () => {
    setLatLng(map.getCenter());
  });

  // For initial data
  React.useEffect(() => {
    setLatLng(map.getCenter());
  }, [map, setLatLng]);

  return null;
}
