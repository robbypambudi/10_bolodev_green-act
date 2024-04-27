import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

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

export default function UploadTaskModal({
  children,
  task,
}: {
  children: (props: ModalReturnType) => JSX.Element;
  task: {
    id: string;
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
    console.log(data);
  };

  return (
    <>
      {children(modalReturn)}
      <Modal open={open} setOpen={setOpen} title='Upload Tugas'>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Section className='space-y-2'>
              <SearchableSelectInput
                id='campaign_task_id'
                label='Task'
                placeholder='Select Task'
                options={task.map((t) => ({
                  label: t.title,
                  value: t.id,
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
