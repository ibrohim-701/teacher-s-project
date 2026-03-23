import React from 'react'
import './cardtwo.css'
import left from '../../../assets/image/left.png'
import compyuter from '../../../assets/image/coppyter.png'
import camera from '../../../assets/image/camera.png'
import game from '../../../assets/image/game.png'
import headphone from '../../../assets/image/headphone.png'
import phone from '../../../assets/image/phone.png'
import smartWatch from '../../../assets/image/smartWatch.png'


const Cardtwo = () => {
  return (
    <div>
        <hr />
        <div className='text-img'>
            <h2>Browse By Category</h2>
            <img src={left} alt="" />
        </div>
        <div className='carts-two'>
            <div className='cart-two'>
                <img src={phone} alt="" />
                <p>Phone</p>
            </div>
            <div className='cart-two'>
                <img src={compyuter} alt="" />
                <p>Compyter</p>
            </div>
            <div className='cart-two'>
                <img src={smartWatch} alt="" />
                <p>SmartWatch</p>
            </div>
            <div className='cart-camera'>
                <img src={camera} alt="" />
                <p>Camera</p>
            </div>
            <div className='cart-two'>
                <img src={headphone} alt="" />
                <p>Headphone</p>
            </div>
            <div className='cart-two'>
                <img src={game} alt="" />
                <p>Gaming</p>
            </div>
        </div>

        <hr />
    </div>
  )
}

export default Cardtwo