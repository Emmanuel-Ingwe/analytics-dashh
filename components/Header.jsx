import React from 'react'
import SeachInput from "../components/SearchInput"

const Header = () => {
  return (
    <div className='flex justify-between px-5 py-[18px] items-center border border-b'>
        <h2 className='text-[20px] font-semibold'>Dashboard</h2>

        <div className="flex items-center justify-between">
          <SeachInput />
          <div className="flex items-center justify-center">
            <img src="/solar-calender.png" alt="calender-icon" />
            <h1 className="">February 1, 2024</h1>
          </div>
          <div className="flex border p-2 rounded-full items-center">
            <img src="/notification-icon.png" alt="" />
          </div>
          <div className="flex border rounded-full p-4">
          <h2>Justin Bergson</h2>
          </div>
        </div>
    </div>
  )
}

export default Header