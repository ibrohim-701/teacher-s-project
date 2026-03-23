import React from 'react'
import './arrial.css'
import woman from '../../../assets/images/woman1.png'
import gucci from '../../../assets/images/gucci.png'
import goedkope from '../../../assets/images/goedkope.png'
import amzon from '../../../assets/images/amzon.png'


const Arrial = () => {
  return (
    <div>
        <h1>New Arrival</h1>
         <div className="container">
      <div className="card2 large">
       <img className='img2' src={goedkope} alt="" />
        <div className="card-content">
          <h2>PlayStation 5</h2>
          <p>Black and White version of the PS5 coming out on sale.</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="card2 medium">
       
        <img className='img2' src={woman} alt="" />
        <div className="card-content">
          <h2>Women’s Collections</h2>
          <p>Featured woman collections that give you another vibe.</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className='divs'>
      <div className="card2 small">
        <img className='img2' src={amzon} alt="" />
        <div className="card-content">
          <h2>Speakers</h2>
          <p>Amazon wireless speakers.</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="card2 small">
        <img className='img2' src={gucci} alt="" />
        <div className="card-content">
          <h2>Perfume</h2>
          <p>GUCCI INTENSE OUD EDP.</p>
          <button>Shop Now</button>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Arrial