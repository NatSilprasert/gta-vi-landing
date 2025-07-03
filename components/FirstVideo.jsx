'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef } from 'react';

const FirstVideo = () => {

    const videoRef = useRef(null);
    const tlRef = useRef();

    useGSAP(() => {
        gsap.set('.first-vd-wrapper', {
            marginTop: '-300vh',
            opacity: 0,
        });

        tlRef.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.first-vd-wrapper',
                start: 'top top',
                end: '+=300% top',
                scrub: true,
                pin: true,
            }
        });

        tlRef.current.to('.first-vd-wrapper', {
            delay: 6,
            opacity: 1,
            duration: 1,
            ease: 'power1.inOut',
        });
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const animateVideo = () => {
            if (!tlRef.current) return;
            tlRef.current.to(video, {
                currentTime: video.duration,
                duration: 3,
                ease: 'power1.inOut'
            }, '<');
        };

        if (video.readyState >= 1) {
            animateVideo();
        } else {
            video.addEventListener('loadedmetadata', animateVideo);
            return () => video.removeEventListener('loadedmetadata', animateVideo);
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