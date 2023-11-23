import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { remove } from '../redux/CartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Cart = () => {

  const cartitems = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  
  function handelRemove(x){
    dispatch(remove(x.id))
    toast("Product Removed");
  }

  return (

    <div>
      <Navbar/>

      {cartitems.length==0 ? <p className='empty_cart'>CART IS EMPTY</p> : 
      cartitems.map((item)=>(
        <div className='cartCard'>
        <img className='cartpImage' src={item.image} alt="img"/>
        <h5>{item.title}</h5>
        <h5>${item.price}</h5>
        <button onClick={()=>handelRemove(item)} className='Remove_btn'>Remove</button>
        </div>
    ))  }
    
    <ToastContainer />
    </div>

    )
}

export default Cart