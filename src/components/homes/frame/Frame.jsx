import React from 'react'
import bass from '../../../assets/image/b.png'
import './frame.css'

const Frame = () => {
  return (
    <div className='Categories'>
        <div>
            <p>Categories</p>
            <h2>Enhance Your <br /> Music Experience</h2>
            <div className='buttons'>
                <button>23 <br /> Hours</button>
                <button>5 <br /> Days</button>
                <button>59 <br /> Minutes</button>
                <button>35 <br /> Seconts</button>
            </div>
            <button className='buy-now'>Buy now</button>
        </div>

    <img src={bass} alt="" />

        
    </div>
  )
}

export default Frame