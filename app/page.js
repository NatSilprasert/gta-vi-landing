'use client'
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FirstVideo from '../components/FirstVideo';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      
      <FirstVideo/>   
    </main>
  )
}

export default App
