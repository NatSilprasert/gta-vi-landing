'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'


const SecondVideo = () => {

    const videoRef = useRef();

    useGSAP(() => {

        gsap.set('.lucia', { marginTop: '-70vh', opacity: 0})

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.lucia',
                start: 'top top',
                end: '200% top',
                scrub: 2,
                pin: true,
            }
        })

        tl.to('.lucia', { opacity: 1, duration: 1, ease: 'power1.inOut' })
        tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 6, ease: 'power1.inOut' }, '<')
        
  

    })

    return (
        <section className='lucia'>
            <div className='h-dvh'>
                <video 
                    ref={videoRef}
                    muted
                    playsInline
                    preload='auto'
                    src='/videos/output2.mp4'
                    className='size-full object-cover second-vd'
                    style={{
                        objectPosition: '15% 0%'
                    }}

                />
            </div>
        </section>
    )
}

export default SecondVideo
