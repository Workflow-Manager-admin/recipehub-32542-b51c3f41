import React, { useState } from 'react';
import './BottomNav.css';

const navItems = [
  { label: 'Home', icon: '🏠' },
  { label: 'Favorites', icon: '❤️' },
  { label: 'Add Recipe', icon: '➕' },
  { label: 'Profile', icon: '👤' },
];

// PUBLIC_INTERFACE
function BottomNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="bottom-nav" role="navigation" aria-label="Main Navigation">
      {navItems.map((item, idx) => (
        <button
          key={item.label}
          className={`bottom-nav-btn${activeIndex === idx ? ' active' : ''}`}
          onClick={() => setActiveIndex(idx)}
          aria-label={item.label}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default BottomNav;
