import React from 'react'
import Slider from "react-slick";

export default function ProductImgSlider({images}) {



    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };



  return (
    <div>   
        <Slider {...settings}>
            {images?.map((img)=>{
                return <img className="w-full rounded-md object-contain  mx-auto" src={img} alt="Nike Air"/>
            })} 
        </Slider>

    </div>
  )
}
