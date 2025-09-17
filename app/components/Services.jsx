"use client"

import React from 'react'
import Carousel from './Carousel'

function Services() {
  return (
    <section>

        <h2 id='services' className='text-3xl font-bold text-center text-blue-500 my-2'>Services</h2>
            <div style={{ height: '600px', position: 'relative' }} className='flex justify-center items-center'>
            <Carousel
                baseWidth={350}
                autoplay={true}
                autoplayDelay={2500}
                pauseOnHover={true}
                loop={true}
                round={false}
            />
            </div>

    </section>
  )
}

export default Services