import React from 'react'
import tom from '../../../assets/images/tom.png'
import emma from '../../../assets/images/emma.png'
import will from '../../../assets/images/will.png'
import './Frame2.css'

const Frama2 = () => {
  return (
    <div className='tom-emma-will'>
      <div>
        <img src={tom} alt="" />
        <h3>Tom Cruise</h3>
        <p>Founder & Chairman</p>
      </div>
      <div>
        <img src={emma} alt="" />
        <h3>Emma Watson</h3>
        <p>Managing Director</p>
      </div>
      <div>
        <img src={will} alt="" />
        <h3>Will Smith</h3>
        <p>Product Designer</p>
      </div>

    </div>
  )
}

export default Frama2