import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="bg-pink-300 min-h-[250px] w-full flex flex-col justify-around items-center">
      <h1 className="text-5xl text-white textShadow pt-4">FOLLOW ME!</h1>
      <div className="flex">
        <a
          href="https://twitter.com/mairie0828"
          className="w-[200px] h-[100px] flex justify-center items-center "
        >
          <i className="fab fa-twitter fa-5x text-blue-500 "></i>
        </a>
        <a
          href="https://www.instagram.com/mairie0828/"
          className="w-[200px] h-[100px] flex justify-center items-center "
        >
          <i className="fab fa-instagram fa-5x text-pink-500"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UC9x1Qh6JZxYgF4C2kBk3m3Q"
          className="w-[200px] h-[100px] flex justify-center items-center"
        >
          <i className="fab fa-youtube fa-5x text-red-500"></i>
        </a>
      </div>
      <p className='text-white text-xl tracking-wide textShadow underline'>engelmaikichi@gmail.com</p>
    </div>
  )
}
