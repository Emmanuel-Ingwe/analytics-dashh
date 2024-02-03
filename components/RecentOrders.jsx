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
        {data.map((order, id) => (
          <div className="py-4">
            <h1>{order.name}</h1>
            <div className="relative flex items-center w-full h-3 rounded-[40px] bg-[#f5f5f5]">
              <div className="">{order.style}</div>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="">{order.amount}</h1>
              <h1 className="">{order.percentage}</h1>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
