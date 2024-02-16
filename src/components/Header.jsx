import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const Header = () => {
  const [active,setActive] = useState(true)
  return (
    <header className='py-2'>
        <div id='logo' className='text-center'>
          <img src="/logo.png" alt="logo" className='img-fluid' />
        </div>
        <hr />
      
        
        <Navbar active={active} setActive={setActive}/>
    </header>
  )
}

export default Header