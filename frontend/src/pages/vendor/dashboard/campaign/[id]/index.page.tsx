


import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { AxiosError } from "axios";
import { Eye } from "lucide-react";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import queryString from "query-string";

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
  const router = useRouter();

  //#region  //*=========== Fetch Data ===========
  const url = queryString.stringifyUrl(
    {
      url: `/vendor/campaign/${router.query.id}`,
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
      header: 'Aksi',
      accessorKey: 'title',
    },
    {
      header: 'Deskripsi Aksi', //* 'Description
      accessorKey: 'description',
    },

    {
      header: 'Submisi',
      cell: ({ row }) => {
        return (
          <div>
            <IconLink
              icon={Eye}
              href={`/vendor/dashboard/campaign/${router.query.id}/submission/${row.original.id}`}
            />

          </div>
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
            Campaign Task
          </Typography>

          <Table columns={columns} data={queryData?.data || []} withFilter />
        </section>

      </main>
    </DashboardVendorLayout>
  )
}