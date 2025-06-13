import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import FeaturedCarousel from './components/FeaturedCarousel';
import CategoryCards from './components/CategoryCards';
import BottomNav from './components/BottomNav';

// PUBLIC_INTERFACE
function App() {
  // Fix usage of PUBLIC_URL by referencing it via process.env, or remove if not used
  // If you need public url, use: const publicUrl = process.env.PUBLIC_URL;

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
