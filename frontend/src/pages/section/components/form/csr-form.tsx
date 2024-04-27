import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import Typography from '@/components/typography/Typography';

import REGEX from '@/constant/regex';

const CSRForm = () => {
  const methods = useForm();

  const { handleSubmit } = methods;

  const onSubmit = async () => {
    //
  };

  return (
    <div className='flex flex-col'>
      <Typography as='h2' className='text-2xl font-semibold mb-8'>
        Formulir Kerjasama Program CSR
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <Input
            id='nama'
            label='Nama'
            validation={{
              required: 'Nama harus diisi',
            }}
            placeholder='Nama Lengkap'
          />
          <Input
            id='email'
            label='Email'
            validation={{
              required: 'Email harus diisi',
              pattern: {
                value: REGEX.EMAIL,
                message: 'Email tidak valid',
              },
            }}
            placeholder='example@gmail.com'
          />
          <Input
            id='telp'
            label='No Telepon/Whatsapp'
            validation={{
              required: 'No Telepon  harus diisi',
              pattern: {
                value: REGEX.PHONE_NUMBER,
                message: 'No Telepon tidak valid',
              },
            }}
            placeholder='+62xxxxxxxxxx'
          />
          <Input
            id='nama_perusahaan'
            label='Nama Perusahaan'
            validation={{
              required: 'Nama Perusahaan harus diisi',
            }}
            placeholder='PT. GreenAct'
          />
          <Button type='submit' className='!mt-6 w-full border-none'>
            Selanjutnya
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CSRForm;
