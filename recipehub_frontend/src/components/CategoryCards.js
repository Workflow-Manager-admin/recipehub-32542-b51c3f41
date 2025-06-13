import React from 'react';
import './CategoryCards.css';

const categories = [
  { name: "Breakfast", emoji: "🍳" },
  { name: "Lunch", emoji: "🥪" },
  { name: "Dinner", emoji: "🍲" },
  { name: "Vegan", emoji: "🥦" },
  { name: "Dessert", emoji: "🧁" },
  { name: "Drinks", emoji: "🥤" },
];

// PUBLIC_INTERFACE
function CategoryCards() {
  return (
    <section className="category-cards-section">
      <h2 className="category-heading">Categories</h2>
      <div className="category-cards-row">
        {categories.map(cat => (
          <div className="category-card" key={cat.name}>
            <span className="cat-emoji" aria-label={cat.name}>{cat.emoji}</span>
            <span className="cat-label">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryCards;
