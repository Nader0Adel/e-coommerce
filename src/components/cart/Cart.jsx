import axios from 'axios'
import {useEffect, useState } from 'react'
import CartProduct from '../cartProduct/CartProduct'
import { Link } from 'react-router-dom'

export default function Cart  () {

  const [Cart, setCart] = useState(null)


  useEffect(()=>{
    getUserCart()
  },[])



 
async function getUserCart(){
  let{data}=await axios.get("https://ecommerce.routemisr.com/api/v1/cart" , {
    headers:{
      token:localStorage.getItem("token")
    }
  })
  setCart(data)
}

  return (
    <>
      <div className="  pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
         <div className="rounded-lg md:w-2/3">
          {Cart?.data.products.map((product,index)=>{
            return  <CartProduct key={index} product={product} setCart={setCart} Cart={Cart} /> 
          }) }
          
          {Cart?.data.products.length ==0 && <h1>No rpoducts in your cart</h1>}
         
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${Cart?.data.totalCartPrice}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$0</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">items</p>
            <p className="text-gray-700">{Cart?.numOfCartItems}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${Cart?.data.totalCartPrice}</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <Link to={"/shippingAddres/"+ Cart?.data._id}   className=" block text-center mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out </Link>
        </div>
      </div>
  </div>
    </>
  )
}
