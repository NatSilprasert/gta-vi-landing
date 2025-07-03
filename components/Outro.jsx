import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Outro = () => {

  return (
    <section className="final-message">
      <div className="h-full col-center gap-10">
        <img src="/images/logo.webp" alt="logo" className="md:w-72 w-52" />

        <div>
          <h3 className="gradient-title">
            Coming <br /> May 26 <br /> 2026
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