import React from 'react'
import { Link } from 'react-router-dom'

function AuthFormSubmitBtn({text, path="/draw"}) {
  return (
    <Link to={path}>
    <div className='animate-float relative bg-[#E3DC25] cursor-pointer py-3 shadow-lg shadow-[#BFB800] text-center rounded-full w-[12rem] mx-auto font-Grand tracking-[.2rem]'>{text}</div>
    </Link>
  )
}

export default AuthFormSubmitBtn