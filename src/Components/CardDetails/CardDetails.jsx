import React, { useState, useRef, useContext } from 'react'
import "./CardDetails.css"
import { Context } from '../Context/Context'

function CardDetails() {

  const {handleChange, handleSubmit, infomation, inputRef} = useContext(Context)

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>Enter Card Details</label>
      <input
          type="text"
          onChange={handleChange}
          value={infomation.name}
          name="name"
          placeholder='Enter your name'
          ref={inputRef}
        />
      
      <input
          type="text"
          onChange={handleChange}
          value={infomation.cardNumber}
          name="cardNumber"
          placeholder='Enter card number' />
      
      <input
          type="text"
          onChange={handleChange}
          value={infomation.cardCVV}
          name="cardCVV"
          placeholder='Enter CVV' /> 
      <button
          className='pay-btn'
          
        disabled={!infomation.name || !infomation.cardNumber || !infomation.cardCVV}
      >Pay</button>
      </form>
    
    </>
    
  )
}

export default CardDetails