import React from 'react'

const compClass = "w-40"

function PrimaryBannerIcon({img}) {
  return (
    <img className={compClass +` animate-wiggle`} src={img} alt="" />
  )
}

export default PrimaryBannerIcon

  