import React from 'react'
import PrimaryBannerIcon from './BannerIcon'

function PrimaryBannerBox({img1, img2}) {
    return (
        <div className='flex flex-col justify-between h-[75vh]'>
            <PrimaryBannerIcon img={img1} />
            <PrimaryBannerIcon img={img2} />
        </div>
    )
}

export default PrimaryBannerBox