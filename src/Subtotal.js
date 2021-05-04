import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat 
      renderText={(value) => (
        <>
        <p>
          {/* value passed as a prop */}
          Subtotal (0 items):
          <strong>0</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This Order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={0} //figure out to implement value
      displayType={"text"}
      tousandSeparator={true}
      prefix={"$"}
        />

        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
