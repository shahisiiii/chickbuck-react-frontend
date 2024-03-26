import React from 'react';
import './Banner.css'

function Banner() {
  return (
    <div className=' fade_bottom banner-padding'>
      <div id="carouselExampleSlidesOnly" className="carousel slide "  data-bs-ride="carousel">
        <div className="carousel-inner ">
          <div className="carousel-item active ">
            <img src="../../../Images/banner_1_new.png" className="d-block w-100 rounded-2" alt="banner1" />
          </div>
          <div className="carousel-item">
            <img src="../../../Images/banner_2_new.png" className="d-block w-100 rounded-2" alt="banner2" />
          </div> 
          
        </div>
      </div>
    </div>
  );
}

export default Banner;
