import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from "../assets/paray-samadhan-banner.jpg";

const Services = () => {
  return (
    <div className="services">
        <Carousel>
            <img src={img1} alt="Image" />
            <img src={img1} alt="Image" />
        </Carousel>
    </div>
  )
}

export default Services