import React from 'react';

function Banner() {
  return (
    <div className='mt-4 fade_bottom'>
      <div id="carouselExampleSlidesOnly" className="carousel slide "  data-bs-ride="carousel">
        <div className="carousel-inner ">
          <div className="carousel-item active ">
            <img src="../../../Images/banner_1.png" className="d-block w-100 rounded-5" alt="banner1" />
          </div>
          <div className="carousel-item">
            <img src="../../../Images/banner_2.png" className="d-block w-100 rounded-5" alt="banner2" />
          </div> 
          <div className="carousel-item">
            <img src="../../../Images/banner_3.png" className="d-block w-100 rounded-5" alt="banner3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
