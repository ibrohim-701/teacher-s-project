import './main2.css'
import car from '../../../assets/images/car.png'
import airpots from '../../../assets/images/airpots.png'
import trues from '../../../assets/images/true.png'
const Main2 = () => {
  return (
    <div className='img-and-card'>
        <div>
            <img src={car} alt="" />
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
        </div>
        <div>
            <img src={airpots} alt="" />
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
        </div>
        <div>
            <img src={trues} alt="" />
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We reurn money within 30 days</p>
        </div>

    </div>
  )
}

export default Main2