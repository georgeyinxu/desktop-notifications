import { useState } from 'react';
import NavBar from '../navbar';
import { PlusIcon, CalendarIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Modal from './add-item-modal';

const Body = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [listItems, setListItems] = useState([]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function removeItem(index: number) {
    let finalArray = listItems.splice(index, 1);
    setListItems(finalArray);
  }

  function addItem() {
    
  }

  return (
    <div className='sm:ml-64'>
      <NavBar />
      <div className='p-4 rounded-lg dark:border-gray-700 h-screen'>
        <div className='p-4 rounded-lg dark:border-gray-700'>
          <div className='grid grid-cols-3 gap-4 mb-4'>
            <div className='h-48 bg-gray-50 dark:bg-gray-800 rounded-md p-4'>
              <div className='flex justify-between'>
                <div className='text-md font-medium'>
                  Create task for members
                </div>
                <button className='bg-red-100 text-red-800 text-sm font-medium rounded-full dark:bg-red-900 dark:text-red-300 w-6 h-6 flex items-center' onClick={removeItem}>
                  <XMarkIcon
                    className='h-4 w-4 ml-1 text-red-800'
                    aria-hidden='true'
                  />
                </button>
              </div>

              <div className='mt-2'>
                <p className='text-sm text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore deserunt temporibus molestias! Unde iure eveniet non
                  quia suscipit mollitia. Praesentium molestias id dignissimos
                  eligendi assumenda placeat omnis sapiente dicta asperiores?
                </p>
              </div>

              <div className='flex mt-2 justify-between'>
                <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300'>
                  INC
                </span>
                <span className='bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300 flex justify-content-center'>
                  <CalendarIcon
                    className='h-4 w-4 mt-0.5 text-yellow-800'
                    aria-hidden='true'
                  />
                  <span className='ml-2'>8 June 2004</span>
                </span>
              </div>
            </div>

            <div
              className='flex items-center justify-center h-48 bg-gray-50 dark:bg-gray-800 rounded-md'
              onClick={openModal}
            >
              <PlusIcon
                className='h-10 w-10 text-blue-600'
                aria-hidden='true'
              />
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Body;
