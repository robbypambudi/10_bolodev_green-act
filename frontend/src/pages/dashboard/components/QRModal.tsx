import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import SearchableSelectInput from '@/components/forms/SearchableSelectInput';
import Modal from '@/components/modal/Modal';

import { FileWithPreview } from '@/types/dropzone';

type UploadTaskForm = {
  campaign_task_id: string;
  image_proof: FileWithPreview;
};

type ModalReturnType = {
  openModal: () => void;
};

export default function QRModal({
  children,
  task,
}: {
  children: (props: ModalReturnType) => JSX.Element;
  task: {
    campaign_id: string;
    title: string;
  }[];
}) {
  const methods = useForm<UploadTaskForm>();

  const { handleSubmit } = methods;

  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
  };

  const onSubmit = (data: UploadTaskForm) => {
    logger(data);
  };

  return (
    <>
      {children(modalReturn)}
      <Modal open={open} setOpen={setOpen} title='Upload Aksi'>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Section className='space-y-2'>
              <SearchableSelectInput
                id='campaign_task_id'
                label='Bukti Aksi'
                placeholder='Pilih Aksi'
                options={task.map((t) => ({
                  label: t.title,
                  value: t.campaign_id,
                }))}
                validation={{
                  required: { value: true, message: 'Task is required' },
                }}
              />
              <DropzoneInput
                id='image_proof'
                accept={{
                  'image/*': ['.png', '.jpg', '.jpeg'],
                }}
                maxFiles={1}
                label='Upload your photo'
              />
            </Modal.Section>
            <Modal.Section>
              <div className='flex justify-end gap-2'>
                <Button variant='outline' type='button'>
                  Kembali
                </Button>
                <Button type='submit'>Kirim</Button>
              </div>
            </Modal.Section>
          </form>
        </FormProvider>
      </Modal>
    </>
  );
}
