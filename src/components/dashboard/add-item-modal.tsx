import { Dialog, Transition } from '@headlessui/react';
import { Fragment, FunctionComponent, useState } from 'react';
import TagsListBox from '../listbox';
import BasicDatePicker from './date-picker';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';

type ListItem = {
  name: string;
  description: string;
  tag: string;
  date: dayjs.Dayjs;
};

type Props = {
  isOpen: boolean | any;
  closeModal: (value: boolean) => void;
  listItems: ListItem[];
  setListItems: React.Dispatch<React.SetStateAction<ListItem[]>>
};

const Modal: FunctionComponent<Props> = (props) => {
  const tags = ['INC', 'WORK'];
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(new Date()));
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState(tags[0]);

  function addItem(
    name: string,
    description: string,
    tag: string,
    date: Dayjs
  ) {
    let newItem = {
      name,
      description,
      tag,
      date,
    };

    props.listItems.unshift(newItem);
    props.setListItems(props.listItems);
    
    setDate(dayjs(new Date()));
    setName("");
    setDescription("");
    setTag(tags[0]);

    props.closeModal(props.isOpen);
  }


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
                      Here is where you create your todo list items. 
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                      <label
                        htmlFor='tags'
                        className='block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Tags
                      </label>
                      <TagsListBox tag={tag} setTags={setTag} tags={tags} />
                      <label
                        htmlFor='end-date'
                        className='block my-4 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        End Date
                      </label>
                      <BasicDatePicker date={date} setDate={setDate} />
                    </form>
                  </div>

                  <div className='mt-4 flex justify-end'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ml-4'
                      onClick={(e) => addItem(
                        name, description, tag, date
                      )}
                    >
                      Add Item
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
