'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all";

const PostCard = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set('.post-card', {
      marginTop: '-10vh'
    });

    // เปลี่ยนพื้นหลัง main เป็นสีม่วงขณะ scroll ถึง .post-card
    ScrollTrigger.create({
      trigger: '.post-card',
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        document.querySelector('main').style.background = `linear-gradient(90deg, #1e2a52 0%, #6e4b91 100%)`;
      },
      onLeaveBack: () => {
        document.querySelector('main').style.background = `linear-gradient(
          223.17deg,
          rgb(28, 24, 41) 0%,
          rgb(27, 24, 40) 8.61%,
          rgb(25, 23, 36) 17.21%,
          rgb(22, 21, 32) 25.82%,
          rgb(20, 19, 28) 34.42%,
          rgb(18, 18, 24) 43.03%,
          rgb(17, 17, 23) 51.63%
        )`;
      },
      onLeave: () => {
        document.querySelector('main').style.background = `linear-gradient(
          223.17deg,
          rgb(28, 24, 41) 0%,
          rgb(27, 24, 40) 8.61%,
          rgb(25, 23, 36) 17.21%,
          rgb(22, 21, 32) 25.82%,
          rgb(20, 19, 28) 34.42%,
          rgb(18, 18, 24) 43.03%,
          rgb(17, 17, 23) 51.63%
        )`;
      },
      scrub: true,
    });

    // วิดีโอเล่นตาม scroll
    gsap.to(videoRef.current, {
      currentTime: videoRef.current.duration, 
      duration: 3,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.post-card',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    });
  });

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