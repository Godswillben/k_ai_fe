import React from 'react'

function PrimaryNavLink({name, active}) {
  return (
    <div className={`font-DynaPuff ${active ? "font-bold" : ""} animate-wiggle`}>{name}</div>
  )
}

export default PrimaryNavLink