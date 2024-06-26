import * as React from 'react';

import Button from '@/components/buttons/Button';
import Modal from '@/components/modal/Modal';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

type ModalReturnType = {
  openModal: () => void;
};

export default function QRModal({
  children,
}: {
  children: (props: ModalReturnType) => JSX.Element;
}) {
  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
  };

  return (
    <>
      {children(modalReturn)}
      <Modal
        open={open}
        setOpen={setOpen}
        title='Scan QR Code untuk mendapatkan voucher'
      >
        <Modal.Section className='flex flex-col items-center'>
          <NextImage
            alt='qr code'
            src='/images/qr-code.webp'
            width={400}
            height={400}
          />
          <Typography
            as='p'
            variant='h2'
            className='text-secondary-400 font-semibold mt-4'
          >
            Kode : BDX87YS00PO
          </Typography>
        </Modal.Section>
        <Modal.Section>
          <div className='flex justify-end'>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              variant='outline'
              type='button'
            >
              Kembali
            </Button>
          </div>
        </Modal.Section>
      </Modal>
    </>
  );
}
