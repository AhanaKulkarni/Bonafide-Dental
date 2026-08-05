import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Treatments from './components/Treatments'
import Services from './components/Services'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Services />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
