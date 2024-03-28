import React from 'react'
import "./Cart.css"
const Cart = () => {
  return (

        <>
        <div className='header'>

        </div>
                <div className="cartItemsDown">
            <div className="cartItemsTotal">
                <h1>CARD TOTALS</h1>
                <div>
                    <div className="cartTotalItem">
                        <p>Order id</p>
                        <p>0</p>
  </div>
                    <hr />
                    <div className="cartTotalItem">
                        <p>Order Name</p>
                        <p></p>
                    </div>
                    <hr />
                    <div className="cartTotalItem">
                        <p>Amount</p>
                        <p>$0</p>
                    </div>
                    <hr />
                    <div className="cartTotalItem">
                        <h3>Total</h3>
                        <h3>$0</h3>

                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                </div>
                <div className="PromoCode">
                <p>If you have promo code, Enter it here</p>
                    <div className="promoBox">
                        <input type="text" placeholder='Enter your promoCode' />
                        <button>Submit</button>
                    </div>
                </div>
            
        </div>
        </>

  )
  }

export default Cart