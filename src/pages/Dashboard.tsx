import { Link } from 'react-router-dom';
import mainLogo from '/main-logo.svg';
import TableRow from '../components/TableRow';
import { useEffect, useState } from 'react';
import axios from 'axios';

type CategoryType = {
  id: string;
  name: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
};

function Dashboard() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  async function fetchCategories() {
    try {
      const { data } = await axios.get('https://mock-api.arikmpt.com/api/category', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2MzIxZmU1LTJlNTEtNDg0YS1iYzcwLWMxM2VmY2EwYmQ5YiIsImlhdCI6MTY4Njc4NzQwMiwiZXhwIjoxNjg2ODA5MDAyfQ.CG13ON5m1eLQSqGHPaQj3yz3mPsx65xRdl2M271SKyo',
        },
      });

      setCategories(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  });

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center px-6 py-10 mx-auto md:min-h-screen lg:py-10'>
        <Link
          to='/'
          className='flex items-center mb-12 text-3xl font-semibold text-gray-900 dark:text-white'>
          <img className='w-10 h-10 mr-3' src={mainLogo} alt='logo' />
          Categorawr
        </Link>

        <div className='w-full sm:max-w-5xl text-gray-900 dark:text-white'>
          <Link
            to='/add'
            type='button'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mb-6 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            <svg
              className='w-6 h-6 mr-2 -ml-1'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6'></path>
            </svg>
            Add new category
          </Link>

          <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Identifier
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Status
                  </th>
                  <th scope='col' className='px-6 py-3 text-center'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map(category => (
                  <TableRow
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    status={category.is_active}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
