export type FooterDataType = {
  name: string;
  children: {
    name: string;
    href: string;
  }[];
};

export const footerData: FooterDataType[] = [
  {
    name: 'Informasi',
    children: [
      {
        name: 'Ketentuan',
        href: '/informasi/ketentuan/',
      },
      {
        name: 'Prosedur',
        href: '/informasi/prosedur/',
      },
      {
        name: 'Jadwal',
        href: '/informasi/jadwal/',
      },
      {
        name: 'Pagu',
        href: '/lihat/pagu/',
      },
      {
        name: 'Nilai Indeks dan Akreditasi Sekolah',
        href: '/lihat/nilai-indeks/',
      },
    ],
  },
  {
    name: 'Pra-Pendaftaran',
    children: [
      {
        name: 'Lihat Nilai Prestasi Gabungan',
        href: '/nilai-prestasi-gabungan/login/',
      },
      {
        name: 'Verifikasi Rapor',
        href: '/verifikasi-rapor/login/',
      },
      {
        name: 'Pengambilan PIN',
        href: '/ambil-pin/login/',
      },
      {
        name: 'Verifikasi Kesehatan',
        href: '/verifikasi-kesehatan/login/',
      },
      {
        name: 'Lihat PIN',
        href: '/lihat-pin/login/',
      },
    ],
  },
];
