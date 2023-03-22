import React, {useContext, useState} from 'react'
import { Context } from '../Context/Context'
import "./Cart.css"

function Cart() {
  const { cart, removeCart, completeOrderFunction } = useContext(Context)

  
  function totalPriceFunc(arr) {
    let price = 0
     arr.forEach(item => {
      price += item.price
     }) 
    
    return price
  }

  return (
    <div className='cart-container'>
      <h1>Your order</h1>
      {cart.map(item => (
        <div key={item.id} className='single-item-container'>
          <h2>{item.name}</h2>
          <button onClick={() => {
            removeCart(item.id)
          }}>remove</button>
          <span>${item.price}</span>
        </div>
      ))}
      <div className='total-price-container'>
        <h2>Total price:</h2>
        <span>${ totalPriceFunc(cart)}</span>
      </div>
      <button onClick={completeOrderFunction} className='complete-btn'>Complete Order</button>
    </div>
   
  )
}

export default Cart