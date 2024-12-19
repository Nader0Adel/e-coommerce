import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthContext } from '../../context/AuthContext';


export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const navigate =useNavigate() 
    const {userToken , setUserToken} = useContext(AuthContext)


    const initialValues = {
        "email": "Nader@yahoo.com",
        "password":"Nader@123",
    }
    
    const validationSchema =  Yup.object({
        email : Yup.string().required("email is required").email("Enter Valid Email"),
        password : Yup.string().required("Password is required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"password must be at least 8 characters and have simbols"),
    })
    

    let {handleSubmit , values , handleChange , handleBlur , touched ,errors } = useFormik({
        initialValues,
        validationSchema,
        onSubmit,

    })


    async function onSubmit() {
        setIsLoading(true)
        setErrorMessage("")
        await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin" , values).then(({data})=>{
            setIsLoading(false)
            setUserToken(data.token);
            localStorage.setItem("token" , data.token)
            if(location.pathname == "/login"){  
                navigate("/")
            }else{ 
                navigate(location.pathname)
            }            
        }).catch((err)=>{
            setIsLoading(false)
            setErrorMessage(err.response.data.message)
        })
        
    }


  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-28">
        <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Login 
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
              <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                      {touched.email && errors.email && <p className="text-red-500">{errors.email}</p>}                      
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {touched.password && errors.password && <p className="text-red-500">{errors.password}</p>}

                      
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-950 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:disabled:bg-gray-700" disabled={isLoading}>Login {isLoading && <i className="fas fa-spinner fa-spin "></i>}</button>
                    {errorMessage && <p className='text-red-500 text-center' >{errorMessage}</p>}

                  <p className="text-sm font-light text-center text-gray-500 dark:text-gray-300">
                      Do not have an account? <NavLink to={'/register'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</NavLink>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

    </div>
  )
}
