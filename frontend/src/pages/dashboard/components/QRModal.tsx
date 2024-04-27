import * as React from 'react';

import Button from '@/components/buttons/Button';
import Modal from '@/components/modal/Modal';
import NextImage from '@/components/NextImage';

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
      <Modal open={open} setOpen={setOpen} title='Upload Aksi'>
        <Modal.Section className='flex items-center'>
          <NextImage
            alt='qr code'
            src='/images/qr-code.webp'
            width={400}
            height={400}
          />
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
