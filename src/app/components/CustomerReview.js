"use client";

import { FaQuoteRight, FaStar, FaUserCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import "./CustomerReview.css";

const testimonials = [
  {
    name: "Anjali Deshmukh",
    role: "Organic Farmer",
    content:
      "The crop-specific fertilizers have greatly improved the yield and quality of my organic vegetables. Highly recommended for sustainable farming.",
    rating: 5
  },
  {
    name: "Rohit Nair",
    role: "Agro Product Distributor",
    content:
      "Reliable packaging and timely deliveries make it easy to serve farmers across the region. The product range is very farmer-friendly.",
    rating: 4
  },
  {
    name: "Sneha Kapoor",
    role: "Retail Agro Store Owner",
    content:
      "Our customers trust these agricultural products for their farms. The variety and effectiveness have led to repeat purchases every season.",
    rating: 5
  },
  {
    name: "Vikram Joshi",
    role: "Horticulture Consultant",
    content:
      "The high-density inputs are ideal for farmers with limited land area. They’ve helped several clients boost their productivity.",
    rating: 5
  },
  {
    name: "Neha Sharma",
    role: "Agricultural Scientist",
    content:
      "These products support long-term soil health and crop sustainability. It's great to see such focus on scientific farming practices.",
    rating: 4
  }
];



export default function TestimonialSection() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const width = carouselRef.current.offsetWidth;
        const slideWidth = carouselRef.current.firstChild.offsetWidth + 20; // include gap

        const nextIndex = currentIndex + 1 >= testimonials.length ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);

        carouselRef.current.scrollTo({
          left: slideWidth * nextIndex,
          behavior: "smooth"
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="testimonial-wrapper">
      <h2 className="testimonial-title mb-8">What Clients Say</h2>
      <div className="testimonial-carousel" ref={carouselRef}>
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-slide">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaUserCircle className="testimonial-avatar-icon" />
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
                <FaQuoteRight className="testimonial-quote" />
              </div>
              <p className="testimonial-text">{t.content}</p>
              <div className="testimonial-rating">
                {[...Array(t.rating)].map((_, j) => (
                  <FaStar key={j} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
