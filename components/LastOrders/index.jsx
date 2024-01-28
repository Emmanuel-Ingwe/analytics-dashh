import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <div className="">
      <div className="justify-between flex items-center">
        <h1 className="">Last Orders</h1>
        <h1 className=""><Link href="/"> See Less</Link></h1>
      </div>
        <table className="table-auto ">
        <thead>
            <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            </tr>
        </thead>
        <tbody>
            {[1, 2, 3, 4, 5].map((row) => (
            <tr key={row}>
                <td className="border px-4 py-2">{row}</td>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">30</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  )
}

export default index