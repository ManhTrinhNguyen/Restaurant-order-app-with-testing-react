import React, { useState } from 'react'
import "./CardDetails.css"
import ThankyouPage from '../ThankyouPage/ThankyouPage'

function CardDetails() {
  const [infomation, setInfomation] = useState({
    name: "",
    cardNumber: "",
    cardCVV : ""
  })
  
  const handleChange = (e) => {
    const { value, name } = e.target
    setInfomation(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInfomation(prevValue => {
      return {
        ...prevValue
      }
    })
  }
  console.log(infomation)

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>Enter Card Details</label>
      <input
          type="text"
          onChange={handleChange}
          value={infomation.name}
          name="name"
          placeholder='Enter your name' />
      
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
      
      <h1>{ infomation.name }</h1>
    </>
    
  )
}

export default CardDetails