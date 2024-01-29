import React from 'react'
import SeachInput from "../components/SearchInput"

const Header = () => {
  return (
    <div className='flex justify-between px-5 py-[18px] items-center border border-b'>
        <h2 className='text-[20px] font-semibold'>Dashboard</h2>
        <SeachInput />
        <div className="flex border rounded-full p-4">
         <h2>Justin Bergson</h2>
        </div>
    </div>
  )
}

export default Header