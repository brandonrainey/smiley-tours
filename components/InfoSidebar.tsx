import React from 'react'
import Image from 'next/image'

export default function InfoSidebar() {
  return (
    <div className="bg-pink-200 h-auto basis-1/4 p-4 font-Varela  relative ">
      <Image
        src="/ganko.png"
        width={100}
        height={72}
        alt="ganko image"
        className="absolute -top-14 -right-10"
      />
      <h1 className="text-center text-4xl font-bold mb-6 mt-4 text-white textShadow2">
        Events
      </h1>

      <div className="text-center font-semibold flex flex-col items-center">
        <h2 className="text-center text-xl underline tracking-wide font-semibold text-white textShadow pb-2">
          Miley&apos;s Bar
        </h2>

        <div className="flex flex-col items-center ">
          <Image
            src="/ninja-bar.jpg"
            width={288}
            height={288}
            alt="ninja bar image"
            className="rounded shadow-lg"
          />
          <div className="bg-pink-300 rounded text-white textShadow mt-2 max-w-[288px] ">
            <p>Open :18:00- 23:00</p>
            <a href="https://maps.app.goo.gl/1eivcwBZiR1D2ok46">
              <p className="hover:text-pink-700">
                2 Chome-4-3 Asakusa, Taito City, Tokyo 111-0032
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center font-semibold mt-8 flex flex-col items-center">
        <h2 className="text-center text-xl underline tracking-wide font-semibold text-white textShadow pb-2">
          Idol Concert
        </h2>

        <div>
          <Image
            src="/idol-concert.jpg"
            width={288}
            height={288}
            alt="idol concert image"
            className="rounded shadow-lg"
          />
          <div className="bg-pink-300 rounded text-white textShadow mt-2">
            <p>March 11th</p>
            <p>Akihabara</p>
          </div>
        </div>
      </div>
    </div>
  )
}
