import React from 'react'
import PrimarySection2Box from './SectionBox'
import bg1 from "../../../assets/Primary/section2/bg1.svg"
import bg2 from "../../../assets/Primary/section2/bg2.svg"
import bg3 from "../../../assets/Primary/section2/bg3.svg"
import img1 from "../../../assets/Primary/section2/1.webp"
import img2 from "../../../assets/Primary/section2/2.jpeg"
import img3 from "../../../assets/Primary/section2/3.jpg"

function HowItWorks() {
    return (
        <div className='py-[8rem]'>
            <p className='text-[4rem] text-center font-Elsie animate-banner_wiggle mb-20 tracking-[.5rem]'>
                How It Works
            </p>
            <PrimarySection2Box bg_img={bg1} 
            head_col="text-[#D3CC00]"
            head="Compelling Stories For Kids."
            body="Entertaining movies for kids across several genre keeping your kids entertained."
            img={img1} />
            <PrimarySection2Box bg_img={bg2} flow="flex-row-reverse"
            head_col={"text-[#1A3FFA]"}
            head="Subconscious learning sticks longer."
            body="The best type of learning is one where it doesn't feel like learning."
            img={img2} />
            <PrimarySection2Box bg_img={bg3} flow="flex-row"
            head_col="text-[#0FAE00]"
            head="Productive kids for Parents."
            body="Parents can rest easy knowing their kids while being entertained are also learn."
            img={img3} />
        </div>
    )
}

export default HowItWorks