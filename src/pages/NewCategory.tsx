import { Link } from 'react-router-dom';
import mainLogo from '/main-logo.svg';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormData {
  name: string;
  status: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    status: yup.string().required(),
  })
  .required();

function NewCategory() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: IFormData) {
    console.log(data);
    // try {
    //   const { data } = await axios.post(
    //     'https://mock-api.arikmpt.com/api/category/create',
    //     {
    //       name: 'Wawawiwa',
    //       is_active: true,
    //     },
    //     {
    //       headers: {
    //         Authorization:
    //           'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2MzIxZmU1LTJlNTEtNDg0YS1iYzcwLWMxM2VmY2EwYmQ5YiIsImlhdCI6MTY4Njc4NzQwMiwiZXhwIjoxNjg2ODA5MDAyfQ.CG13ON5m1eLQSqGHPaQj3yz3mPsx65xRdl2M271SKyo',
    //       },
    //     }
    //   );

    //   console.log(data);
    // } catch (error) {
    //   console.error(error);
    // }
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
        <div className='w-full bg-white overflow-hidden rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <div className='flex items-center justify-between text-gray-900 dark:text-white'>
              <Link
                to='/'
                className='flex items-center font-medium text-blue-600 dark:text-blue-500 hover:text-blue-700'>
                <svg
                  className='w-5 h-5 mr-1 -ml-1'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={1.5}
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                </svg>
                Back
              </Link>
              <h1 className='text-xl font-semibold leading-tight tracking-tight md:text-2xl'>
                Add new category
              </h1>
            </div>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 scale-x-150' />
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 md:space-y-6' action='#'>
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Name
                </label>
                <Controller
                  name='name'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <>
                      <input
                        type='name'
                        name='name'
                        id='name'
                        value={field.value}
                        onChange={field.onChange}
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='New Category'
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
                  htmlFor='status'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Status
                </label>
                <Controller
                  name='status'
                  control={control}
                  defaultValue='Active'
                  render={({ field }) => (
                    <>
                      <select
                        id='status'
                        onChange={field.onChange}
                        value={field.value}
                        className='bg-gray-50 mt-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                        <option value='Active'>Active</option>
                        <option value='Inactive'>Inactive</option>
                      </select>
                      {errors?.status && (
                        <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
                          {errors.status.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>

              <button
                type='submit'
                className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewCategory;
