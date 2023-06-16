import { Link, useNavigate } from 'react-router-dom';
import mainLogo from '/main-logo.svg';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import Spinner from '../components/Spinner';

interface IFormData {
  name: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(5),
  })
  .required();

function Register() {
  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(formData: IFormData) {
    setSubmitLoading(true);
    try {
      await axios.post('https://mock-api.arikmpt.com/api/user/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <Link
          to='/'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
          <img className='w-8 h-8 mr-2' src={mainLogo} alt='logo' />
          Categorawr
        </Link>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Create your account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 md:space-y-6' action='#'>
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Full Name
                </label>
                <Controller
                  name='name'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        value={field.value}
                        onChange={field.onChange}
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='John Doe'
                      />
                      {errors?.name && (
                        <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
                          {errors.name.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Your email
                </label>
                <Controller
                  name='email'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <>
                      <input
                        type='text'
                        name='email'
                        id='email'
                        value={field.value}
                        onChange={field.onChange}
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='name@company.com'
                      />
                      {errors?.email && (
                        <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
                          {errors.email.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Password
                </label>
                <Controller
                  name='password'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        value={field.value}
                        onChange={field.onChange}
                        placeholder='••••••••'
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      />
                      {errors?.password && (
                        <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
                          {errors.password.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
              <button
                type='submit'
                disabled={submitLoading}
                className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                {submitLoading ? <Spinner /> : 'Register'}
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Already have an account ?{' '}
                <Link
                  to='/login'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
