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
import PostCard from '../components/PostCard';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className='relative'>
      <div className='bg-color'></div>
      <div className='z-20'>
        <Navbar/>
        <Hero/>
        
        <FirstVideo/>   
        <Jason/>

        <SecondVideo/>
        <Lucia/>

        <PostCard/>
      </div>
    </main>
  )
}

export default App
