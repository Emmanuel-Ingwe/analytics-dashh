import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <div className="w-full lg:col-span-2 relative border rounded-xl p-4">
      <div className="justify-between flex items-center font-semibold">
        <h1 className="">Last Orders</h1>
        <h1 className="text-[#34CAA5] font-semibold"><Link href="/">See Less..</Link></h1>
      </div>
      <div className="overflow-y-scroll lg:overflow-hidden">
        <table className="table-auto w-full">
        <thead>
            <tr className=' text-left font-medium text-[#9CA4AB]'>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">country</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border px-4 py-2">Kristine</td>
                <td className="border px-4 py-2">ALL</td>
                <td className="border px-4 py-2">$3000</td>
                <td className="border px-4 py-2">Sufficient</td>
                <td className="border px-4 py-2">Mexico</td>  
            </tr>
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default index