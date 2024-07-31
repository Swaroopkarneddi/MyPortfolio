import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="hoome">
      <div class="container">
        <h1>Welcome to Landing Stars</h1>
        <p>Explore the beauty of dynamic backgrounds.</p>
        <a href="#features" class="cta-button">
          Learn More
        </a>
      </div>
      <div class="container">
        <h1>Features</h1>
        <div class="features">
          <div class="feature-item">
            <h2>Feature 1</h2>
            <p>Detail about Feature 1.</p>
          </div>
          <div class="feature-item">
            <h2>Feature 2</h2>
            <p>Detail about Feature 2.</p>
          </div>
          <div class="feature-item">
            <h2>Feature 3</h2>
            <p>Detail about Feature 3.</p>
          </div>
        </div>
        <div class="logos">
          <img src="https://via.placeholder.com/100" alt="Logo 1" />
          <img src="https://via.placeholder.com/100" alt="Logo 2" />
          <img src="https://via.placeholder.com/100" alt="Logo 3" />
          <img src="https://via.placeholder.com/100" alt="Logo 4" />
        </div>
      </div>
      <div class="container">
        <h1>Image Slider</h1>
        <div class="slider">
          <div class="slides">
            <div class="slide">
              <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
            </div>
            <div class="slide">
              <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
            </div>
            <div class="slide">
              <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
            </div>
          </div>
          <div class="slider-buttons">
            <button class="slider-button" id="prevBtn">
              &#10094;
            </button>
            <button class="slider-button" id="nextBtn">
              &#10095;
            </button>
          </div>
        </div>
      </div>
      <div class="particles"></div>
      <div class="star-background"></div>
    </div>
  );
}

export default Home;
