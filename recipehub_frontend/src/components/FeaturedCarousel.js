import React, { useState } from 'react';
import './FeaturedCarousel.css';

// Placeholder data (replace with fetched data as needed)
const featuredRecipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: "https://source.unsplash.com/400x200/?spaghetti,pasta",
  },
  {
    id: 2,
    title: "Avocado Salad",
    image: "https://source.unsplash.com/400x200/?avocado,salad",
  },
  {
    id: 3,
    title: "Classic Burger",
    image: "https://source.unsplash.com/400x200/?burger",
  },
];

// PUBLIC_INTERFACE
function FeaturedCarousel() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? featuredRecipes.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === featuredRecipes.length - 1 ? 0 : prev + 1));

  return (
    <section className="carousel">
      <button className="carousel-arrow left" onClick={handlePrev} aria-label="Previous">
        ‹
      </button>
      <div className="carousel-card">
        <img
          src={featuredRecipes[current].image}
          alt={featuredRecipes[current].title}
          className="carousel-img"
        />
        <span className="carousel-title">{featuredRecipes[current].title}</span>
      </div>
      <button className="carousel-arrow right" onClick={handleNext} aria-label="Next">
        ›
      </button>
    </section>
  );
}

export default FeaturedCarousel;
