import React from 'react'
import { TopData } from '@/data/data'


const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-4'>
    {TopData.map((item, id) => (
        <div key={id} className='lg:col-span-1 col-span-1 bg-white flex flex-col border p-4 rounded-[14px]'>
            <div className="flex items-center justify-between">
                <div className="flex border rounded-full items-center p-2">
                    {item.statusIcon}
                </div>
                {item.flowIcon}
            </div>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{item.status}</p>
                <p className='text-gray-600'>{item.digits}</p>
                <div className="flex">
                    {item.rate}
                    <p className="">{item.month}</p>
                </div> 
            </div>
        </div>
    ))}
    </div>
  )
}

export default TopCards