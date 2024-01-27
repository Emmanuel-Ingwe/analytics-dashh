import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-4'>
        <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-[14px]'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>350</p>
                <p className='text-gray-600'>Daily Revenue</p>
            </div>
        </div>
        <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-[14px]'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>270</p>
                <p className='text-gray-600'>YTD Revenue</p>
            </div>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-[14px]'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>1567</p>
                <p className='text-gray-600'>Customers</p>
            </div>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-[14px]'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$350.000</p>
                <p className='text-gray-600'>Customers</p>
            </div>
        </div>
    </div>
  )
}

export default TopCards