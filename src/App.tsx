import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <div className="absolute inset-0 bg-texture"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 vintage-overlay"></div>
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;