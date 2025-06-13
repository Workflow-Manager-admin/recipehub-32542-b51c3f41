import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import FeaturedCarousel from './components/FeaturedCarousel';
import CategoryCards from './components/CategoryCards';
import BottomNav from './components/BottomNav';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="recipehub-app">
      <header>
        <SearchBar />
      </header>
      <main className="main-content">
        <FeaturedCarousel />
        <CategoryCards />
      </main>
      <BottomNav />
    </div>
  );
}

export default App;
