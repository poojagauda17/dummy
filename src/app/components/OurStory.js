// components/CallToActionSection.jsx
"use client";

import React, { useState, useEffect } from "react";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section>
      <div className="health-blend-section">
        <div className="text-side">
          <h2 className="">The Perfect Blend of Health and Taste</h2>
          <p>
          Founded in 2018 with a love for fizzy fun and local pride, Oneonn started as a humble venture and quickly became a favorite in the neighborhood. With quality ingredients, irresistible taste, and vibrant branding, we’re on a mission to make every drink a celebration.
          </p>
          {/* <p>
            At Natural Drinks, we believe in using real fruits pulps, pure
            spring water, and minimal processing to create beverages that are
            good for you and good for the planet. Our commitment to
            sustainability extends to our sourcing practices, ensuring we
            partner with responsible farmers and utilize eco-friendly.
          </p> */}

          <h4>Try All Our Flavours</h4>
          <p>
            Being a reliable firm, we are offering a unique range of Soft Drinks
            with different Flavors.
          </p>

          <h4>Health Benefits</h4>
          <p>
            We are manufacturing and supplying a variety of Beverages which are
            processed using quality ingredients.
          </p>
        </div>

        <div className="image-side">
          <img src="/images/extra-image.jpg" alt="Product Bottles" />
        </div>
      </div>
      <div className="vision-mission-section">
        <div className="vision-happy-section">
         
          <div>
            <img src="images/purple-image-section.png" />
          </div>
          <div className="text-column">
            <h2>
              A Splash of Happiness
              <br />
              in Every Bottle!
            </h2>

            <h3>Our Vision</h3>
            <p>
To become India’s most loved homegrown beverage brand — one sip, one smile, Oneonn at a time.

            </p>

            <h3>Our Mission</h3>
            <p>
            To deliver great-tasting, high-quality cold beverages that bring people together and keep them refreshed, always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
