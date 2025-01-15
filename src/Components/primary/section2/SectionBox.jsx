import React from 'react'

function PrimarySection2Box({bg_img, flow="flex-row", head, head_col, body, img}) {
    return (
        <div className='relative w-11/12 mx-auto py-[10rem] border-b mb-[6rem]'>
            <img className='absolute w-full bottom-0 ' src={bg_img} alt="" />
            <div className={`relative flex ${flow} justify-between items-center`}>
                <div className='w-1/2 animate-banner_float relative'>
                    <p className={`font-Grand mb-16 ${head_col} text-[4rem] leading-[7.4rem] tracking-[.8rem]`}>{head}</p>
                    <p className='font-Lexend text-3xl leading-[4rem] tracking-[.3rem]'>{body}</p>
                </div>
                <img className='rounded-2xl w-2/5 animate-banner_wiggle' src={img} alt="" />
            </div>
        </div>
    )
}

export default PrimarySection2Box