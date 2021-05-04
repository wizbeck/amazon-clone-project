import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {

  const [{ basket }, dispatch] = useStateValue();
 


  return (
    <div className="subtotal">
      <CurrencyFormat 
      renderText={(value) => (
        <>
        <p>
          {/* value passed as a prop */}
          Subtotal ({basket?.length} items):
          <strong>{value}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This Order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)} //because its passed as props here, bring value into the strong tag above 
      displayType={"text"}
      tousandSeparator={true}
      prefix={"$"}
        />

        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
