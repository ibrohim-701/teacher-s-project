import React from 'react'
import './Main.css'
import iphone from '../../../assets/image/iphone.jpg'
const Main = () => {
  return (
    <div className="konteyner">

    <div className="yon-panel">
      <ul>
        <li>Women's Fashion</li>
        <li>Men's Fashion</li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby's & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
    </div>

   
    <div className="banner">
      <div className="banner-chap">
        <div className="logo-matn">
          <span>iPhone 14 Series</span>
        </div>

        <h1 className='font-size:48px;'>
        Up to 10% <br /> off Voucher
        </h1>

        <button className="sotib-olish">Shop now →</button>
      </div>

      <div className="banner-ong">
        <img
          src={iphone}
          alt="iphone"
        />
      </div>
    </div>
  </div>
  )
}

export default Main