import React from 'react'
import "./Card.css"
import saller from "../../../assets/images/saller.png"
import mopnthly from "../../../assets/images/mopnthly.png"
import customer from "../../../assets/images/customer.png"
import anual from "../../../assets/images/anual.png"

const Card = () => {
  return (
    <div className='card3'>
        <div>
            <img src={saller} alt="" />
            <h3>10.5k</h3>
            <p>Sallers active our site</p>
        </div>
        <div className='card-mopnthly'>
            <img src={mopnthly} alt="" />
            <h3>33k</h3>
            <p>Mopnthly Produduct Sale</p>
        </div>
        <div>
            <img src={customer} alt="" />
            <h3>45.5k</h3>
            <p>Customer active in our site</p>
        </div>
        <div>
            <img src={anual} alt="" />
            <h3>25k</h3>
            <p>Anual gross sale in our site</p>
        </div>
    </div>
  )
}

export default Card