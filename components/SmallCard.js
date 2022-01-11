import React from 'react';
import Image from 'next/image';

function SmallCard({ img, location, distance }) {
     return (
          <div className="flex items-center m-2 mt-5 space-x-4 transition duration-200 ease-out transform cursor-pointer hover:bg-gray-300 rounded-xl hover:scale-105">
               {/*Left*/}
               <div className='relative w-16 h-16'>
                    <Image src={img} alt='image' layout='fill' className='rounded-lg' />
               </div>
               {/*Right*/}
               <div>
                    <h2>{location}</h2>
                    <h3 className='text-gray-500'>{distance}</h3>
               </div>
          </div>
     )
}

export default SmallCard;
