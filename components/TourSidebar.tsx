import React from 'react'
import Image from 'next/image'
import tourJan19 from '../public/tour-jan19-small.webp'
import tourJan26 from '../public/tour-jan26-small.webp'
import tourJan29 from '../public/tour-jan29-small.webp'
import tourFeb2 from '../public/tour-feb2.webp'
import tourFeb9 from '../public/tour-feb9.webp'
import tourFeb16 from '../public/tour-feb16.webp'
import tourFeb27 from '../public/tour-feb27.webp'
import tourPrivate from '../public/private-tour.webp'

const tours = [
  {
    tourName: 'jan 19 tour',
    tourDescription: 'Tour on janurary 19th',
    tourImage: tourJan19,
    tourId: 1,
    tourPrice: 20000,
    tourSpots: 0,
    tourLink: 'https://smileytour.stores.jp/items/658aa16827d5b205f1c153d6',
  },
  {
    tourName: 'jan 26 tour',
    tourDescription: 'Tour on janurary 26th',
    tourImage: tourJan26,
    tourId: 2,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/658aa1b73cc7cf07c428e031',
  },
  {
    tourName: 'jan 29 tour',
    tourDescription: 'Tour on janurary 29th',
    tourImage: tourJan29,
    tourId: 3,
    tourPrice: 30000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/658aa2d13cc7cf071d28e048',
  },
  {
    tourName: 'feb 2 tour',
    tourDescription: 'Tour on febuary 2th',
    tourImage: tourFeb2,
    tourId: 4,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/65a5456f1ebb490ecf2b9360',
  },
  {
    tourName: 'feb 9 tour',
    tourDescription: 'Tour on febuary 9th',
    tourImage: tourFeb9,
    tourId: 5,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/65a54780b14f58002a4d0b96',
  },
  {
    tourName: 'feb 16 tour',
    tourDescription: 'Tour on febuary 16th',
    tourImage: tourFeb16,
    tourId: 6,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/65a5498776f1c9002ada2c26',
  },
  {
    tourName: 'feb 27 tour',
    tourDescription: 'Tour on febuary 27th',
    tourImage: tourFeb27,
    tourId: 7,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileytour.stores.jp/items/65a549d5e2dc7a00301255b3',
  },
  {
    tourName: 'Private Tour',
    tourDescription: 'Private Tour for at least 2 people',
    tourImage: tourPrivate,
    tourId: 8,
    tourPrice: 'TBD',
    tourSpots: 'TBD',
    tourLink: 'https://smileytour.stores.jp/items/649e31d385e3630037cff96e',
  },
]

export default function TourSidebar() {
  return (
    <section className="  h-auto relative custom:p-4 py-4 font-Varela custom:basis-1/4 ">
      <img
        src="/bulma.webp"
        alt="bulma image"
        className={`absolute custom:-top-12 custom:-left-10 -top-8 right-10 custom:w-[100px] w-[70px] h-auto`}
      />

      <h1
        className={`text-center text-4xl font-semibold mb-6 mt-4  text-white z-20 bg-pink-400/40 rounded-xl w-fit px-2 py-1 mx-auto font-CarterOne custom:text-shadow-3 text-shadow-4`}
      >
        Upcoming Tours
      </h1>

      <ul className="flex custom:flex-col flex-wrap items-center transition-all duration-150 ease-in-out">
        {tours.map((tour) => (
          <li
            key={tour.tourId}
            className="custom:w-full w-1/2  flex flex-col items-center custom:py-4 mb-2 custom:px-0 px-2 group"
          >
            <a href={tour.tourLink} className="flex flex-col items-center">
              {/* <img
                src={tour.tourImage}
                alt={`${tour.tourName} image `}
                className="rounded tourShadow max-w-[400px] w-[200px] h-[200px]"
                style={{ width: '100%', height: 'auto' }}
              /> */}
              <Image
                src={tour.tourImage}
                alt={tour.tourName}
                sizes="(max-width: 1100px) 100vw, 288px"
                priority={true}
                width={288}
                height={288}
                quality={80}
                placeholder="blur"
                className="rounded tourShadow"
              />

              <h2 className="font-extrabold text-pink-500 pt-2  tracking-wide text-xl textShadowMobileTourWhite">
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
                    <p className="custom:text-lg">Book Now!</p>
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
