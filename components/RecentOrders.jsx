import React from 'react';
import { data } from '../data/data.js';
import { FaShoppingBag } from 'react-icons/fa';
import Range from "../components/Range"

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 relative h-[40vh] m-auto p-4 rounded-lg bg-white overflow-y-scroll'>
      <div className="flex items-center justify-between">
        <h1 className='font-semibold text-lg'>Top Platform</h1>
        <h2 className="text-lg font-medium text-[#34caa5]">See All</h2>
      </div>
      <ul>
          <div className="py-4">
                <h1 className='font-semibold text-lg'>Book Bazaar</h1>
                <div className="items-center w-full h-3 rounded-[40px] bg-[#f5f5f5] my-4">
                    <Range bgColor="bg-[#54C5EB]" width="w-[15%]" />
                </div>
                <div className="flex items-center justify-between text-[#22242C]">
                  <h1 className="font-normal text-lg">$2,500,000</h1>
                  <h1 className="font-normal text-lg">+15%</h1>
                </div>
          </div>
          <div className="py-4">
                <h1 className='font-semibold text-lg'>Book Bazaar</h1>
                <div className="items-center w-full h-3 rounded-[40px] bg-[#f5f5f5] my-4">
                    <Range bgColor="bg-[#6160DC]" width="w-[50%]" />
                </div>
                <div className="flex items-center justify-between text-[#22242C]">
                  <h1 className="font-normal text-lg">$5,500,000</h1>
                  <h1 className="font-normal text-lg">+50%</h1>
                </div>
          </div>
          <div className="py-4">
                <h1 className='font-semibold text-lg'>Book Bazaar</h1>
                <div className="items-center w-full h-3 rounded-[40px] bg-[#f5f5f5] my-4">
                    <Range bgColor="bg-[#54C5EB]" width="w-[25%]" />
                </div>
                <div className="flex items-center justify-between text-[#22242C]">
                  <h1 className="font-normal text-lg">$2,000,000</h1>
                  <h1 className="font-normal text-lg">+25%</h1>
                </div>
          </div>
          <div className="py-4">
                <h1 className='font-semibold text-lg'>Book Bazaar</h1>
                <div className="items-center w-full h-3 rounded-[40px] bg-[#f5f5f5] my-4">
                    <Range bgColor="bg-[#FF4A55]" width="w-[5%]" />
                </div>
                <div className="flex items-center justify-between text-[#22242C]">
                  <h1 className="font-normal text-lg">$4,500,000</h1>
                  <h1 className="font-normal text-lg">+5%</h1>
                </div>
          </div>
          <div className="py-4">
                <h1 className='font-semibold text-lg'>Book Bazaar</h1>
                <div className="items-center w-full h-3 rounded-[40px] bg-[#f5f5f5] my-4">
                    <Range bgColor="bg-[#FFB74A]" width="w-[80%]" />
                </div>
                <div className="flex items-center justify-between text-[#22242C]">
                  <h1 className="font-normal text-lg">$1,500,000</h1>
                  <h1 className="font-normal text-lg">+80%</h1>
                </div>
          </div>
      </ul>
    </div>
  );
};
 
export default RecentOrders;