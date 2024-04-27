import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { AxiosError } from "axios";
import { Check, Cross } from "lucide-react";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import queryString from "query-string";

import IconButton from "@/components/buttons/IconButton";
import withVendorAuth from "@/components/hoc/withVendorAuth";
import DashboardVendorLayout from "@/components/layout/vendor/DashboardVendorLayout";
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

export default withVendorAuth(CampaignSubmissionListPage, 'all');
function CampaignSubmissionListPage() {
  const router = useRouter();

  //#region  //*=========== Fetch Data ===========
  const url = queryString.stringifyUrl(
    {
      url: `/vendor/campaign/task/${router.query.task_id}`,
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
      header: 'Gambar',
      accessorKey: 'description',
    },

    {
      header: 'Submisi',
      // eslint-disable-next-line unused-imports/no-unused-vars
      cell: ({ row }) => {
        return (
          <div>
            <IconButton
              icon={Check}
            // onClick={() => router.push(`/vendor/dashboard/campaign/${router.query.id}/submission/${row.original.id}`)}
            />
            <IconButton
              icon={Cross}
            // onClick={() => router.push(`/vendor/dashboard/campaign/${router.query.id}/submission/${row.original.id}`)}
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
            Campaign User Task
          </Typography>
          <div className="mt-4">
            <Table columns={columns} data={queryData?.data || []} withFilter />
          </div>
        </section>

      </main>
    </DashboardVendorLayout>
  )
}