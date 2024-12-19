import axios from 'axios'
import  { useEffect, useState } from 'react'
import Product from '../product/Product'
import LoadingScreen from '../loadingscreen/LaodingScreen'

export default function Home() {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProduct()
  }, [])
  

  async function getProduct() {
    let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/products")
    
    setProducts(data.data);
    setIsLoading(false)
    
  }
 
if (isLoading){
    return <LoadingScreen/>
  }

  return (<>
      <div className="grid grid-cols-4 gap-3">
        {
        products.map((product , index) => {
          return <Product Product={product}  key={index}/>
        })
        }
      </div>
    
    

  </> 
)
}
