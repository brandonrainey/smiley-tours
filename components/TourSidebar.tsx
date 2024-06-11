'use client'

import { useAreaStore } from '@/store/areas'
import HeartSolid from './icons/HeartSolid'

const tours = [
  {
    tourName: 'Asakusa, Tokyo Tour June 11th',
    tourDescription: 'Tour on June 11th',
    tourDate: 'June 11th',
    tourImage: '/tours/tour-june11.webp',
    tourId: 2,
    tourPrice: 20000,
    tourSpots: 2,
    tourLink: 'https://smileytour.stores.jp/items/6630f6eb6891190e5ef40745',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour June 20th',
    tourDescription: 'Tour on June 20th',
    tourDate: 'June 20th',
    tourImage: '/tours/tour-june20.webp',
    tourId: 3,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/665dc7863cc7cf037df86264',
  },
  {
    tourName: 'Asakusa, Tokyo Tour June 24th',
    tourDescription: 'Tour on June 24th',
    tourDate: 'June 24th',
    tourImage: '/tours/tour-june24.webp',
    tourId: 4,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/661fe71d62289b003da60726',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour July 4th',
    tourDescription: 'Tour on July 4th',
    tourDate: 'July 4th',
    tourImage: '/tours/tour-july4.webp',
    tourId: 5,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/665dcdb488afc109825fed66',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour July 11th',
    tourDescription: 'Tour on July 11th',
    tourDate: 'July 11th',
    tourImage: '/tours/tour-july11.webp',
    tourId: 6,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/665dcdff88afc109825fed71',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour July 18th',
    tourDescription: 'Tour on July 18th',
    tourDate: 'July 18th',
    tourImage: '/tours/tour-july18.webp',
    tourId: 7,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/665dce2f7f5a100873d31f8c',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour July 25th',
    tourDescription: 'Tour on July 25th',
    tourDate: 'July 25th',
    tourImage: '/tours/tour-july25.webp',
    tourId: 8,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/665dce534e11f108a867a852',
  },
  {
    tourName: 'Tokyo Private Tour',
    tourDescription: 'Private Tour for at least 2 people',
    tourImage: '/tours/private-tour.webp',
    tourId: 9,
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
        <img
          src="/toursText.webp"
          alt="tour"
          className="w-[350px] custom:pb-0 pb-4"
        />
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
