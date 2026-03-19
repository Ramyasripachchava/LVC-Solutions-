import React from 'react'
import CarouselComponent from './carsouel.js';
import FairJobCarousel from './fairJobCarousel.js';

const FairjobProduct = () => {
  return (
       <main className="page-home" style={{ padding: '20px', marginTop: '80px' }}>
        {/* <div className="carsouelheight">
          <CarouselComponent />
        </div> */}
        <section>
          <h1 style={{ color: 'white', fontSize: 'clamp(30px, 2.5vmax, 60px)' }}>
              LVC Fair Job Portal <br/>
            <strong style={{ color: 'white' }}>
              The World's First Scam-Free Job Portal
            </strong>
          </h1>
        </section>
        <FairJobCarousel />
      </main>
  )
}

export default FairjobProduct
