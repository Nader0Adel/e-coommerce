import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import Cart from './components/cart/Cart'
import Products from './components/products/Products'
import Categories from './components/categories/Categories'
import Brands from './components/brands/Brands'
import NotFounds from './components/notFound/NotFounds'
import '@fortawesome/fontawesome-free/css/all.min.css';
import AuthContextProvider from './context/AuthContext'
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'
import ProtectedAuthRoute from './components/protectedAuthRoute/ProtectedAuthRoute'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { ToastContainer } from 'react-toastify'
import ShippingAddress from './components/shippingaddees/ShippingAddress'
import Orders from './components/orders/Orders'


function App() {
createBrowserRouter
  const router = createBrowserRouter([
    {path : '' , element : <Layout/> , children : [
      {index : true , element : <ProtectedRoute><Home/></ProtectedRoute>},
      {path : 'login' , element : <ProtectedAuthRoute><Login/></ProtectedAuthRoute>},
      {path : 'register' , element : <ProtectedAuthRoute><Register/></ProtectedAuthRoute> },
      {path : 'cart' , element :  <ProtectedRoute><Cart/></ProtectedRoute>},
      {path : 'products' , element :  <ProtectedRoute><Products/></ProtectedRoute>},
      {path : 'categories' , element :  <ProtectedRoute><Categories/></ProtectedRoute>},
      {path : 'brands' , element :  <ProtectedRoute><Brands/></ProtectedRoute>},
      {path : 'productDetails/:id' , element : <ProtectedRoute><ProductDetails/></ProtectedRoute>},
      {path : "shippingAddres/:cartId" , element: <ProtectedRoute><ShippingAddress/></ProtectedRoute>},
      {path : 'allorders' , element : <ProtectedRoute><Orders/></ProtectedRoute>},
      {path : '*' , element : <NotFounds/>},
    ]}
  ])

  return (
    <div> 
      <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />

      </AuthContextProvider>
    </div>
  )
}

export default App
