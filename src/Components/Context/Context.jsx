import React, {useEffect, useState, useRef} from 'react'
import menuArray from '../../data'

const Context = React.createContext()

function ContextProvider({ children }) {
  const [menu, setMenu] = useState([])
  const [cart, setCart] = useState([])
  const [completeOrder, setCompleteOrder] = useState(false)
  const [isPaid, setIsPaid] = useState(false)
  const [infomation, setInfomation] = useState({
    name: "",
    cardNumber: "",
    cardCVV : ""
  })
  const [thankyou, setThankyou] = useState("")

  const inputRef = useRef(null)

  useEffect(() => {
    const item = menuArray.map(item => {
      return item
    })
    setMenu(item)
  }, [])

  function addToCart(id) {
    menu.map(item => {
      if (item.id === id) {
        if (!cart.includes(item)) {
          return setCart(preValue => {
            return [...preValue, item]
          })
        }
      }
    })
  }

  function removeCart(id) {
    return setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  function completeOrderFunction() {
    setCompleteOrder(true)
  }


  // Card Details 

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
    setThankyou(infomation.name)
    setInfomation({
      name: "",
      cardNumber: "",
      cardCVV : ""
    })
    inputRef.current.focus()
    setIsPaid(true)
    setCart([])
  }
  
  return (
    <Context.Provider value={{menu, addToCart, cart, removeCart, completeOrderFunction, completeOrder, setCompleteOrder, isPaid, setIsPaid, handleChange, handleSubmit, thankyou ,infomation, inputRef}}>
      { children }
    </Context.Provider>
  )
}

export { Context, ContextProvider }