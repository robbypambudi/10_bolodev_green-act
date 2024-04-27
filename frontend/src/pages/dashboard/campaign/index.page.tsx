import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { AxiosError } from 'axios';

import { formatLocaleDate } from '@/lib/date';

import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';
import Table from '@/components/table/Table';
import Typography from '@/components/typography/Typography';

import { ApiError, ApiResponse } from '@/types/api';

type CampaignHistory = {
  campaign: {
    name: string;
    expiry_date: string;
    status: string;
    action: string;
  };
};

export default withAuth(CampaignPage, 'all');
function CampaignPage() {
  const columns: ColumnDef<CampaignHistory>[] = [
    {
      accessorKey: 'campaign.title',
      header: 'Nama Campaign',
    },

    {
      accessorKey: 'campaign.expiry_date',
      header: 'Tanggal Selesai',
      cell: ({ row }) => {
        return formatLocaleDate(
          new Date(row.original.campaign.expiry_date),
          'DATE_WITH_SHORTENED_MONTH',
        );
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
    {
      accessorKey: 'action',
      header: 'Aksi',
    },
  ];

  const { data, isLoading } = useQuery<
    ApiResponse<CampaignHistory[]>,
    AxiosError<ApiError>
  >(['/user/campaigns']);

  return (
    <DashboardLayout>
      <Seo templateTitle='Dashboard Campaign' />
      <main>
        <section className='dashboard-layout flex-col relative mt-4 flex rounded-md'>
          <Typography variant='j1' className='mt-8'>
            Riwayat Campaign
          </Typography>
          <div className='mt-4'>
            {isLoading && (
              <Typography className='text-center'>Loading...</Typography>
            )}
            <Table columns={columns} data={data?.data || []} withFilter />
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
