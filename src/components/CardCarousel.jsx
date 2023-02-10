import React from "react";
import bamboo from "../image/cardImg/bamboo.jpg";
import basket from "../image/cardImg/basket.jpg";
import brush from "../image/cardImg/brush.jpg";
import kit from "../image/cardImg/kit.jpg";
import loofah from "../image/cardImg/loofah.jpg";
import paintCup from "../image/cardImg/reusableCup.jpg";

const CardCarousel = () => {
  return (
    <div>
      <div
        id="cardcarouselExampleAutoplaying"
        className="carousel coverBg carousel-dark slide cardBg"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner pt-4" style={{height: "432px"}}>
          <div className="carousel-item active">
            <div className="card-wrapper container-sm d-flex  justify-content-around">
              <div className="card cardBg " style={{width: "18rem"}}>
              <img src={bamboo} className="card-img-top" alt="..." />
             <div className="card-body ">
                  <div className="cardText">
                    <div>Reusable Bamboo Straws</div>
                    <div>&#8364;1.99</div>
                    <button className="btn  my-2 addCartBtn">Add to Cart</button>
                </div>
                </div>
              </div>
              <div className="card cardBg " style={{width: "18rem"}}>
              <img src={basket} className="card-img-top" alt="..." />
             
                <div className="card-body">
                  <div className="cardText">
                    <div>Basket</div>
                    <div>&#8364;10.99</div>
                    <button className="btn my-2 addCartBtn">Add to Cart</button>
                </div>
                </div>
              </div>
              <div className="card cardBg " style={{width: "18rem"}}>
              <img src={paintCup} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="cardText">
                    <div>Plant Based Reusable Cups</div>
                    <div>&#8364;2.39</div>
                    <button className="btn my-2 addCartBtn">Add to Cart</button>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex   justify-content-around">
              <div className="card   cardBg " style={{width: "18rem"}}>
              <img src={brush} className="card-img-top" alt="..." />
             
                <div className="card-body">
                  <div className="cardText">
                    <div>Bamboo Brush</div>
                    <div>&#8364;5.99</div>
                    <button className="btn my-2 addCartBtn">Add to Cart</button>
                </div>
                </div>
              </div>
             
              <div className="card cardBg " style={{width: "18rem"}}>
              <img src={kit} className="card-img-top" alt="..." />
             
                <div className="card-body">
                  <div className="cardText">
                    <div>Sustainability Starter Kit</div>
                    <div>&#8364;10.99</div>
                    <button className="btn my-2 addCartBtn">Add to Cart</button>
                </div>
                </div>
              </div>
              <div className="card cardBg " style={{width: "18rem"}}>
              <img src={loofah} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="cardText">
                    <div>Natural Bamboo Loofah</div>
                    <div>&#8364;2.99</div>
                    </div>
                    <button className="btn my-2 addCartBtn">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
       
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#cardcarouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#cardcarouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
