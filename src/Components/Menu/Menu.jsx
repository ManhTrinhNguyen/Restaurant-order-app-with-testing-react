import React, {useContext} from 'react'
import "./Menu.css"
import { Context } from '../Context/Context'

function Menu({ item }) {
  
  const { addToCart } = useContext(Context)
  
  return (
    <div className='menu-container'>
      <div className='emoji'>{item.emoji}</div>
      <div className='info-container'>
        <h3 className='name'>{item.name}</h3>
        <p className='ingredients'>{item.ingredients}</p>
        <h3 className='price'>${item.price }</h3>
      </div>
      <button onClick={() => {
        addToCart(item.id)
    
      }} className='add-btn'>+</button>
    </div>
  )
}

export default Menu