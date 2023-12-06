import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='bg-pink-300 min-h-[250px] w-full flex justify-center items-center'>
      
      <a href="https://twitter.com/mairie0828" className='w-[200px] h-[200px] flex justify-center items-center '>
        <i className="fab fa-twitter fa-4x text-blue-500 "></i>
      </a>
      <a href="https://www.instagram.com/marie0828/" className='w-[200px] h-[200px] flex justify-center items-center '>
        <i className="fab fa-instagram fa-4x text-pink-500"></i>  
      </a>
      <a href="https://www.youtube.com/channel/UC9x1Qh6JZxYgF4C2kBk3m3Q" className='w-[200px] h-[200px] flex justify-center items-center'>
        <i className="fab fa-youtube fa-4x text-red-500"></i>
      </a>

      
    </div>
  )
}
