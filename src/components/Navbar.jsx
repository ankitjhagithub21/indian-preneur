import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const links = [
    {
      name:"home",
      path:"/"

    },
    {
      name:"e-magazines",
      path:"/magazines"

    },
    {
      name:"blogs",
      path:"/blogs"
    },
    {
      name:"contact",
      path:"/contact"
    }
  ]
  return (
   <nav className={`d-flex align-items-center justify-content-center gap-3 flex-wrap`}>
    {
      links.map((link,index)=>{
        return <Link to={link.path} key={index}>{link.name}</Link>
      })
    }
    
    
   </nav>
  )
}

export default Navbar