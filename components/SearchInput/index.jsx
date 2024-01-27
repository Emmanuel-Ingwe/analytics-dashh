import React from 'react'

const index = () => {
  return (
    <div
      className="relative flex h-12 w-full items-center lg:h-[3.75rem] lg:w-[25rem]"
    >
      <img src="iconsearch.png" alt="" className='absolute left-3' />
      <input placeholder='Search...'
        className=
          "flex h-12 w-full rounded-[24px] border-[#DADDDD] pl-[36px] bg-white px-[3.5px] py-[2.5] text-sm text-gray-900  file:text-sm file:font-medium placeholder:text-slate-500 focus:ring-2 focus:ring-primaryx-500 focus:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50  dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
      />
    </div>
  )
}

export default index