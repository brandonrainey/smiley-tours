'use client'

import { useAreaStore } from '@/store/areas'
import Image from 'next/image'
import BarImage from '../public/bar.webp'
import TapImage from '../public/tap-concert.webp'
import IdolImage from '../public/idol-concert.webp'


export default function InfoSidebar() {

  const { eventsRef } = useAreaStore()
  return (
    <section
      className="bg-transparent h-auto basis-1/4 p-4  custom:before:border-none short-border relative custom:order-1 order-3"
      id="events"
      ref={eventsRef}
    >
      <img
        src="/ganko.webp"
        alt="ganko"
        className="absolute hidden custom:inline-block custom:-top-14 custom:-right-10 -top-16 right-26 z-30 w-[76px]"
      />

      <h1
        className={`text-center text-4xl font-bold mb-6 mt-4 text-white bg-pink-400/40 rounded-xl w-fit px-2 py-1 mx-auto font-carter custom:text-shadow-3 text-shadow-4 `}
      >
        Events
      </h1>

      {/*  */}
      <div className="text-center font-semibold flex flex-col items-center mt-8">
        <h2
          className={`text-center text-xl tracking-wide font-semibold text-white border-y-2 border-pink-300 custom:text-shadow-1 text-shadow-5 py-1 mb-4`}
        >
          Miley&apos;s Bar
        </h2>

        <div className="flex flex-col items-center ">
          <Image
            src={BarImage}
            sizes='(max-width: 300px) 100vw, 300px'
            width={300}
            height={200}
            placeholder='blur'
            className="rounded max-w-[300px] w-full"
            alt="ninja bar"
          />

          <div
            className={`bg-pink-400/60 rounded text-white custom:text-shadow-1 text-shadow-5 mt-2 custom:max-w-[288px] max-w-[300px] border-2 border-pink-500`}
          >
            <p>Open :18:00- 23:00</p>
            <a href="https://maps.app.goo.gl/1eivcwBZiR1D2ok46">
              <p className="hover:text-pink-800">
                2 Chome-4-3 Asakusa, Taito City, Tokyo 111-0032
              </p>
            </a>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="text-center font-semibold flex flex-col items-center mt-8">
        <h2
          className={`text-center text-xl tracking-wide font-semibold text-white border-y-2 border-pink-300 custom:text-shadow-1 text-shadow-5 py-1 mb-4`}
        >
          Idol Concert + Tap Dance Show
        </h2>

        <div className="flex flex-col items-center w-full">
          <Image
            src={TapImage}
            sizes='(max-width: 300px) 100vw, 300px'
            width={300}
            height={300}
            placeholder='blur'
            className="rounded max-w-[300px] w-full"
            alt="tap concert promo image"
          />

          <div
            className={`bg-pink-400/60 rounded text-white custom:text-shadow-1 text-shadow-5 mt-2 custom:max-w-[288px] max-w-[300px]  w-full border-2 border-pink-500`}
          >
            <p>February 25th</p>
            <a href="https://maps.app.goo.gl/1eivcwBZiR1D2ok46">
              <p className="hover:text-pink-800">Asakusa - Free to View!</p>
            </a>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="text-center font-semibold mt-8 flex flex-col items-center">
        <h2
          className={`text-center text-xl tracking-wide font-semibold text-white border-y-2 border-pink-300 custom:text-shadow-1 text-shadow-5 py-1 mb-4`}
        >
          Idol Concert
        </h2>

        <div>
          <Image
            src={IdolImage}
            sizes='(max-width: 300px) 100vw, 300px'
            width={300}
            height={200}
            placeholder='blur'
            className="rounded max-w-[300px] w-full"
            alt="idol concert"
          />

          <div
            className={`bg-pink-400/60 rounded text-white custom:text-shadow-1 text-shadow-5 mt-2 border-2 border-pink-500`}
          >
            <p>March 11th</p>
            <p>Akihabara</p>
          </div>
        </div>
      </div>
    </section>
  )
}
