import React from "react";
import img1 from "../img/businessman-2606509_1920.jpg";
import img2 from "../img/ship-105596_1920.jpg";
import img3 from "../img/apparel-1850804_1920.jpg";

const Carousel = () => {
  return (
    <div className="container">
      <div
        id="carouselCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="img" />
            <div
              className="carousel-caption d-none d-md-block bg-dark"
              style={{ opacity: "0.5" }}
            >
              <h5 className="text-white fw-bold">Free Shipping</h5>
              <p className="text-white fw-bold">
                Free shipping on orders over $100
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="img" />
            <div
              className="carousel-caption d-none d-md-block bg-dark"
              style={{ opacity: "0.5" }}
            >
              <h5 className="text-white fw-bold">Shipping</h5>
              <p className="text-white fw-bold">
                We ship anywhere on the world.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="img" />
            <div
              className="carousel-caption d-none d-md-block bg-dark"
              style={{ opacity: "0.5" }}
            >
              <h5 className="text-white fw-bold">New Products</h5>
              <p className="text-white fw-bold">Discover our new products.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
