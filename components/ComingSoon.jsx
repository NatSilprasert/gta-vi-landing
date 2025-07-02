import React from 'react'

const ComingSoon = () => {
  return (
    <section className='entrance-message'>
        <div className='h-full col-center gap-10 mt-20'>
            <img src="/images/logo.webp" alt="logo" className='entrance-logo'/>

            <div className='text-wrapper'>
                <h3 className='gradient-title'>
                    Coming <br /> May 26 <br /> 2025
                </h3>
            </div>

            <div className='flex-center gap-10 lower-section'>
                <img src="/images/ps-logo.svg" className='md:wd-32 w-20' />
                <img src="/images/x-logo.svg" className='md:wd-52 w-40' />
            </div>
        </div>
    </section>
  )
}

export default ComingSoon