import React from 'react'
import carouselPic1 from "../image/carouselPic/carouselPic1.jpg";
import carouselPic2 from "../image/carouselPic/carouselPic2.jpg";
import carouselPic3 from "../image/carouselPic/carouselPic3.jpg";
import carouselPic4 from "../image/carouselPic/carouselPic4.jpg";


const Carousel = () => {
  return (
    <div className="carouselHome">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{height:"480px"}}>
          <div className="carousel-item active">
            <img src={carouselPic4} className="d-block w-100 carouselImg" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carouselPic1} className="d-block w-100 carouselImg" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carouselPic3} className="d-block w-100 carouselImg" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev carouselBtn"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next carouselBtn"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel