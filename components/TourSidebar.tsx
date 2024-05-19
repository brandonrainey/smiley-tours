'use client'

import { useAreaStore } from '@/store/areas'
import HeartSolid from './icons/HeartSolid'

const tours = [
  {
    tourName: 'Asakusa, Tokyo Tour May 23rd',
    tourDescription: 'Tour on May 23rd',
    tourDate: 'May 23rd',
    tourImage: '/tour-may23.webp',
    tourId: 4,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/661fe71d62289b003da60726',
  },
  {
    tourName: 'Asakusa, Tokyo Tour May 31st',
    tourDescription: 'Tour on May 31st',
    tourDate: 'May 31st',
    tourImage: '/tour-may31.webp',
    tourId: 5,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/661fe79adb4bc11114413c31',
  },
  {
    tourName: 'Akihabara, Tokyo Tour June 7th',
    tourDescription: 'Tour on June 7th',
    tourDate: 'June 7th',
    tourImage: '/tour-june7.webp',
    tourId: 6,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/65cd6ad1e37c5b051e133e62',
  },
  {
    tourName: 'Asakusa, Tokyo Tour June 14th',
    tourDescription: 'Tour on June 14th',
    tourDate: 'June 14th',
    tourImage: '/tour-june14.webp',
    tourId: 7,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/6630f6eb6891190e5ef40745',
  },
  {
    tourName: 'Ueno, Tokyo Tour June 21st',
    tourDescription: 'Tour on June 21st',
    tourDate: 'June 21st',
    tourImage: '/tour-june21.webp',
    tourId: 8,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/65cd69bf3cea4a0b47b323cb',
  },
  {
    tourName: 'Harajuku, Tokyo Tour June 24th',
    tourDescription: 'Tour on June 24th',
    tourDate: 'June 24th',
    tourImage: '/tour-june24.webp',
    tourId: 9,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/663114d9689119141ff40764',
  },
  {
    tourName: 'Tokyo Private Tour',
    tourDescription: 'Private Tour for at least 2 people',
    tourImage: '/private-tour.webp',
    tourId: 10,
    tourPrice: 'TBD',
    tourSpots: 'TBD',
    tourLink: 'https://smileytour.stores.jp/items/649e31d385e3630037cff96e',
  },
]

export default function TourSidebar() {
  const { tourRef } = useAreaStore()

  return (
    <section
      className=" h-auto relative custom:p-4 py-4  custom:basis-1/4  order-2  flex flex-col items-center"
      id="tour"
      ref={tourRef}
    >
      <h1 className="flex  w-full items-center justify-center font-hammersmithone tracking-wide">
        <img src='/toursText.webp' alt='tour' className='w-[350px] custom:pb-0 pb-4'/>
      </h1>

      <ul className="custom:flex custom:flex-wrap grid grid-cols-2 justify-center items-center transition-all duration-150 ease-in-out max-w-[1600px] custom:gap-x-16">
        {tours.map((tour) => (
          <li
            key={tour.tourId}
            className="  flex flex-col items-center custom:py-4 mb-2 custom:px-0 px-2 group self-start"
          >
            <a
              href={tour.tourLink}
              className="flex flex-col items-center"
              role="link"
            >
              <img
                src={tour.tourImage}
                alt={tour.tourName}
                className="rounded tourShadow aspect-square max-w-[288px] w-full"
              />

              <h2 className="font-extrabold text-pink-500 pt-2  tracking-wide text-xl textShadowMobileTourWhite flex flex-col items-center ">
                <span
                  className={`text-white custom:text-shadow-1 text-shadow-2 ${
                    tour.tourName === 'Tokyo Private Tour' && 'hidden'
                  }`}
                >
                  {tour.tourDate} -
                </span>{' '}
                ¥{tour.tourPrice}
              </h2>
              <h3
                className={`font-semibold text-white pb-2 custom:pb-0  custom:text-shadow-1 text-shadow-2 `}
              >
                {tour.tourSpots === 0 ? (
                  <p className="line-through text-slate-300 custom:text-lg">
                    Sold Out
                  </p>
                ) : (
                  <div className="flex items-center gap-2 ">
                    <HeartSolid />
                    
                    <p className="custom:text-lg">Learn More!</p>
                    <HeartSolid />
                    
                  </div>
                )}
              </h3>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
