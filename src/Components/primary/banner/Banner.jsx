import React from 'react'
import ufo from "../../../assets/ufo.svg"
import scroll from "../../../assets/scroll.svg"
import canva from "../../../assets/palette.svg"
import saxophone from "../../../assets/saxophone.svg"
import PrimaryBannerBox from './BannerBox'

function PrimaryBanner() {
  return (
    <div className='mt-[4rem] flex w-11/12 mx-auto justify-between items-center'>
      <PrimaryBannerBox img1={ufo} img2={scroll} />
      <p className='text-[5rem] text-center w-2/3 font-Elsie leading-[11rem] tracking-[.6rem] animate-float relative'>
        Using Ai And Interactive Entertainment To Teach Kids New Skills, And Help Them Be Creative
      </p>
      <div>
        <PrimaryBannerBox img1={canva} img2={saxophone} />
      </div>
    </div>
  )
}

export default PrimaryBanner