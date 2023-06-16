import axios from 'axios';
import { Link } from 'react-router-dom';

type TableRowProps = {
  id: string;
  name: string;
  status: boolean;
  updateState: (id: string) => void;
};

function TableRow({ id, name, status, updateState }: TableRowProps) {
  async function deleteCategory() {
    try {
      const result = await axios.delete(`https://mock-api.arikmpt.com/api/category/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      updateState(id);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <td scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
        {id}
      </td>
      <td className='px-6 py-4'>{name}</td>
      <td className='px-6 py-4'>
        <span
          className={`inline-flex items-center bg-green-100 ${
            status
              ? 'text-green-800 dark:bg-green-900 dark:text-green-300'
              : 'text-red-800 dark:bg-red-900 dark:text-red-300'
          } text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full `}>
          <span className={`w-2 h-2 mr-1 ${status ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></span>
          {status ? 'Active' : 'Inactive'}
        </span>
      </td>
      <td className='px-6 py-4 text-center'>
        <Link
          to={`/edit/${id}`}
          className='mr-4 font-medium text-blue-600 dark:text-blue-500 hover:underline'>
          Edit
        </Link>
        <button
          onClick={deleteCategory}
          className='font-medium text-red-600 dark:text-red-500 hover:underline'>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
