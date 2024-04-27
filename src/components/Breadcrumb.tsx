import { Home } from 'lucide-react';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import IconButton from '@/components/buttons/IconButton';
import PrimaryLink from '@/components/links/PrimaryLink';
import Typography from '@/components/typography/Typography';

const breadcrumbs = {
  '/': 'Landing Page',
  '/sandbox/breadcrumb': 'Breadcrumb',

  '/campaign': 'Browse Campaign',
  '/campaign/[id]': 'Detail Campaign',

  '/event': 'Browse Event',
  '/event/[id]': 'Detail Event',

  'edu-video/[id]': 'Detail Edu Video',
};
type BreadcrumbProps = {
  crumbs: Array<keyof typeof breadcrumbs>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Breadcrumb({
  className,
  crumbs: _crumbs,
  ...rest
}: BreadcrumbProps) {
  // split array into the last part and the rest
  const lastCrumb = _crumbs[_crumbs.length - 1];
  const crumbs = _crumbs.slice(0, _crumbs.length - 1);

  return (
    <div
      className={clsxm('space-x-1 flex justify-start items-center', className)}
      {...rest}
    >
      <IconButton icon={Home} variant='ghost' />
      {crumbs.map((crumb) => (
        <React.Fragment key={crumb}>
          <PrimaryLink href={crumb} className='font-medium' size='sm'>
            {breadcrumbs[crumb]}
          </PrimaryLink>
          <span className='font-medium text-typo'>/</span>
        </React.Fragment>
      ))}
      <Typography as='span' className='mt-1 text-xs md:text-sm'>
        {breadcrumbs[lastCrumb]}
      </Typography>
    </div>
  );
}
