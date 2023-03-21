import React, {useEffect, useState} from 'react'
import menuArray from '../../data'

const Context = React.createContext()

function ContextProvider({ children }) {
  const [menu, setMenu] = useState([])
  const [cart, setCart] = useState([])

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
  
  return (
    <Context.Provider value={{menu, addToCart, cart, removeCart}}>
      { children }
    </Context.Provider>
  )
}

export { Context, ContextProvider }