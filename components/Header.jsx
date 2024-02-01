import React from 'react'
import SeachInput from "../components/SearchInput"

const Header = () => {
  return (
    <div className='flex justify-between px-5 py-[18px] items-center border border-b'>
        <h2 className='text-[20px] font-semibold'>Dashboard</h2>

        <div className="flex items-center justify-between">
          <SeachInput />
          <div className="flex items-center justify-center px-20">
            <div className='flex justify-center justify-self-center px-3'>
              <img src="/solar-calender.png" alt="calender-icon"/>
            </div>
            <h1 className=" font-semibold">February 1, 2024</h1>
          </div>
          <div className="flex border p-2 rounded-full items-center mr-6">
            <img src="/notification-icon.png" alt="" />
          </div>
          <div className="flex border items-center rounded-full p-2">
            <div className="rounded-full">
              <img src="/loginImg.png" alt="" width={29} />
            </div>
            <div className="flex items-center flex-col">
             <h1>Justin Bergson</h1>
             <h2>justin@gmail.com</h2>
            </div>
            <img src="/arrow-down.png" alt="" className="" />
          </div>
        </div>
    </div>
  )
}

export default Header