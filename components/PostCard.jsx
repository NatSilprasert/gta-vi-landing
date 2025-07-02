'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"

const PostCard = () => {
  const videoRef = useRef(null);

  useGSAP(() => {

    gsap.set('.post-card', {
        marginTop: '-10vh'
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.post-card',
        start: 'top 80%',
        end: 'bottom center',
        scrub: true,
      }
    })
    
    tl.to('.bg-color', {
        opacity: 1,        
        duration: 2,
        ease: 'power1.inOut'
      });
    tl.to(videoRef.current, {
        currentTime: videoRef.current.duration, 
        duration: 3,
        ease: 'power1.inOut' 
    }, '<');
    
  })

  return (
    <section className="post-card">
      <div className="" />
      <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700">
        <img src="/images/overlay.webp" />

        <video 
          ref={videoRef}
          muted
          playsInline
          autoPlay
          preload="auto"
          src="/videos/postcard-vd.mp4"
        />

        <button className="group-hover:bg-yellow transation duration-700">
          Explore Leonida Keys
        </button>
      </div>
    </section>
  )
}

export default PostCard