'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Outro from "./Outro";

const Final = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set('.final-content', { opacity: 0 });
    gsap.set('.final-message', { opacity: 0 });
    gsap.set('.lower', { opacity: 0 })

    gsap.timeline({ 
      scrollTrigger: {
        trigger: '.final',
        start: 'top top',
        end: '+=300% top',
        scrub: true,
        pin: true,
      }
    })

    const tl = gsap.timeline({ 
        scrollTrigger: {
          trigger: '.final',
          start: 'top 80%',
          end: '+=500% top',
          scrub: true,
        }
      })

    tl.to('.final-content', {
         opacity: 1, 
         duration: 2, 
         scale: 1, 
         ease: 'power1.inOut' 
    });
    tl.to('.bg-color', {
        opacity: 0,        
        duration: 2,
        ease: 'power1.inOut'
      }, '<');

    if (videoRef.current) {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        duration: 6, 
        ease: 'power1.inOut' 
      }, '<');
    }
    tl.to('.final-content', {
        opacity: 0,
        duration: 1,
        ease: 'power1.inOut'
   }, '>-1.7');


   
    tl.to('.final-message', {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut'
    }, '<0.5')
    tl.to('.final-message', {
        scale: 0.85,
        duration: 9,
        ease: 'power1.inOut'
    }, '<')
    tl.to('.lower', {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut'
    }, '>-6')
    
  });

  return (
    <div>
        <section className="final">
        <div className="final-content size-full">
            <video 
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            src="/videos/output3.mp4"
            className="size-full object-cover"
            />
        </div>
        </section>
        <Outro/>
    </div>
  )
}

export default Final