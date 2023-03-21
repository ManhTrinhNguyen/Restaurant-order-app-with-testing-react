import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import Menu from "../Menu/Menu"

function Items() {
  const {menu} = useContext(Context)

  return (
    <>
      {menu.map(item => (
        <Menu key={item.id} item={ item } />
      ))}
    </>
  )
}

export default Items