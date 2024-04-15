"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 5000})])

  return (
    <div className="embla mx-auto my-4 md:my-8 w-full rounded-xl" ref={emblaRef}>
      <div className="embla__container h-full rounded-xl">
        <div className="embla__slide flex items-center justify-center rounded-xl">
        <Image src={'/banner1.jpg'} alt={'banner1'} width={1000} height={300} className='w-full md:h-[250px]  xl:h-[400px] object-cover rounded-xl'/>
            </div>
        <div className="embla__slide flex items-center justify-center">
        <Image src={'/banner2.jpg'} alt={'banner2'} width={1000} height={300} className='w-full md:h-[250px]  xl:h-[400px] object-cover rounded-xl'/>
            </div>
      </div>
    </div>
  )
}
