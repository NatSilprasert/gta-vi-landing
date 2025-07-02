'use client'
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';

import { useMaskSettings } from '../constant';
import ComingSoon from './ComingSoon';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();
    
    useGSAP(() => {
        gsap.set('.mask-wrapper', {
            maskPosition: initialMaskPos,
            maskSize: initialMaskSize,
        });

        gsap.set('.mask-logo', { 
            marginTop: '-100vh', 
            opacity: 0
        })

        gsap.set('.lower-section', {  
            opacity: 0
        })
        
        gsap.set('.entrance-message', {
             marginTop: '0vh'
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                scrub: 2.5,
                end: '+=200%',
                pin: true,
            }
        })

        tl
        .to('.fade-out', {
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut',
        })
        .to('.scale-out', {
            duration: 2,
            scale: 1,
            ease: 'power1.inOut',
        }, '<')
        .to('.mask-wrapper', {
            duration: 2,
            maskPosition: maskPos,
            maskSize,
            ease: 'power1.inOut'
        }, '<')
        .to('.white-mask', {
            opacity: 1,
            ease: 'power1.inOut'
        }, '<1.4')
        .to('.entrance-message', {
            duration: 1,
            ease: 'power1.inOut',
            maskImage: 'radial-gradient(circle at 50% 10vh, black 50%, transparent 100%)'
        }, '>-0.29')
        .to('.entrance-message', {
            scale: 0.7,
            duration: 2,
            ease: 'power1.inOut',
        }, '>-0.5')
        .to('.mask-wrapper', {
            opacity: 0,
            duration: 0.1,
        }, '<')
        .to('.lower-section', {
            opacity: 1,
        }, '<-0.05')
        tl.to('.hero-section', {
            delay: 1,
            maskImage: 'linear-gradient(to top, transparent 50%, black 100%)',
            opacity: 0,
            ease: 'power1.inOut'
        }, '<-0.2');
    });

    return (
        <section className='hero-section'>
            <div className='size-full mask-wrapper'> 
                <div className='white-mask'></div>
                <img src="/images/hero-bg.webp" alt="background" className='scale-out' />
                <img src="/images/hero-text.webp" alt="hero-logo" className='title-logo fade-out' />
                <img src="/images/watch-trailer.png" alt="trailer" className='trailer-logo fade-out' />
                <div className='play-img fade-out'>
                    <img src="/images/play.png" alt="play" className='w-7 ml-1' />
                </div>
            </div>

            <div>
                <img src="/images/big-hero-text.svg" alt="logo" className='size-full object-cover mask-logo' />
            </div>

            <div className='fake-logo-wrapper'>
                <img src="/images/big-hero-text.svg" alt="" className='scale-85 mt-8 overlay-logo' />
            </div>

            <ComingSoon/>
        </section>
    )
}

export default Hero
