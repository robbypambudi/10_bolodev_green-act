import * as React from 'react';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import Modal from '@/components/modal/Modal';
import Typography from '@/components/typography/Typography';

type ModalReturnType = {
  openModal: () => void;
};

export default function TukarPoinModal({
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
      <Modal open={open} setOpen={setOpen} title='Tukar Poin'>
        <Modal.Section className='flex items-center'>
          <Typography as='p' variant='h2' className='font-semibold mt-4'>
            Apakah anda yakin ingin menukar poin?
          </Typography>
        </Modal.Section>
        <Modal.Section>
          <div className='flex justify-end gap-2'>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              variant='outline'
              type='button'
            >
              Kembali
            </Button>
            <ButtonLink href='dashboard/point-voucher'>Tukar</ButtonLink>
          </div>
        </Modal.Section>
      </Modal>
    </>
  );
}
