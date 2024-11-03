'use client'

import { useAreaStore } from '@/store/areas'
import LocationDot from './icons/LocationDot'

export default function EventSidebar() {
  const { eventsRef } = useAreaStore()

  return (
    <section
      className="bg-transparent h-auto  basis-1/4 p-4  relative order-4 flex flex-col items-center"
      id="events"
      ref={eventsRef}
    >
      <h1 className="flex  w-fit items-center justify-center  shadow p-1 px-2 rounded-xl sm:text-4xl text-3xl text-white bg-gradient-to-r from-[#f382bc] to-[#ed3996] mb-6 custom:mt-2 relative contentBackgroundBlur2">
        Events
      </h1>

      <div className="flex flex-col custom:flex-row w-full max-w-[1400px] custom:gap-24 justify-center items-center">
        <div className="text-center font-semibold flex flex-col items-center justify-between mt-8 sm:mt-0 sm:h-[414px]">
          <h2
            className={`text-center text-2xl tracking-wide font-semibold text-white border-y-2 border-pink-300 custom:text-shadow-1 text-shadow-5 py-1 mb-4`}
          >
            Japan&apos;'s Heroic Journey Tour
          </h2>

          <a
            className="flex flex-col items-center "
            href="https://smileywalk.shop/items/670d24723626e42220ec3173"
          >
            <img
              src="/tours/journeyTour.webp"
              alt="private tour"
              className="rounded max-w-[300px] custom:w-full w-[300px] tourShadow object-cover aspect-square"
            />
          </a>

          <div
            className={`font-semibold rounded text-white custom:text-shadow-1 text-shadow-2 mt-2  max-w-[300px]  p-1 w-full flex flex-col items-center`}
          ></div>
        </div>


        {/* Miley's Bar */}
        <div className="text-center font-semibold flex flex-col items-center mt-8 sm:mt-0 sm:h-[414px] justify-between">
          <h2
            className={`text-center text-2xl tracking-wide font-semibold text-white border-y-2 border-pink-300 custom:text-shadow-1 text-shadow-5 py-1 mb-4`}
          >
            Miley&apos;s Bar
          </h2>

          <div className="flex flex-col items-center ">
            <img
              src="/bar.webp"
              alt="ninja bar"
              className="rounded max-w-[300px] custom:w-full w-[300px] tourShadow"
            />
          </div>

          <div
            className={`font-semibold rounded text-white custom:text-shadow-1 text-shadow-2 mt-2  max-w-[300px]  p-1 w-full flex flex-col items-center`}
          >
            <div className="flex gap-2 items-center text-lg">
              <p>18:00- 23:00</p>
              <a
                href="https://maps.app.goo.gl/PJndiVJPRv4bTWQSA"
                aria-label="Miley bar location"
              >
                <LocationDot />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
