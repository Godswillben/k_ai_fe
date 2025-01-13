import React from 'react'

function PrimaryAuthBtn({ name, color }) {
    return (
        <div className={`font-Annie ${color} border w-[7rem] text-lg text-center py-1.5 tracking-[.2rem] `}>
            {name}
        </div>
    )
}

export default PrimaryAuthBtn