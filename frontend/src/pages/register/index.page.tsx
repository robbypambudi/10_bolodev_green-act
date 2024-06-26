import clsx from 'clsx';
import { ClipboardList } from 'lucide-react';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';

import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';
import DevelopmentCard from '@/components/cards/DevelopmentCard';
import Input from '@/components/forms/Input';
import PasswordInput from '@/components/forms/PasswordInput';
import withAuth from '@/components/hoc/withAuth';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import REGEX from '@/constant/regex';
import { useRegisterMutation } from '@/pages/register/hooks/mutation';

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export default withAuth(LoginPage, 'auth');
function LoginPage() {
  const router = useRouter();
  const { mutateAsync: register, isLoading } = useRegisterMutation();

  const methods = useForm<RegisterForm>();

  const { handleSubmit } = methods;

  const onSubmit = async (data: RegisterForm) => {
    register(data).then(() => {
      router.push('/login');
    });
  };

  return (
    <Layout>
      <Seo templateTitle='Login' />

      <main>
        <Header />
        <section className=''>
          <div
            className={clsx([
              'layout min-h-main py-20',
              'flex flex-col items-center gap-4 md:flex-row-reverse md:gap-16',
            ])}
          >
            <LoginHeader data-id='header-for-mobile' className='md:hidden' />

            <div className=''>
              <NextImage
                src='/images/auth/hero.png'
                alt='Login Illustration'
                width={640}
                height={640}
                className='w-80 h-80 md:w-[640px] md:h-[640px]'
              />
            </div>

            <div className='w-full'>
              <LoginHeader
                data-id='header-for-desktop'
                className='hidden md:block'
              />

              <hr className='my-4' />

              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                  <Input
                    id='name'
                    label='Name'
                    validation={{
                      required: 'Name harus diisi',
                    }}
                    placeholder='Masukkan Nama'
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
                    placeholder='Masukkan Email'
                  />
                  <PasswordInput
                    id='password'
                    label='Password'
                    validation={{
                      required: 'Password harus diisi',
                    }}
                    placeholder='Masukkan Password'
                  />
                  <PasswordInput
                    id='password_confirmation'
                    label='Konfirmasi Password'
                    validation={{
                      required: 'Konfirmasi Password harus diisi',
                    }}
                    placeholder='Masukkan Konfirmasi Password'
                  />

                  <Typography className='mt-4'>
                    Sudah Memiliki Akun?{' '}
                    <PrimaryLink href='/login'>Masuk</PrimaryLink>
                  </Typography>

                  <Button
                    type='submit'
                    className='!mt-6 w-full'
                    leftIcon={ClipboardList}
                    isLoading={isLoading}
                  >
                    Daftar
                  </Button>

                  <DevelopmentCard className='py-6'>
                    <div className='flex flex-wrap gap-4'>
                      <Button
                        onClick={() => {
                          methods.setValue('name', 'Akun Testing');
                          methods.setValue('email', 'test123@gmail.com');
                          methods.setValue('password', '12345678');
                          methods.setValue('password_confirmation', '12345678');
                        }}
                        variant='secondary'
                      >
                        Populate Login
                      </Button>
                    </div>
                  </DevelopmentCard>
                </form>
              </FormProvider>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function LoginHeader({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'header'>) {
  return (
    <header className={clsxm(['w-full font-averta', className])} {...rest}>
      <ArrowLink
        direction='left'
        href='/'
        as={PrimaryLink}
        className='font-averta'
      >
        Kembali
      </ArrowLink>
      <Typography as='h1' variant='j1' className='mt-6 font-semibold'>
        Pendaftaran
      </Typography>
    </header>
  );
}
