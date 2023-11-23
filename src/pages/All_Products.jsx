import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../redux/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const All_Products = () => {
  const [data,setData]=useState([]);
  const [isloading,setisloading]=useState(false);

  const dispatch = useDispatch()

  useEffect(()=>{
    const api= async ()=>{
      setisloading(true)
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      setData(data)
      setisloading(false)
    }
    api()
  },[])

  function handelAddtocartBtn(e){
    dispatch(add(e))
    toast("Product Added to Cart");
  } 

  return (
    <div className="all_product_box">
     {data.map(x=>(
      <div key={x.id} className="card">
        <img className='pImage' src={x.image} alt="product images" />
        <span>{x.title}</span>
        <span className='pPrice'>${x.price}</span>
        <button onClick={()=>handelAddtocartBtn(x)} className='addtocartBtn'>Add to Cart</button>
      </div>
     ))}

    <ToastContainer />
    </div>
  )
}

export default All_Products