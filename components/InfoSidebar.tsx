'use client'

import { useAreaStore } from '@/store/areas'
import LocationDot from './icons/LocationDot'

export default function InfoSidebar() {
  const { eventsRef } = useAreaStore()
  return (
    <section
      className="bg-transparent h-auto basis-1/4 p-4  custom:before:border-none short-border relative custom:order-1 order-3 flex flex-col items-center"
      id="events"
      ref={eventsRef}
    >
      <img
        src="/ganko.webp"
        alt="ganko"
        className="absolute hidden custom:inline-block custom:-top-20 custom:-right-10 -top-16 right-26 z-30 w-[76px]"
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

        <div className="flex flex-col items-center">
          <img
            src="/bar.webp"
            alt="ninja bar"
            className="rounded max-w-[300px] custom:w-full w-[300px] tourShadow"
          />

          <div
            className={`bg-pink-400/60 rounded text-white custom:text-shadow-1 text-shadow-5 mt-2  max-w-[300px] border-2 border-pink-500 p-1 w-full flex flex-col items-center`}
          >
            <div className="flex gap-2 items-center">
              <p>Open :18:00- 23:00</p>
              <a
                href="https://maps.app.goo.gl/PJndiVJPRv4bTWQSA"
                aria-label="Miley bar location"
              >
                <LocationDot />
              </a>
            </div>

            <p>🌟Charge ¥500/1h</p>
            <p>🌟Drinks ¥800〜</p>
          </div>
        </div>
      </div>

      {/*  */}

      {/*  */}
      {/* <div className="text-center font-semibold mt-8 flex flex-col items-center">
        <h2
          className={`text-center text-xl tracking-wide font-semibold text-white border-y-2 border-pink-300 custom:text-shadow-1 text-shadow-5 py-1 mb-4`}
        >
          Idol Concert
        </h2>

        <div>
          <img
            src="/idol-concert.webp"
            alt="idol concert"
            className="rounded max-w-[300px] w-full tourShadow"
          />

          <div
            className={`bg-pink-400/60 rounded text-white custom:text-shadow-1 text-shadow-5 p-1 mt-2 border-2 border-pink-500`}
          >
            <p>March 11th - Doors open 18:30</p>

            <div className="flex gap-2 items-center justify-center">
              <p>Akihabara Club GOODMAN </p>
              <a
                href="https://maps.app.goo.gl/bNuPCV7ysmmc4WdV8"
                aria-label="concert location"
              >
                <LocationDot />
              </a>
            </div>

            <p>2,900 yen + 1D (600 yen)</p>
          </div>
        </div>
      </div> */}

      
    </section>
  )
}
