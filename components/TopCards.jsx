import React from 'react'
import { TopData } from '@/data/data'


const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-4'>
    {TopData.map((item, id) => (
        <div key={id} className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-[14px]'>
            <div className="flex items-center justify-between">
                {item.flowIcon}
            </div>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>350</p>
                <p className='text-gray-600'>Daily Revenue</p>
            </div>
        </div>
    ))}
    </div>
  )
}

export default TopCards