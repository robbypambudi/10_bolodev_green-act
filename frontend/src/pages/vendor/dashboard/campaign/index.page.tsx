


import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { AxiosError } from "axios";
import { Eye } from "lucide-react";
import { ApiError } from "next/dist/server/api-utils";
import queryString from "query-string";

import { formatLocaleDate } from "@/lib/date";

import withVendorAuth from "@/components/hoc/withVendorAuth";
import DashboardVendorLayout from "@/components/layout/vendor/DashboardVendorLayout";
import IconLink from "@/components/links/IconLink";
import Seo from "@/components/Seo";
import Table from "@/components/table/Table";
import Typography from "@/components/typography/Typography";

import { ApiResponse } from "@/types/api";

type CampaignDetail = {
  id: string;
  title: string;
  description: string;
  expiry_date: string;
  point: number;
  participants: number;
  sponsor: string[];
  image: string;
}

export default withVendorAuth(DashboardVendorPage, 'all');
function DashboardVendorPage() {

  //#region  //*=========== Fetch Data ===========
  const url = queryString.stringifyUrl(
    {
      url: `/vendor/campaigns`,
    },
    {
      arrayFormat: 'comma',
    },
  );
  const { data: queryData } = useQuery<
    ApiResponse<CampaignDetail[]>,
    AxiosError<ApiError>
  >([url]);

  const columns: ColumnDef<CampaignDetail>[] = [
    {
      header: 'Title',
      accessorKey: 'title',
    },
    {
      header: 'Participants',
      accessorKey: 'participants',
    },
    {
      header: 'End Date',
      accessorKey: 'expiry_date',
      cell: ({ row }) => {
        return formatLocaleDate(new Date(row.original.expiry_date), 'FULL_WITH_TIME')
      }
    },
    {
      header: 'Aksi',
      cell: ({ row }) => {
        return (
          <IconLink
            href={`/vendor/dashboard/campaign/${row.original.id}`}
            icon={Eye}
            size='sm'
          />
        )
      }
    }
  ];
  //#endregion  //*======== Fetch Data ===========  
  return (
    <DashboardVendorLayout>

      <Seo templateTitle='Dashboard Vendor' />

      <main>
        <section className='dashboard-layout flex-col relative mt-4 flex rounded-md'>
          <Typography as='h1' variant='j1'>
            Campaign
          </Typography>

          <Table columns={columns} data={queryData?.data || []} withFilter />
        </section>

      </main>
    </DashboardVendorLayout>
  )
}