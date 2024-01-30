import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <div className="w-full lg:col-span-2 relative border rounded-xl p-4">
      <div className="justify-between flex items-center font-semibold">
        <h1 className="">Last Orders</h1>
        <h1 className="text-[#34CAA5] font-semibold"><Link href="/"> See Less..</Link></h1>
      </div>
      <div className="overflow-y-scroll lg:overflow-hidden">
        <table className="table-auto w-full">
        <thead>
            <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Range</th>
            <th className="px-4 py-2">Country</th>
            <th className="px-4 py-2">Rate</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border px-4 py-2">Kristine</td>
                <td className="border px-4 py-2">$3000</td>
                <td className="border px-4 py-2">ALL</td>
                <td className="border px-4 py-2">Canada</td>
                <td className="border px-4 py-2">Sufficient</td>
            </tr>
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default index