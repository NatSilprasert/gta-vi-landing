'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef } from 'react'


const SecondVideo = () => {

    const videoRef = useRef();
    const tlRef = useRef();

    useGSAP(() => {

        gsap.set('.lucia', { marginTop: '-70vh', opacity: 0})

        tlRef.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.lucia',
                start: 'top top',
                end: '200% top',
                scrub: 2,
                pin: true,
            }
        })

        tlRef.current.to('.lucia', { opacity: 1, duration: 1, ease: 'power1.inOut' })

    })

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const animateVideo = () => {
            if (!tlRef.current) return;
            tlRef.current.to(video, { currentTime: videoRef.current.duration, duration: 6, ease: 'power1.inOut' }, '<')
        };

        if (video.readyState >= 1) {
            animateVideo();
        } else {
            video.addEventListener('loadedmetadata', animateVideo);
            return () => video.removeEventListener('loadedmetadata', animateVideo);
        }
    }, []);

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
