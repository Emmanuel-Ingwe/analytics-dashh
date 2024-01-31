import React from 'react'
import SeachInput from "../components/SearchInput"

const Header = () => {
  return (
    <div className='flex justify-between px-5 py-[18px] items-center border border-b'>
        <h2 className='text-[20px] font-semibold'>Dashboard</h2>
        <div className="flex">
          <SeachInput />
          <div className="flex items-center justify-center">
            <img src="/solar-calender.png" alt="calender-icon" />
            <h1 className="">1 February, 2024</h1>
          </div>
          <div className="rounded-full items-center">
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