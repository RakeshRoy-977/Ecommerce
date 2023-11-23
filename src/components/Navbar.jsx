import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  const cartIteams = useSelector((state) => state.cart)

  return (

    <>
      <div className='navbar'>
      
      <Link className="navlinks" to={"/"}>Ecom Website </Link>
      <Link className='navlinks' to={"Cart"}>Cart {cartIteams.length}</Link>
      <a className='navlinks' href="https://github.com/RakeshRoy-977">Git Profile</a>
    </div>
    </>
    )
}

export default Navbar