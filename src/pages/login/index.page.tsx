import Seo from "@/components/Seo";
import Button from "@/components/buttons/Button";
import DevelopmentCard from "@/components/cards/DevelopmentCard";
import DatePicker from "@/components/forms/DatePicker";
import Input from "@/components/forms/Input";
import PasswordInput from "@/components/forms/PasswordInput";
import withAuth from "@/components/hoc/withAuth";
import Layout from "@/components/layout/Layout";
import ArrowLink from "@/components/links/ArrowLink";
import PrimaryLink from "@/components/links/PrimaryLink";
import Typography from "@/components/typography/Typography";
import REGEX from "@/constant/regex";
import clsxm from "@/lib/clsxm";
import { exactLength } from "@/lib/form-utils";
import clsx from "clsx";
import { ClipboardList } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";



export default withAuth(LoginPage, 'auth');
function LoginPage() {

  const methods = useForm();

  const { handleSubmit, setError } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
  }


  return (
    <Layout>
      <Seo templateTitle='Login Pendaftaran Jalur Lomba' />

      <main>
        <section className=''>
          <div
            className={clsx([
              'layout min-h-main py-20',
              'flex flex-col items-center gap-4 md:flex-row-reverse md:gap-16',
            ])}
          >
            <LoginHeader data-id='header-for-mobile' className='md:hidden' />

            <div className='w-full'>
              <LoginHeader
                data-id='header-for-desktop'
                className='hidden md:block'
              />

              <hr className='my-4' />

              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
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
                  <Button
                    type='submit'
                    className='!mt-6 w-full'
                    leftIcon={ClipboardList}
                  // isLoading={isLoading}
                  >
                    Masuk
                  </Button>

                  <DevelopmentCard className='py-6'>
                    <div className='flex flex-wrap gap-4'>
                      <Button
                        onClick={() => {
                          methods.setValue('nisn', '0077633138');
                          methods.setValue('pin', 'UYMY7B');
                          methods.setValue(
                            'kk_or_skd_date',
                            new Date('2001-08-15'),
                          );
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
  )
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
