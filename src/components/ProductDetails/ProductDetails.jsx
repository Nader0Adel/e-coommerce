import axios from 'axios';
import  {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RatingStars from '../ratingStars/RatingStars';
import LoadingScreen from '../loadingscreen/LaodingScreen';
import ProductImgSlider from '../productImgSlider/ProductImgSlider';
import RelatedProducts from '../relatedProducts/RelatedProducts';
import { addProductTOCart } from '../../cartService';



export default function ProductDetails() {
    let {id} = useParams()

    const [productDetails, setProductDetails] = useState(null)
    const [relatedProducts, setRelatedProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      getProductDetails();
    }, [id])

    
    
    



    async function getProductDetails() {
        setIsLoading(true)
        let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/products/" + id)
        setProductDetails(data.data)
        getRelatedProducts(data.data?.category._id)     
        setIsLoading(false)
    } 

    async function getRelatedProducts(categoryId) {
        setIsLoading(true)

        let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/products/" , {
            params : {
                "category" : categoryId
            }
        })
        setRelatedProducts(data.data);  
        setIsLoading(false)

        
    }

    // if (isLoading){
    //     return<LoadingScreen/>
    // }

  return (
<>
    {
    isLoading ? <LoadingScreen/> 
    :
        <div className="bg-white">
        
        {/* <div className="fixed right-0 top-10 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium text-gray-700">Your cart</h3>
                <button className="text-gray-600 focus:outline-none">
                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <hr className="my-3"/>
            <div className="flex justify-between mt-6">
                <div className="flex">
                    <img className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt=""/>
                    <div className="mx-3">
                        <h3 className="text-sm text-gray-600">Mac Book Pro</h3>
                        <div className="flex items-center mt-2">
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                            <span className="text-gray-700 mx-2">2</span>
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <span className="text-gray-600">20$</span>
            </div>
            <div className="flex justify-between mt-6">
                <div className="flex">
                    <img className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt=""/>
                    <div className="mx-3">
                        <h3 className="text-sm text-gray-600">Mac Book Pro</h3>
                        <div className="flex items-center mt-2">
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                            <span className="text-gray-700 mx-2">2</span>
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <span className="text-gray-600">20$</span>
            </div>
            <div className="flex justify-between mt-6">
                <div className="flex">
                    <img className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt=""/>
                    <div className="mx-3">
                        <h3 className="text-sm text-gray-600">Mac Book Pro</h3>
                        <div className="flex items-center mt-2">
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                            <span className="text-gray-700 mx-2">2</span>
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <span className="text-gray-600">20$</span>
            </div>
            <div className="mt-8">
                <form className="flex items-center justify-center">
                    <input className="form-input w-48" type="text" placeholder="Add promocode"/>
                    <button className="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <span>Apply</span>
                    </button>
                </form>
            </div>
            <a className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <span>Chechout</span>
                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
        </div> */}
        <main className="my-8">
            <div className="container mx-auto px-6 py-6">
                <div className="md:flex md:items-center">
                    <div className="w-full md:w-3/12 lg:h-96">
                        {/* <img className="h-full w-full rounded-md object-contain max-w-lg mx-auto" src={productDetails?.imageCover} alt="Nike Air"/> */}
                        <ProductImgSlider images={productDetails?.images}/>


                    </div>
                    <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                        <h3 className="text-gray-700 uppercase text-lg">{productDetails?.title}</h3>
                        <span className="text-gray-500 mt-3">{productDetails?.price}</span>
                        <hr className="my-3"/>
                        {/* <div className="mt-2">
                            <label className="text-gray-700 text-sm" htmlFor="count">Count:</label>
                            <div className="flex items-center mt-1">
                                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                                <span className="text-gray-700 text-lg mx-2">20</span>
                                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-3">
                            <label className="text-gray-700 text-sm" htmlFor="count">Color:</label>
                            <div className="flex items-center mt-1">
                                <button className="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none"></button>
                                <button className="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none"></button>
                                <button className="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none"></button>
                            </div>
                        </div> */}
                        <div className="mt-3">
                            <label className="text-gray-700 text-sm" htmlFor="count">Rating Average</label>
                            <RatingStars rating={productDetails?.ratingsAverage ?? 0}/>
                        </div> 

                        <div className="mt-3">
                            <label className="text-gray-700 text-sm" htmlFor="count">Description</label>
                            <p className='line-clamp-2'>{productDetails?.description}</p>
                        </div> 

                        <div className="mt-3">
                            <label className="text-gray-700 text-sm" htmlFor="count">Brand</label>
                            <p>{productDetails?.brand.name}</p>
                        </div> 

                        <div className="mt-3">
                            <label className="text-gray-700 text-sm" htmlFor="count">Category</label>
                            <p>{productDetails?.category.name}</p>
                        </div> 

                        <div className="mt-3">
                            <label className="text-gray-700 text-sm" htmlFor="count">SubCategory</label>
                            <p>{productDetails?.subcategory[0].name}</p>
                        </div> 

                        <div className="flex items-center mt-6">
                            <button onClick={()=>addProductTOCart(productDetails._id )} className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Order Now</button>
                            <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button> 
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-16">
                    <h3 className="text-gray-600 text-2xl ms-16 font-medium">More Products</h3>
                        <RelatedProducts related={relatedProducts}/>
                    </div>
                </div>
        </main>

    </div>
    }
    </>
  )
}
