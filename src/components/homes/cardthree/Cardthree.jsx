import React from 'react'
import sumka from '../../../assets/image/shumka.png'
import kiyim from '../../../assets/image/kiyim.png'
import kalonka from '../../../assets/image/kalonka.png'
import book from '../../../assets/image/booc.png'
const Cardthree = () => {
  return (
    <div>
        <div className='text-img'>
        <h2>Best Selling Products</h2>
        <button></button>
        </div>
        <section className='scn'>
            <div className='cart'>
                <div>
                    <img src={kiyim} alt="" />
                    <button className='cart-buttoni'>Add to card</button>
                </div>
                <h4>The north coat</h4>
                <p>$260</p>
                <p></p>
            </div>
            <div className='cart'>
                <div>
                    <img src={sumka} alt="" />
                    <button className='cart-buttoni'>Add to card</button>
                </div>
                <h4>Gucci duffle bag</h4>
                <p>$960</p>
                <p></p>
            </div>
            <div className='cart'>
                <div>
                    <img src={kalonka} alt="" />
                    <button className='cart-buttoni'>Add to card</button>
                </div>
                <h4>RGB liquid CPU Cooler</h4>
                <p>$160</p>
                <p></p>
            </div>
            <div className='cart'>
                <div>
                    <img src={book} alt="" />
                    <button className='cart-buttoni'>Add to card</button>
                </div>
                <h4>Small BookSelf </h4>
                <p>$360</p>
                <p></p>
            </div>
        </section>
        <button className='button'>View All Products</button>
    </div>
  )
}

export default Cardthree