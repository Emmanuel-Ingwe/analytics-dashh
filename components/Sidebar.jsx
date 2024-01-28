import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='absolute w-20 h-[120%] p-4 bg-[#F7F8FA] border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className=' text-white p-3 rounded-lg inline-block'>
              <img width={40} src="/logo.png" height={40} alt='logo'/>
            </div>
          </Link>
          {/* <span className='border-b-[1px] border-gray-200 w-full p-2'></span> */}
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block'>
              <Image width={40} src="/icon1.png" height={40} alt='icon1'/>
            </div>
          </Link>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block'>
              <Image width={40} src="/trend-up.png" height={40} alt='trendup'/>
            </div>
          </Link>
          <Link href='/customers'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block'>
              <Image width={40} src="/profile-2user.svg" height={40} alt='profile'/>    
            </div>
          </Link>
          <Link href='/orders'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block'>
              <Image width={40} src="/box.svg" height={40} alt='orders'/>
            </div>
          </Link>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block'>
              <Image width={40} src="/discount-shape.svg" height={40} alt='setting'/>
            </div>
          </Link>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block'>
              <Image width={40} src="/info-circle.svg" height={40} alt='info'/>
            </div>
          </Link>

          <div className=" bg-white p-[8px] rounded-[100px]">
            <Link href='/'>
              <div className='bg-[#34CAA5] hover:bg-gray-200 cursor-pointer my-1 p-[6px] rounded-full inline-block'>
                <Image width={40} src="/brightness 1.svg" height={40} alt='info'/>
              </div>
            </Link>
            
            <Link href='/'>
              <div className=' hover:bg-gray-200 cursor-pointer my-1 p-1 rounded-lg inline-block'>
                <Image width={40} src="/moon 1.svg" height={40} alt='info'/>
              </div>
            </Link>
          </div>

          <div className="mt-28">
            <Link href='/'>
              <div className=' hover:bg-gray-200 cursor-pointer my-1 p-3 rounded-full inline-block'>
                <Image width={40} src="/arrow-right.svg" height={40} alt='info'/>
              </div>
            </Link>
            <Link href='/'>
              <div className=' hover:bg-gray-200 cursor-pointer my-1 p-3 rounded-full inline-block'>
                <Image width={40} src="/setting-2.svg" height={40} alt='info'/>
              </div>
            </Link><Link href='/'>
              <div className=' hover:bg-gray-200 cursor-pointer my-1 p-3 rounded-full inline-block'>
                <Image width={40} src="/logout.svg" height={40} alt='info'/>
              </div>
            </Link>
          </div>

        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
