import React from 'react'
import Image from 'next/image'

function catererCard() {
  return (
    <div>
      <Image src={'/caterer1.jpg'} alt={'caterer1'} width={500} height={130} className='h-[130px] rounded-xl object-cover'/>
      <div className='mt-2'>
        <h2 className='font-semibold text-md'>Elegant Restaurant</h2>
      </div>
    </div>
  )
}

export default catererCard