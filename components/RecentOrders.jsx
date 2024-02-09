import React from 'react';
import { data } from '../data/data.js';
import { FaShoppingBag } from 'react-icons/fa';

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 relative h-[40vh] m-auto p-4 rounded-lg bg-white overflow-y-scroll'>
      <div className="flex items-center justify-between">
        <h1 className='font-semibold text-lg'>Top Platform</h1>
        <h2 className="text-lg font-medium text-[#34caa5]">See All</h2>
      </div>
      <ul>
       
      </ul>
    </div>
  );
};
 
export default RecentOrders;