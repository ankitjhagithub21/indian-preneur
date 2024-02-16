import React from 'react'
import Blogs from './Blogs'

const BlogDetails = () => {
  return (
    <section>
        <div className="container-fluid my-5">
           <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://theindustryinsight.com/wp-content/uploads/2022/04/magazines-350x250.jpg" alt="blog" className='img-fluid ' />
            </div>
            <div className="col-md-6 ">
            <h1>Best Industrial Magazines in India</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, voluptatum porro voluptas debitis rem maxime quia officia ipsum error, adipisci molestias quae similique omnis eum quo reprehenderit harum id consequatur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis repellat quos sapiente natus, sit vel atque ducimus voluptate suscipit explicabo velit, fugit in, quis expedita iste quia ut laboriosam.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit cum alias deleniti ducimus voluptatem dolorem nobis, qui reiciendis, quae, itaque illo. Quis quos eius qui? Adipisci excepturi facilis delectus minima.</p>
            </div>
           </div>
        </div>
        <Blogs/>
    </section>
  )
}

export default BlogDetails