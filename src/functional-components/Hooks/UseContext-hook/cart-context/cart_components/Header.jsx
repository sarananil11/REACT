import React, { useContext } from 'react'
import {CartContext} from '../CartContext'

const Header = () => {
  const {cart} = useContext(CartContext);

  const totalQty = cart.reduce((sum, item)=> sum + item.qty,0);
  const totalPrice = cart.reduce((sum,item)=>sum + item.price*item.qty,0);
  return (
   <header className='header'>
    <h1>My Shopping Cart🛒</h1>
    <div className="summary">
      <p>items:{totalQty}</p>
      <p>total:{totalPrice}</p>
    </div>
   </header>
  )
}

export default Header
