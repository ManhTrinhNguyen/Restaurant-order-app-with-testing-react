import React, {useContext} from 'react'
import { Context } from '../Context/Context'
import "./ThankyouPage.css"

function ThankyouPage() {
  const {thankyou} = useContext(Context)
  return (
    <div className='thankyou-container'>
      <h1>{`Thanks, ${thankyou}! Your order is on its way!` }</h1>
    </div>
  )
}

export default ThankyouPage