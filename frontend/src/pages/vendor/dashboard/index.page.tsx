import DashboardVendorLayout from "@/components/layout/vendor/DashboardVendorLayout";
import DistributionMap from "@/components/map/DistributionMap";
import Seo from "@/components/Seo";
import Typography from "@/components/typography/Typography";

import dummyMap from "@/constant/map";

export default function DashboardVendorPage() {
  return (
    <DashboardVendorLayout>

      <Seo templateTitle='Dashboard Vendor' />

      <main>
        <section className='dashboard-layout flex-col relative mt-4 flex rounded-md'>
          <Typography as='h1' variant='h1'>
            Rekapitulasi Pengunjung
          </Typography>

          <DistributionMap initialCenter={
            [-7.29610874, 112.73666760]
          }
            visitor={dummyMap}
          />
        </section>
      </main>
    </DashboardVendorLayout>
  )
}