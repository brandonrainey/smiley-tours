import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='bg-pink-400 min-h-[250px] w-full flex justify-center items-center'>
      
      <a href="https://twitter.com/mairie0828" className='w-[200px] inline-block'>
        <Image src='/twitter-qr.png' width={200} height={200} alt='Banner image'/>
      </a>
      
    </div>
  )
}
