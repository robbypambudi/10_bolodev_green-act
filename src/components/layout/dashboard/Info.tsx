import * as React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

import { ExtractProps } from '@/types/helper';

function InfoRoot({
  containerClassName,
  className,
  children,
  ...rest
}: {
  containerClassName?: string;
} & React.ComponentPropsWithoutRef<'section'>) {
  return (
    <main className={clsxm(['bg-light', containerClassName])} {...rest}>
      <section
        className={clsxm([
          'layout flex min-h-screen flex-col-reverse gap-8 py-12 md:flex-row md:gap-24',
          className,
        ])}
      >
        {children}
      </section>
    </main>
  );
}

function Content({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsxm([
        'flex w-full flex-col justify-center gap-4',
        className,
      ])}
      {...rest}
    />
  );
}

function Image({
  containerClassName,
  className,
  ...rest
}: { containerClassName?: string } & ExtractProps<typeof NextImage>) {
  return (
    <div
      className={clsxm([
        'flex w-full shrink-0 items-center md:w-2/5',
        containerClassName,
      ])}
    >
      <NextImage className={clsxm(['w-full', className])} {...rest} />
    </div>
  );
}

function Title({
  children,
  className,
  ...rest
}: ExtractProps<typeof Typography>) {
  return (
    <Typography
      as='h1'
      variant='j1'
      className={clsxm(['font-semibold md:text-5xl', className])}
      {...rest}
    >
      {children}
    </Typography>
  );
}

function Subtitle({
  children,
  className,
  ...rest
}: ExtractProps<typeof Typography>) {
  return (
    <Typography
      as='h2'
      variant='h2'
      className={clsxm(['font-normal', className])}
      {...rest}
    >
      {children}
    </Typography>
  );
}

const Info = Object.assign(InfoRoot, {
  Content,
  Title,
  Subtitle,
  Image,
});
export default Info;