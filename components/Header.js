import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useRouter } from 'next/router'

function Header({ placeholder }) {
     const [searchInput, setSearchInput] = useState("");
     const [startDate, setStartDate] = useState(new Date());
     const [endDate, setEndDate] = useState(new Date());
     const [noOfGuersts, setNoOfGuersts] = useState(1);
     const router = useRouter();

     const handleSelect = (range) => {
          setStartDate(range.selection.startDate);
          setEndDate(range.selection.endDate);
     };

     const searchButton = () => {
          router.push({
               pathname: '/search',
               query: {
                    location: searchInput,
                    startDate: startDate.toDateString(),
                    endDate: endDate.toDateString(),
                    noOfGuersts,
               }
          })
     };

     const selectionRange = {
          startDate,
          endDate,
          key: 'selection',
     };

     return (
          <header className='sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10' >
               {/*Left*/}
               <div className='relative flex items-center h-10 my-auto cursor-pointer' >
                    <Image onClick={() => router.push("/")} src="https://links.papareact.com/qd3" alt="" layout='fill' objectFit='contain' objectPosition={'left'} />
               </div>

               {/*Middle*/}
               <div className='flex py-2 rounded-full md:border-2 md:shadow-sm' >
                    <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type='text' className='flex-grow pl-4 text-sm text-gray-600 placeholder-gray-300 bg-transparent outline-none md:pl-5 sm:pl-5' placeholder={placeholder || 'Start your search'} />
                    <SearchIcon className='hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2' />
               </div>
               {/*Right*/}
               <div className='flex items-center justify-end space-x-4 text-gray-500'>
                    <p className='hidden cursor-pointer md:inline-flex'>Become a host</p>
                    <GlobeAltIcon className='h-6 cursor-pointer' />
                    <div className='flex items-center p-2 space-x-2 border-2 rounded-full cursor-pointer'>
                         <MenuIcon className='h-6' />
                         <UserCircleIcon className='h-6' />
                    </div>
               </div>
               {
                    searchInput && (
                         <div className='flex flex-col col-span-3 mx-auto mt-2'>
                              <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} rangeColors={['#FD5B61']} />
                              <div className='flex items-center mb-4 border-b'>
                                   <h2 className='flex-grow text-2xl font-semibold'>
                                        Numbers of Guests
                                   </h2>
                                   <UsersIcon className='h-5' />
                                   <input className='w-12 pl-2 text-lg text-red-400 outline-none' min={1} type='number' value={noOfGuersts} onChange={(e) => setNoOfGuersts(e.target.value)} />
                              </div>
                              <div className='flex'>
                                   <button onClick={() => setSearchInput("")} className='flex-grow text-gray-500'>Cancel</button>
                                   <button onClick={searchButton} className='flex-grow text-red-400'>Search</button>
                              </div>
                         </div>
                    )
               }
          </header>
     )
}

export default Header;
