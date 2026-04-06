import React from 'react'
import FairJobCarousel from './fairJobCarousel.js';

const FairjobProduct = () => {
  return (
       <main className="page-home" style={{ padding: '20px', marginTop: '80px' }}>
        <section className='bg-black'>
          <h1 style={{ color: 'white', }}>
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
