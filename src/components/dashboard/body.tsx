import { useState } from 'react';
import NavBar from '../navbar';

const Body = () => {
  type listItem = {
    header: String,
    description: String,
    date: String,
    tags: Array<String>
  }

  const [listItems, setListItems] = useState([]);

  return (
    <div className='sm:ml-64'>
      <NavBar />

      <div className='p-4 rounded-lg dark:border-gray-700 h-screen'>
        <div className='p-4 rounded-lg dark:border-gray-700'>
          <div className='grid grid-cols-4 gap-4 mb-4'>
            <div className='flex items-center justify-center h-24 bg-gray-50 dark:bg-gray-800 rounded-md'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
