import React from 'react'
import Image from 'next/image'

export default function InfoSidebar() {
  return (
    <div className="bg-pink-200 h-auto lg:w-80 p-4 font-Varela relative flex lg:flex-col flex-col">
      <Image
        src="/ganko.png"
        width={100}
        height={72}
        alt="bulma image"
        className="absolute -top-16 left-6"
      />
      <h1
        className="text-center text-4xl font-bold mb-6 mt-4 text-white"
        style={{ textShadow: '4px 2px 8px rgba(243, 15, 133, 0.8)' }}
      >
        Events
      </h1>

      <div className="text-center font-semibold flex flex-col items-center">
        <h2 className="text-center text-xl underline tracking-wide font-semibold text-white textShadow pb-2">
          Miley's Bar
        </h2>
        <Image
          src="/ninja-bar.jpg"
          width={288}
          height={288}
          alt="asakusa image"
          className="rounded shadow-lg"
        />
        <p>Open :18:00- 23:00</p>
        <p>2 Chome-4-3 Asakusa, Taito City, Tokyo 111-0032</p>
      </div>

      <div className="text-center font-semibold mt-8 flex flex-col items-center">
        <h2 className="text-center text-xl underline tracking-wide font-semibold text-white textShadow pb-2">
          Idol Concert
        </h2>
        <Image
          src="/idol-concert.jpg"
          width={288}
          height={288}
          alt="asakusa image"
          className="rounded shadow-lg"
        />
        <p>March 11th</p>
        <p>Akihabara</p>
      </div>
    </div>
  )
}
