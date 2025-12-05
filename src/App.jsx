import { useState } from 'react'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import SearchBar from './components/searchbar/SearchBar'
import ImageGrid from './components/imageGrid/ImageGrid';
import RoomsSection from './components/roomsNsuits/RoomsSection';
import Offers from './components/offers/Offers';
import Footer from './components/footer/Footer';
import SocialSection from './components/socialsection/SocialSection';
import HeroSection from './components/herosection/HeroSection';
import './App.css'
import Events from './components/events/Events';

function App() {

  const images = [
    "./gridImage1.svg",
    "./gridImage2.svg",
    "./gridImage3.svg",
    "./gridImage4.svg",
    "./gridImage5.svg",
  ];

  return (
    <>
      <div>
        <HeroSection />
        <Navigation />
        <SearchBar />
        <ImageGrid images={images} />
        <RoomsSection />
        <Offers />
        <Events />
        <SocialSection images={images} />
        <Footer />
      </div>
    </>
  )
}

export default App
