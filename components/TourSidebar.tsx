'use client'

import { useAreaStore } from '@/store/areas'

const tours = [
  {
    tourName: 'Ueno, Tokyo Tour March 29th',
    tourDescription: 'Tour on March 29th',
    tourDate: 'March 29th',
    tourImage: '/tour-march29.webp',
    tourId: 5,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/65cd77eb24fa03002c0f0024',
  },
  {
    tourName: 'Ueno, Tokyo Tour April 5th',
    tourDescription: 'Tour on April 5th',
    tourDate: 'April 5th',
    tourImage: '/tour-april5.webp',
    tourId: 6,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/65f857feea1c921e15253945',
  },
  {
    tourName: 'Ueno, Tokyo Tour April 12th',
    tourDescription: 'Tour on April 12th',
    tourDate: 'April 12th',
    tourImage: '/tour-april12.webp',
    tourId: 7,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/65cd6ad1e37c5b051e133e62',
  },
  {
    tourName: 'Ueno, Tokyo Tour April 16th',
    tourDescription: 'Tour on April 16th',
    tourDate: 'April 16th',
    tourImage: '/tour-april16.webp',
    tourId: 8,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/65cd6940ce75b20483af0911',
  },
  {
    tourName: 'Ueno, Tokyo Tour April 26th',
    tourDescription: 'Tour on April 26th',
    tourDate: 'April 26th',
    tourImage: '/tour-april26.webp',
    tourId: 9,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/65f85efb9353251e3a43fbc7',
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
      className=" h-auto relative custom:p-4 py-4  custom:basis-1/4 custom:order-3 order-2 "
      id="tour"
      ref={tourRef}
    >
      <img
        src="/bulma.webp"
        alt="bulma image"
        className={`absolute custom:inline-block hidden custom:-top-16 custom:-left-10 -top-1 right-10 custom:w-[100px] w-[70px] h-auto`}
      />

      <h1
        className={`text-center text-4xl font-semibold mb-6 mt-4  text-white z-20 bg-pink-400/40 rounded-xl w-fit px-2 py-1 mx-auto font-hammersmithone italic custom:text-shadow-3 text-shadow-4 custom:tracking-wide border-dotted border-2 backdropFilterBlur`}
      >
        Upcoming Tours
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
