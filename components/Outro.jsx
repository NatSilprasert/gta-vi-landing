import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Outro = () => {
  useGSAP(() => {
    gsap.set('.final-message', { marginTop: '-100vh', opacity: 0 })
    gsap.set('.lower', { opacity: 0 })

    
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.final-message',
            start: 'top 10%',
            end: '+=300% top',
            scrub: true,
        }
    })

    tl.to('.final-message', {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut'
    })
    tl.to('.final-message', {
        scale: 0.85,
        duration: 2,
        ease: 'power1.inOut'
    }, '<')
    tl.to('.lower', {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut'
    }, '>-1')
   
  })

  return (
    <section className="final-message">
      <div className="h-full col-center gap-10">
        <img src="/images/logo.webp" alt="logo" className="md:w-72 w-52" />

        <div>
          <h3 className="gradient-title">
            Coming <br /> May 26th <br /> 2026
          </h3>
        </div>

        <div className="lower flex-center gap-10">
          <img src="/images/ps-logo.svg" className="md:w-32 w-20" />
          <img src="/images/x-logo.svg" className="md:w-52 w-40" />
        </div>
      </div>
    </section>
  )
}

export default Outro