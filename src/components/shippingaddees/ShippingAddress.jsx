import axios from 'axios';
import { useFormik } from 'formik'
import  {useState } from 'react'
import { NavLink, useParams} from 'react-router-dom';
import * as Yup from 'yup';


export default function ShippingAddress() {

    const {cartId} = useParams()
    
    const [isLoading, setIsLoading] = useState(false )
    
    
    const initialValues = {
        "details": "cairo",
        "phone": "01204622222",
        "city": "Cairo"
    }

    const validationSchema = Yup.object({
        city : Yup.string().required("City is required"),
        phone : Yup.string().required("Phone is required"),
        details : Yup.string().required("Details is required")
    })
   
    
    async function onSubmit() {
        setIsLoading(true)
        let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/orders/checkout-session/" + cartId , 
            {
                ShippingAddress : values
            } ,{
                    headers :  {
                    token : localStorage.getItem("token")
                    } ,
                    params:{
                        url : 'http://localhost:5173'
                    }
            } 
        )        
        location.href = data.session.url;
        
        setIsLoading(false)
        
    }
    
    let {handleSubmit , values , handleChange , handleBlur , touched ,errors } = useFormik({
        initialValues,
        onSubmit,
    })

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-28">
        <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Shipping Address 
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                      <input onBlur={handleBlur} onChange={handleChange} value={values.city} type="text" name="city" id="city"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                      
                  </div>
                  <div>
                      <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
                      <input onBlur={handleBlur} onChange={handleChange} value={values.details} type="text" name="details" id="details"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                      
                  </div>
                  <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                      <input onBlur={handleBlur} onChange={handleChange} value={values.phone} type="tel" name="phone" id="phone"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                      
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-950 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:disabled:bg-gray-700" disabled={isLoading}>check out {isLoading && <i className="fas fa-spinner fa-spin "></i>}</button>
              </form>
          </div>
      </div>
  </div>
</section>

    </div>
  )
}
