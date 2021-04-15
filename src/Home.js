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
          title='The Lean Startup'
          price={29.99}
          image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
          rating={5}
          />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  )
}

export default Home
