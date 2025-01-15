import React from 'react'

function AuthFormInputBox({label, type="text", placeholder}) {
    return (
        <div className='mb-8'>
            <label className='block font-Grand font-light tracking-[.3rem] text-lg mb-2 animate-banner_wiggle' htmlFor={label}>{label}</label>
            <input className='outline-none px-4 border border-[#48ABD9] w-full py-4 rounded-md font-Annie tracking-[.3rem]' type={type} name="" id={label} placeholder={placeholder} />
        </div>
    )
}

export default AuthFormInputBox