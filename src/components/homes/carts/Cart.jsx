import React from 'react'
import './Cart.css'
import klavatura from '../../../assets/image/klavatura.png'
import manitor from '../../../assets/image/manitor.png'
import stol from '../../../assets/image/stol.png'
import gamepult from '../../../assets/image/game-pult.png'
import left from '../../../assets/image/left.png'


const Cart = () => {
  return (
    <div>
        <div className='text-img'>
        <h2>Flash Sales</h2>
        <img src={left} alt="" />
        </div>
        <section className='scn'>
            <div className='cart'>
                <div>
                    <img src={gamepult} alt="" />
                    <button className='cart-buttoni'>Add to card</button>
                </div>
                <h4>HAVIT HV-G92 Gamepad</h4>
                <p>$120</p>
                <p></p>
            </div>
            <div className='cart'>
                <div>
                    <img src={klavatura} alt="" />
                    <button className='cart-buttoni'>Add to card</button>
                </div>
                <h4>AK-900 Wired Keyboard</h4>
                <p>$960</p>
                <p></p>
            </div>
            <div className='cart'>
                <div>
                    <img src={manitor} alt="" />
                    <button className='cart-buttoni'>Add to card</button>
                </div>
                <h4>IPS LCD Gaming Monitor</h4>
                <p>$370</p>
                <p></p>
            </div>
            <div className='cart'>
                <div>
                    <img src={stol} alt="" />
                    <button className='cart-buttoni'>Add to card</button>
                </div>
                <h4>S-Series Comfort Chair </h4>
                <p>$375</p>
                <p></p>
            </div>
        </section>
        <button className='button'>View All Products</button>
    </div>
  )
}

export default Cart