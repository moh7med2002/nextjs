import React from 'react'
import LoginButton from './LoginButton'

function Navbar() {
  return (
    <div className=' container flex items-center justify-between shadow-md h-[60px]'>
      <h3>Logo</h3>
      <LoginButton/>
    </div>
  )
}

export default Navbar