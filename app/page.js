'use client'
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FirstVideo from '../components/FirstVideo';
import Jason from '../components/Jason';
import SecondVideo from '../components/SecondVideo';
import Lucia from '../components/Lucia';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      
      <FirstVideo/>   
      <Jason/>

      <SecondVideo/>
      <Lucia/>
    </main>
  )
}

export default App
