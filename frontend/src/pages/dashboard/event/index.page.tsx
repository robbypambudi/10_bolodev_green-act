import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { AxiosError } from 'axios';
import { Eye } from 'lucide-react';

import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import IconLink from '@/components/links/IconLink';
import Seo from '@/components/Seo';
import Table from '@/components/table/Table';
import Tag, { TagColor } from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

import { ApiError, ApiResponse } from '@/types/api';

type EventHistory = {
  is_attending: number;
  is_completed: number;
  status: string;
  id: number;
  event: {
    name: string;
    start_date: string;
    end_date: string;
  };
};

export default withAuth(CampaignPage, 'all');
function CampaignPage() {

  function checkProgress(start_date: string, end_date: string, is_attending: number, is_completed: number) {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);
    const currentDate = new Date();
    if (currentDate < startDate) {
      return {
        status: 'Upcoming',
        color: 'DEFAULT',
      }
    } else if (currentDate >= startDate && currentDate <= endDate) {
      if (is_attending === 1) {
        return {
          status: 'Attending',
          color: 'success',
        }
      } else {
        return {
          status: 'Late to Attend',
          color: 'warning',
        }
      }
    } else if (currentDate > endDate) {
      if (is_completed === 1) {
        return {
          status: 'Completed',
          color: 'success',
        }
      } else {
        return {
          status: 'Late to Complete',
          color: 'danger',
        }
      }
    }
  }


  const columns: ColumnDef<EventHistory>[] = [
    {
      accessorKey: 'event.title',
      header: 'Nama Campaign',
    },

    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <Tag color={checkProgress(row.original.event.start_date, row.original.event.end_date, row.original.is_attending, row.original.is_completed)?.color as TagColor}>
          {checkProgress(row.original.event.start_date, row.original.event.end_date, row.original.is_attending, row.original.is_completed)?.status}
        </Tag>
      ),
    },
    {
      accessorKey: 'action',
      header: 'Aksi',
      cell: ({ row }) => (
        <IconLink icon={Eye} size='sm' href={`/event/${row.original.id}`} />
      ),
    },
  ];

  const { data, isLoading } = useQuery<
    ApiResponse<EventHistory[]>,
    AxiosError<ApiError>
  >(['/user/events']);

  return (
    <DashboardLayout>
      <Seo templateTitle='Dashboard Event' />
      <main>
        <section className='dashboard-layout flex-col relative mt-4 flex rounded-md'>
          <Typography variant='j1' className='mt-8'>
            Riwayat Event
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
