// import { event } from 'nextjs-google-analytics';

import { footerData } from '@/lib/content/footer';

import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/typography/Typography';

export default function Footer() {
  return (
    <footer className='relative bg-light print:hidden'>
      <span className='sr-only'>Footer</span>
      <div className='layout py-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8 xl:col-span-1'>
            <Typography variant='b1' color='tertiary' font='averta'>
              Portal Penerimaan Peserta Didik Baru (PPDB) Provinsi Jawa Timur{' '}
            </Typography>
          </div>
          <div className='mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            {footerData.map((navItem) => (
              <div key={navItem.name}>
                <Typography
                  as='h1'
                  variant='h6'
                  color='tertiary'
                  className='font-semibold uppercase tracking-widest'
                  font='averta'
                >
                  {navItem.name}
                </Typography>
                <ul role='list' className='mt-4 space-y-4'>
                  {navItem.children?.map((item) => (
                    <li key={item.name}>
                      <UnstyledLink
                        href={item.href}
                        onClick={() => {
                          // event('footer_click', {
                          //   label: item.name,
                          // });
                        }}
                      >
                        <Typography
                          variant='b2'
                          font='averta'
                          color='tertiary'
                          className='hover:text-typo-secondary'
                        >
                          {item.name}
                        </Typography>
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-12 border-t border-typo-divider pt-8'>
          <Typography
            variant='b2'
            color='tertiary'
            font='averta'
            className='xl:text-center'
          >
            &copy; {new Date().getFullYear()} PPDB Jawa Timur. All rights
            reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
