import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

function InfoCards({ img, title, description, lat, location, long, price, star, total }) {
     return (
          <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition transform duration-200 ease-out first:border-t rounded-xl items-center'>
               <div className='relative h-60 w-40 md:h-52 md:w-80 flex-shrink-0'>
                    <Image src={img} alt="" layout='fill' objectFit='cover' className='rounded-2xl' />
               </div>
               <div className='flex flex-col flex-grow pl-5'>
                    <div className='flex justify-between'>
                         <p>{location}</p>
                         <HeartIcon className='h-7 cursor-pointer' />
                    </div>
                    <h4 className='text-xl'>{title}</h4>
                    <div className='border-b pt-2 w-10' />
                    <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
                    <div className="flex justify-between items-end pt-5">
                         <p className='flex items-center'>
                              <StarIcon className='h-5 text-red-400' />
                              {star}
                         </p>
                         <div>
                              <p className='text-xl font-semibold pb-2 lg:text-2xl'>{price}</p>
                              <p className='text-right font-extralight'>{total}</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default InfoCards;
