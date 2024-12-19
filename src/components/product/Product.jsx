import React from 'react'
import Products from '../products/Products'
import RatingStars from '../ratingStars/RatingStars'
import { Link } from 'react-router-dom'
import { addProductTOCart } from '../../cartService'

export default function Product( {Product} ) {


  
  return (

    <div className="max-w-2xl mx-auto">
      
        <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <Link to={"/productDetails/" + Product._id}>
            <img className="rounded-t-lg p-8" src={Product.imageCover} alt="product image"/>
              </Link>
            <div className="px-5 pb-5">
              <Link to={"/productDetails/" + Product._id}>
                <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white line-clamp-1">{Product.title}</h3>
                <p className="line-clamp-2 text-gray-900 font-semibold text-xl tracking-tight dark:text-gray-">{Product.description}</p>
              </Link>
            <RatingStars rating={Product.ratingsAverage}/>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{Product.price}</span>
                <button onClick={()=>addProductTOCart(Product._id )}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                  to cart</button>
              </div>
            </div>
        </div>   
      </div>

)
}
