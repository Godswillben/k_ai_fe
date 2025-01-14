import React from 'react'
import logo from "../../../assets/karuna_Logo.png"
import PrimaryNavLink from './NavLink'
import PrimaryAuthBtn from './Button'
import img from "../../../assets/bg-header.svg"

function PrimaryHeader() { 
  return (
    <div className='w-[100vw] bg-white py-6 shadow-xl shadow-[#EC7F8C]/[.05]'>
      <div className='flex justify-between items-center w-11/12 mx-auto'>
        <img className='relative w-[9rem] animate-float duration-[1000ms]' src={logo} alt="" />
        <div className='flex w-1/4 justify-between'> 
          <PrimaryNavLink active={true} name="Home" />
          <PrimaryNavLink name="About" />
          <PrimaryNavLink name="Contact Us" /> 
        </div>
        <div className='flex w-1/6 justify-between'>
          <PrimaryAuthBtn name="Log In" color="border-[#029CE3]" />
          <PrimaryAuthBtn name="Register" color="border-[#D6CD06]" />  
        </div>
      </div>
    </div>
  )
}

export default PrimaryHeader