

import { formatLocaleDate } from "@/lib/date";

import Alert from "@/components/alert/Alert";
import withVendorAuth from "@/components/hoc/withVendorAuth";
import DashboardVendorLayout from "@/components/layout/vendor/DashboardVendorLayout";
import DistributionMap from "@/components/map/DistributionMap";
import Seo from "@/components/Seo";
import Tag from "@/components/tag/Tag";
import Typography from "@/components/typography/Typography";

import dummyMap from "@/constant/map";

export default withVendorAuth(DashboardVendorPage, 'all');
function DashboardVendorPage() {
  return (
    <DashboardVendorLayout>

      <Seo templateTitle='Dashboard Vendor' />

      <main>
        <section className='dashboard-layout flex-col relative mt-4 flex rounded-md'>
          <Typography as='h1' variant='h1'>
            Rekapitulasi Pengunjung
          </Typography>
          <div className="mt-4">
            <Alert variant="secondary">
              Data akan diperbarui setiap 1 jam sekali oleh sistem secara otomatis.
            </Alert>
            <div className="flex items-center justify-start mt-4">
              <Typography>
                Pembaruan Terakhir :
              </Typography>
              <Tag className='ml-2' color='primary'>
                {formatLocaleDate(new Date(), 'FULL_DATE_WITH_DAY')}
              </Tag>
            </div>

            <DistributionMap initialCenter={
              [-7.29610874, 112.73666760]
            }
              visitor={dummyMap}
              className="mt-4"
            />
          </div>
        </section>
      </main>
    </DashboardVendorLayout>
  )
}