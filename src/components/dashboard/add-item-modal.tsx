import { Dialog, Transition } from '@headlessui/react';
import { NextPage } from 'next';
import { Fragment, useState } from 'react';
import TagsListBox from '../listbox';

type Props = {
  isOpen: boolean | any;
  closeModal: (value: boolean) => void;
};

const Modal: NextPage<Props> = (props) => {
  return (
    <Fragment>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all overflow-y-scroll'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Add List Item
                  </Dialog.Title>

                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      Here is where you create your todo list items. Please type
                      down your todo-item in the Header box, pick a time and
                      date to complete it.
                    </p>
                  </div>

                  <div className='mt-4'>
                    <form>
                      <label
                        htmlFor='task-name'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Task Name
                      </label>
                      <input
                        type='text'
                        id='task-name'
                        aria-describedby='helper-text-explanation'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Create task for team members'
                      />
                      <label
                        htmlFor='task-description'
                        className='block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Task Description
                      </label>
                      <textarea
                        id='task-description'
                        rows='4'
                        class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Leave task description here...'
                      ></textarea>
                      <label
                        htmlFor='end-date'
                        className='block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Tags
                      </label>
                      <TagsListBox />
                    </form>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={props.closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
};

export default Modal;
