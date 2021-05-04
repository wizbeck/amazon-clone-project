import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/adrive/photos/gateway/APH_feb-21_hero_1x._CB661372629_.jpg" alt="" />
        <div className="home__row">
          <Product 
          id='123432345' 
          title='The Lean Startup'
          price={29.99}
          image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
          rating={5}
          />
          <Product 
          id='9082432'
          title='[WiFi Projector] QKK Upgraded 6000Lumens Projector, Full HD 1080P Supported Mini Projector [Tripod Included] 200” Display'
          price={129.99}
          image='https://images-na.ssl-images-amazon.com/images/I/61UjPuZ7euL._AC_SL1000_.jpg'
          rating={4}/>
        </div>
        <div className="home__row">
          <Product 
            id='12354543'
            title='Office Chair Caster Wheels,Set of 5 Heavy Duty 2.5 Inch Upgraded Office Chair Replacement Wheels,Smooth and Safe for Hardwood,Tile Floors-Universal Fit for Game Office Chair (2.5"Plug-in_FBA, Black)'
            price={18.99}
            image='https://images-na.ssl-images-amazon.com/images/I/610TaZq84RL._AC_SL1001_.jpg'
            rating={5}/>
          <Product
            id='737373737' 
            title='Logitech G PRO X Superlight Wireless Gaming Mouse - White'
            price={229.00}
            image='https://images-na.ssl-images-amazon.com/images/I/61ykKLbddNL._AC_SL1500_.jpg'
            rating={5}/>
          <Product 
            id='123765'
            title='Violence. Speed. Momentum.'
            price={16.20}
            image='https://images-na.ssl-images-amazon.com/images/I/71I+HZrb19L.jpg'
            rating={5}/>
        </div>
        <div className="home__row">
          <Product 
            id='987456'
            title='LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99 Percentage Color Gamut and HDR10 Compatibility, Black'
            price={525.00}
            image='https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg'
            rating={4}/>
        </div>
      </div>
    </div>
  )
}

export default Home
