import React from 'react'
import { TopData } from '@/data/data'


const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-4'>
    {TopData.map((item, id) => (
        <div key={id} className='lg:col-span-1 col-span-1 bg-white flex flex-col border p-4 rounded-[14px]'>
            <div className="flex items-center justify-between cursor-pointer">
                <div className="flex border rounded-full items-center p-2 hover:bg-gray-200">
                    {item.statusIcon}
                </div>
                {item.flowIcon}
            </div>
            <div className='flex flex-col w-full'>
                <p className='text-xl font-medium text-[#898989] py-2'>{item.status}</p>
                <p className='font-semibold text-2xl'>{item.digits}</p>
                <div className="flex pt-3 justify-between">
                    {item.rate}
                    <p className="text-gray-500">{item.month}</p>
                </div> 
            </div>
        </div>
    ))}
    </div>
  )
}

export default TopCards