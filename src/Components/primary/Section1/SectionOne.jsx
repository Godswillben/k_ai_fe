import React from 'react'
import bgImg from "../../../assets/Primary/section1/section1-bg.svg"
import img from "../../../assets/Primary/section1/moms-play.webp"

function PrimarySectionOne() {
  return (
    <div className='relative bg-[#F0F0F0] mt-[14rem] py-[14rem]'>
        <img className='absolute bottom-0 w-full h-[80vh] object-cover' src={bgImg} alt="" />
        <div className='z-10 relative flex justify-between items-center w-11/12 mx-auto'>
            <div className='w-2/4 animate-banner_float relative'>
                <p className='font-Grand text-[5rem] tracking-[.4rem]'>SATISFYING PARENT AND CHILD.</p>
                <p className='font-Lexend mt-16 text-3xl tracking-[.3rem] leading-[4.5rem]'>Children would rather have fun while parents want their kids to be productive. We provide both.</p>
            </div>
            <img className='w-2/5 rounded-lg animate-banner_wiggle' src={img} alt="" />
        </div>
    </div>
  )
}

export default PrimarySectionOne