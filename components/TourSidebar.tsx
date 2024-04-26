'use client'

import { useAreaStore } from '@/store/areas'

const tours = [
  {
    tourName: 'Ueno, Tokyo Tour April 26th',
    tourDescription: 'Tour on April 26th',
    tourDate: 'April 26th',
    tourImage: '/tour-april26.webp',
    tourId: 1,
    tourPrice: 20000,
    tourSpots: 0,
    tourLink: 'https://smileytour.stores.jp/items/65f85efb9353251e3a43fbc7',
  },
  {
    tourName: 'Ueno, Tokyo Tour May 8th',
    tourDescription: 'Tour on May 8th',
    tourDate: 'May 8th',
    tourImage: '/tour-may8.webp',
    tourId: 2,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/661fe65607e3670f1f4b71af',
  },
  {
    tourName: 'Ueno, Tokyo Tour May 17th',
    tourDescription: 'Tour on May 17th',
    tourDate: 'May 17th',
    tourImage: '/tour-may17.webp',
    tourId: 3,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/661fe6e0d1f923006d85f735',
  },
  {
    tourName: 'Ueno, Tokyo Tour May 23rd',
    tourDescription: 'Tour on May 23rd',
    tourDate: 'May 23rd',
    tourImage: '/tour-may23.webp',
    tourId: 4,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/661fe71d62289b003da60726',
  },
  {
    tourName: 'Ueno, Tokyo Tour May 31st',
    tourDescription: 'Tour on May 31st',
    tourDate: 'May 31st',
    tourImage: '/tour-may31.webp',
    tourId: 5,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/661fe79adb4bc11114413c31',
  },
  {
    tourName: 'Tokyo Private Tour',
    tourDescription: 'Private Tour for at least 2 people',
    tourImage: '/private-tour.webp',
    tourId: 6,
    tourPrice: 'TBD',
    tourSpots: 'TBD',
    tourLink: 'https://smileytour.stores.jp/items/649e31d385e3630037cff96e',
  },
]

export default function TourSidebar() {
  const { tourRef } = useAreaStore()

  return (
    <section
      className=" h-auto relative custom:p-4 py-4  custom:basis-1/4 custom:order-3 order-2 "
      id="tour"
      ref={tourRef}
    >
      <h1 className="flex  w-full items-center justify-center font-hammersmithone tracking-wide">
        <span className="relative top-0 w-full justify-center flex bg-gradient-to-r h-20 items-center from-pink-600 via-pink-400 to-pink-400/80 bg-clip-text text-4xl font-bold text-transparent">
          Upcoming Tours
        </span>
      </h1>

      <ul className="flex custom:flex-col flex-wrap items-center transition-all duration-150 ease-in-out">
        {tours.map((tour) => (
          <li
            key={tour.tourId}
            className="custom:w-full w-1/2  flex flex-col items-center custom:py-4 mb-2 custom:px-0 px-2 group self-start"
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
                    <i className="fas fa-heart fa-sm text-pink-500 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all ease-in-out"></i>
                    <p className="custom:text-lg">Learn More!</p>
                    <i className="fas fa-heart fa-sm text-pink-500 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all ease-in-out"></i>
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
