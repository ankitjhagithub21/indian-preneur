import React from 'react'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="container py-5">
        <h2 className='display-5 fw-bold'>Contact Us</h2>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" placeholder='Enter Your Name'/>
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label" >
            Email
          </label>
          <input type="email" className="form-control" id="email" placeholder="Enter Your Email"/>
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter Your Address"
          />
        </div>
        
        <div className="col-12">
        <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea name="message" id="message"  rows="5" placeholder='Enter Your Message' className='form-control'></textarea>
        </div>
      
       
        <div className="col-12">
          <button type="submit" className="btn btn-success">
            Send Message
          </button>
        </div>
      </form>
      </div>

    </section>
  )
}

export default Contact