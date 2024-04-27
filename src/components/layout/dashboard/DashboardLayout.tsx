import { useState } from 'react';

import clsxm from '@/lib/clsxm';

import BaseDialog from '@/components/dialog/BaseDialog';
import DesktopNavigation from '@/components/layout/dashboard/DesktopNavigation';

import useDialogStore from '@/store/useDialogStore';
import MobileNavigation from '@/components/layout/dashboard/MobileNavigation';
import Header from '@/components/layout/dashboard/Header';

type DashboardLayoutProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function DashboardLayout({
  children,
  className,
}: DashboardLayoutProps) {
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
      <DesktopNavigation />

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