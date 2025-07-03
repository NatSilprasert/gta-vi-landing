'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';

const FirstVideo = () => {

    const videoRef = useRef(null);

    useGSAP(() => {
        gsap.set('.first-vd-wrapper', {
            marginTop: '-300vh',
            opacity: 0,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.first-vd-wrapper',
                start: 'top top', 
                end: '+=300% top',    
                scrub: true,
                pin: true,
            }
        });

        tl.to('.first-vd-wrapper', {
            delay: 6,
            opacity: 1,
            duration: 1,
            ease: 'power1.inOut',
        });

        if (videoRef.current) {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
                duration: 3,
                ease: 'power1.inOut'
            }, '<');
        }

    }, []);

    return (
        <section className='first-vd-wrapper'>
            <div className='h-dvh'>
                <video 
                    ref={videoRef}
                    muted
                    playsInline
                    preload='auto'
                    src='/videos/output1.mp4'
                    className='first-vd'
                />
            </div>
        </section>
    )
}

export default FirstVideo
