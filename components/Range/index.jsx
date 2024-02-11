import React from 'react'

const index = ({bgColor, width}) => {
  return (
    <div className={`dd ${bgColor} ${width} h-3 absolute rounded-full `}></div>
  )
}

export default index