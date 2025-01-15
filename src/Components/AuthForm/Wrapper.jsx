import React from 'react'
import logo from "../../assets/karuna_Logo.png"
import ground from "../../assets/authform/ground.svg"

function PrimaryAuthWrapper({ children, img, header }) {
  return (
    <div className='flex justify-between h-[98vh]'>
      <div className='relative w-2/6 ml-[6rem] h-full '>
        <img className='w-[10rem] mx-auto mt-[4rem] animate-banner_wiggle' src={logo} alt="" />
        <p className='font-Elsie tracking-[.4rem] text-center text-[2.5rem] mt-5 mb-16 relative animate-banner_float'>{header}</p>
        {children}
      </div>
      <div className='w-2/5 h-full border rounded-xl overflow-hidden my-2 mr-2'>
        <img className='object-cover relative h-full' src={img} alt="" />
      </div>
    </div>
  )
}

export default PrimaryAuthWrapper