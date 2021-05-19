import React, { forwardRef } from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import FlipMove from 'react-flip-move';


function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img 
          className="checkout__ad" 
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" 
          />

          <div>
            <h3>Hello, {user?.email.split("@")[0]}</h3>
            <h2 className="checkout__title">Your Shopping Cart</h2> 
            
            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>

          <div className="checkout__right">
            <Subtotal />
          </div>
      </div>
    </div>
  )
}

export default Checkout
