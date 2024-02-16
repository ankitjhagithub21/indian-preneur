import React, { useEffect, useState } from 'react'
import Emagazines from './Emagazines'
import { useParams } from 'react-router-dom'
import data from '../data/magazines'

const MagazineDetails = () => {
  const { id } = useParams()
  const [magazine, setMagazine] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const currMag = data.find(mag => mag.id == id)
    if (currMag) {
      setMagazine(currMag)
    } else {
      // Handle case where magazine is not found
      console.error(`Magazine with ID ${id} not found.`)
    }
    setLoading(false)
  }, [id])

  if (loading) {
    return <p>Loading...</p>
  }

  if (!magazine) {
    return <p>Magazine not found.</p>
  }

  return (
    <section>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <img src={magazine.image} alt="magazine" className='img-fluid' />
          </div>
          <div className="col-md-8 d-flex flex-column align-items-start justify-content-center">
            <h1>Title</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi voluptatibus perspiciatis quos reiciendis mollitia inventore, temporibus a labore atque earum harum quis dignissimos sunt, fugit repellat. Fuga recusandae commodi unde.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A sint saepe distinctio, nihil id maiores autem similique? Quas tempora quidem esse, minus accusantium dolore illo adipisci dicta soluta, quo quisquam.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora sit vitae sunt, quae dolorum architecto? Voluptates nihil veniam tempore obcaecati consequuntur alias aperiam excepturi, eveniet, sequi quo aspernatur id placeat?</p>
          </div>
        </div>
      </div>
      <Emagazines />
    </section>
  )
}

export default MagazineDetails
