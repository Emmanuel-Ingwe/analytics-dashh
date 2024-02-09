import React from 'react'

const index = (className) => {
  return (
    <div className="py-4">
            <h1 className='font-semibold text-lg'>{order.name}</h1>
            <div className="flex items-center w-full before h-3 rounded-[40px] bg-[#f5f5f5] my-4">
                <div className={className}></div>
            </div>
            <div className="flex items-center justify-between text-[#22242C]">
              <h1 className="font-normal text-lg">{order.amount}</h1>
              <h1 className="font-normal text-lg">{order.percentage}</h1>
            </div>
          </div>
  )
}

export default index