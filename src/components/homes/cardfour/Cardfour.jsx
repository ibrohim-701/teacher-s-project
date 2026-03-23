import React from 'react'
import butsi from '../../../assets/images/butsi.png'
import camera2 from '../../../assets/images/camera2.png'
import car from '../../../assets/images/car.png'
import ceser from '../../../assets/images/cesar.png'
import cream from '../../../assets/images/cream.png'
import gamepult2 from '../../../assets/images/game-pult2.png'
import kiyim2 from '../../../assets/images/kiyim2.png'
import laptop from '../../../assets/images/laptop.png'
import left from '../../../assets/image/left.png'
import './cardfour.css'

const Cardfour = () => {
  return (
     <div>
        <div className='text-img'>
        <h2>Flash Sales</h2>
        <img src={left} alt="" />
        </div>
        <section className='scn'>
        <div className='cart'>
            <div>
                <img src={ceser} alt="" />
                <button className='cart-buttoni'>Add to card</button>
            </div>
            <h4>Breed Dry Dog Food</h4>
            <p>$100       </p>
        </div>
        <div className='cart'>
            <div>
                <img src={camera2} alt="" />
                <button className='cart-buttoni'>Add to card</button>
            </div>
            <h4>CANON EOS DSLR Camera</h4>
            <p>$360       </p>
        </div>
        <div className='cart'>
            <div>
                <img src={laptop} alt="" />
                <button className='cart-buttoni'>Add to card</button>
            </div>
            <h4>ASUS FHD Gaming Laptop</h4>
            <p>$700        </p>
        </div>
        <div className='cart'>
            <div>
                <img className='cream' src={cream} alt="" />
                <button className='cart-buttoni'>Add to card</button>
            </div>
            <h4>Curology Product Set  </h4>
            <p>$500       </p>
        </div>
    </section>
        <section className='scn'>
            <div className='cart'>
                <div>
                    <img src={car} alt="" />
                    <button className='cart-buttoni'>Add to card</button>
                </div>
                <h4>Kids Electric Car</h4>
                <p>$960        </p>
            </div>
            <div className='cart'>
                <div>
                    <img src={butsi} alt="" />
                    <button className='cart-buttoni'>Add to card</button>
                </div>
                <h4>Jr. Zoom Soccer Cleats</h4>
                <p>$1160       </p>
            </div>
            <div className='cart'>
                <div>
                    <img src={gamepult2} alt="" />
                    <button className='cart-buttoni'>Add to card</button>
                </div>
                <h4>GP11 Shooter USB Gamepad</h4>
                <p>$660     </p>

            </div>
            <div className='cart'>
                <div>
                    <img src={kiyim2} alt="" />
                    <button className='cart-buttoni'>Add to card</button>
                </div>
                <h4>Quilted Satin Jacket</h4>
                <p>$660  </p>
            </div>
        </section>
        <button className='button'>View All Products</button>
    </div>
  )
}

export default Cardfour