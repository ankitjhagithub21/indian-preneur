import React from 'react'
import Magazine from '../components/Magazine'
import data from '../data/magazines'
const Emagazines = () => {
    return (
        <section>
            <div className="container-fluid my-5">
                <h1 className='text-center my-5'>E-Magazines</h1>
                <div className="row" id='magazines'>
                  {
                    data.map((magazine)=>{
                        return <Magazine key={magazine.id} data={magazine}/>
                    })
                  }
                  
                   
                </div>
            </div>
        </section>
    )
}

export default Emagazines