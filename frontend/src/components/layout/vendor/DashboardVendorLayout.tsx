import { useState } from 'react';

import clsxm from '@/lib/clsxm';

import BaseDialog from '@/components/dialog/BaseDialog';
import Header from '@/components/layout/dashboard/Header';
import MobileNavigation from '@/components/layout/dashboard/MobileNavigation';
import DesktopVendorNavigation from '@/components/layout/vendor/DesktopVendorNavigation';

import useDialogStore from '@/store/useDialogStore';

type DashboardVendorLayoutProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function DashboardVendorLayout({
  children,
  className,
}: DashboardVendorLayoutProps) {
  //#region  //*=========== Store ===========
  const open = useDialogStore.useOpen();
  const state = useDialogStore.useState();
  const handleClose = useDialogStore.useHandleClose();
  const handleSubmit = useDialogStore.useHandleSubmit();
  //#endregion  //*======== Store ===========

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <MobileNavigation
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Static sidebar for desktop */}
      <DesktopVendorNavigation />

      <div className='flex flex-1 flex-col md:pl-64'>
        <Header setSidebarOpen={setSidebarOpen} />

        <main className='py-4'>
          <div
            className={clsxm([
              'min-h-[calc(100vh-64px-6rem)] rounded-xl bg-light py-6',
              className,
            ])}
          >
            {children}
          </div>
        </main>
      </div>

      <BaseDialog
        onClose={handleClose}
        onSubmit={handleSubmit}
        open={open}
        options={state}
      />
    </div>
  );
}