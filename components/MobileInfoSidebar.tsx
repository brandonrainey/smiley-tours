import React from 'react'
import Image from 'next/image'

export default function InfoSidebar() {
  return (
    <section className="bg-pink-200 h-auto lg:w-80 p-4 font-Varela relative flex lg:flex-col flex-col">
      <Image
        src="/ganko.png"
        width={100}
        height={72}
        alt="ganko image"
        className="absolute -top-16 left-6"
      />
      <h1 className="text-center text-4xl font-bold mb-6 mt-4 text-white textShadowMobile">
        Events
      </h1>

      <div className="text-center font-semibold flex flex-col items-center">
        <h2 className="text-center text-xl underline tracking-wide font-semibold text-white textShadowMobile2 pb-2">
          Miley&apos;s Bar
        </h2>
        <Image
          src="/ninja-bar.jpg"
          width={288}
          height={288}
          alt="ninja bar image"
          className="rounded shadow-lg"
        />
        <div className="bg-pink-300 rounded text-white textShadowMobile2 p-2 w-[288px]">
          <p>Open :18:00- 23:00</p>
          <p>2 Chome-4-3 Asakusa, Taito City, Tokyo 111-0032</p>
        </div>
      </div>

      <div className="text-center font-semibold mt-8 flex flex-col items-center">
        <h2 className="text-center text-xl underline tracking-wide font-semibold text-white textShadowMobile2 pb-2">
          Idol Concert
        </h2>
        <Image
          src="/idol-concert.jpg"
          width={288}
          height={288}
          alt="idol concert image"
          className="rounded shadow-lg"
        />
        <div className="bg-pink-300 rounded text-white textShadowMobile2 p-2 w-[288px]">
          <p> March 11th</p>
          <p>Akihabara</p>
        </div>
      </div>
    </section>
  )
}
