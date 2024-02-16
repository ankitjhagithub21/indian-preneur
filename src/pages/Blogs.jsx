import React from 'react'
import Blog from '../components/Blog'

const Blogs = () => {
  return (
    <section id='blogs'>
        <div className="container-fluid my-5">
          <h1 className='text-center'>Blogs</h1>
            <div className="row">
              <Blog/>
              <Blog/>
              <Blog/>
              <Blog/>
              <Blog/>
              <Blog/>
                
            </div>
        </div>
    </section>
  )
}

export default Blogs