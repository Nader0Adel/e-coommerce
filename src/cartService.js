import axios from "axios";
import { Bounce, toast } from "react-toastify";

export async function addProductTOCart(productId ) {
    let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/cart",{
      productId : productId,
    },{
      headers:{
        token :localStorage.getItem("token"),  
      }
    })
    toast.success( `${data.message}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,  
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
      console.log(data.message);
      
      
    
} 
