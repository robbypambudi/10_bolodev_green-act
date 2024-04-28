export type FooterDataType = {
  name: string;
  children: {
    name: string;
    href: string;
  }[];
};

export const footerData: FooterDataType[] = [
  {
    name: 'Fitur',
    children: [
      {
        name: 'Campaign',
        href: '/campaign',
      },
      {
        name: 'Event',
        href: '/event',
      },
      {
        name: 'Crowdfunding',
        href: '/crowdfunding',
      },
      {
        name: 'Edu Video',
        href: '/edu-video',
      },
    ],
  },
  {
    name: 'Sponsor & Partnership',
    children: [
      {
        name: 'Crowdfunding',
        href: '/crowdfunding',
      },
      {
        name: 'CSR',
        href: '#',
      },
    ],
  },
];
