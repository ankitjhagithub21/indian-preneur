import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        navigate(`/blogs/blog-slug`); // Navigate to the desired route
    };
    return (
        <div className="col-lg-4 col-md-6" onClick={handleClick}>
            <img src="https://theindustryinsight.com/wp-content/uploads/2022/04/magazines-350x250.jpg" alt="blog" className='img-fluid rounded' />
            <h2 className='fs-5 text-primary mt-2'>Best Industrial Magazines in India</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem molestiae error quibusdam accusamus quam, voluptat....</p>
        </div>
    )
}

export default Blog