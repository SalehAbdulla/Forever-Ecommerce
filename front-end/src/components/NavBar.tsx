import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-5 font-medium'>
      <img src={assets.logo} />
    </div>
  )
}

export default NavBar
