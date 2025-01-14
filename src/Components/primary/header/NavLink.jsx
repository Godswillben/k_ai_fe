import React from 'react'

function PrimaryNavLink({name, active}) {
  return (
    <div className={`font-DynaPuff ${active ? "font-bold" : ""} animate-wiggle tracking-[.3rem]`}>{name}</div>
  )
}

export default PrimaryNavLink