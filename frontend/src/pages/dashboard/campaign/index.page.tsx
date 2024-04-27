import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { AxiosError } from 'axios';
import { Eye } from 'lucide-react';

import { formatLocaleDate } from '@/lib/date';

import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import IconLink from '@/components/links/IconLink';
import Seo from '@/components/Seo';
import Table from '@/components/table/Table';
import Tag, { TagColor } from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

import { ApiError, ApiResponse } from '@/types/api';

type CampaignHistory = {
  status: string;
  campaign: {
    id: string;
    name: string;
    expiry_date: string;
    action: string;
  };
};



export default withAuth(CampaignPage, 'all');
function CampaignPage() {

  function getStatusLabel(status: string) {
    if (status === 'pending') {
      return {
        text: 'Menunggu',
        color: 'warning',
      };
    }
    if (status === 'rejected') {
      return {
        text: 'Ditolak',
        color: 'danger',
      };
    }
    if (status === 'approved') {
      return {
        text: 'Disetujui',
        color: 'success',
      };
    }
    return {
      text: 'Tidak Aktif',
      color: 'warning',
    }
  }

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
      id: 'status',
      header: 'Status',
      cell: ({ row }) => {
        return (
          <Tag color={getStatusLabel(row.original.status).color as TagColor}>
            {getStatusLabel(row.original.status).text}
          </Tag>
        );
      }
    },
    {
      id: 'action',
      header: 'Aksi',
      cell: ({ row }) => {
        return (
          <IconLink
            icon={Eye}
            href={`/campaign/${row.original.campaign.id}`}
          />
        );
      }
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
