import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/HeroSection/HeroSection';
import './index.css';



export default function indexPage() {
  return(
    <div className='home--bg'>
      <Header />
      <Hero />
    </div>
  )
}