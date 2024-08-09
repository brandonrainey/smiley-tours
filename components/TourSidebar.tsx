'use client'

import { useAreaStore } from '@/store/areas'
import HeartSolid from './icons/HeartSolid'

const tours = [
  {
    tourName: 'Shinjuku, Tokyo Tour August 15th',
    tourDescription: 'Tour on August 15th',
    tourDate: 'August 15th',
    tourImage: '/tours/tour-aug15.webp',
    tourId: 2,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66817e106d819c07148d8a07',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour August 22nd',
    tourDescription: 'Tour on August 22nd',
    tourDate: 'August 22nd',
    tourImage: '/tours/tour-aug22.webp',
    tourId: 3,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66817e9eeb496f00b69cee00',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour August 29th',
    tourDescription: 'Tour on August 29th',
    tourDate: 'August 29th',
    tourImage: '/tours/tour-aug29.webp',
    tourId: 4,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66818081b14f581e253db220',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour September 5th',
    tourDescription: 'Tour on September 5th',
    tourDate: 'September 5th',
    tourImage: '/tours/tour-sep5.webp',
    tourId: 5,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66b426b33fd2e1078c3f9b68',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour September 12th',
    tourDescription: 'Tour on September 12th',
    tourDate: 'September 12th',
    tourImage: '/tours/tour-sep12.webp',
    tourId: 6,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66b427c770810906789b333f',
  },
  {
    tourName: 'Akihabara, Tokyo Tour September 13th',
    tourDescription: 'Tour on September 13th',
    tourDate: 'September 13th',
    tourImage: '/tours/tour-sep13.webp',
    tourId: 7,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66b4318060053708b6294330',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour September 19th',
    tourDescription: 'Tour on September 19th',
    tourDate: 'September 19th',
    tourImage: '/tours/tour-sep19.webp',
    tourId: 8,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66b432a23130cc0a8dad6d62',
  },
  {
    tourName: 'Asakusa, Tokyo Tour September 20th',
    tourDescription: 'Tour on September 20th',
    tourDate: 'September 20th',
    tourImage: '/tours/tour-aug29.webp',
    tourId: 9,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66b437cf6d1512002a12f99f',
  },
  {
    tourName: 'Asakusa, Tokyo Tour September 30th',
    tourDescription: 'Tour on September 30th',
    tourDate: 'September 30th',
    tourImage: '/tours/tour-sep20.webp',
    tourId: 10,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66b438ae5c88a2002e8295ac',
  },
  {
    tourName: 'Private Tour',
    tourDescription: 'Private Tour for at least 2 people',
    tourImage: '/tours/private-tour.webp',
    tourId: 11,
    tourPrice: '20000',
    tourSpots: 'TBD',
    tourLink: 'https://smileywalk.shop/items/661fe71d62289b003da60726',
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
      <h1 className="flex  w-fit items-center justify-center   shadow p-1 px-2 rounded-xl sm:text-4xl text-3xl text-white bg-gradient-to-r from-[#f382bc] to-[#ed3996] mb-4 relative contentBackgroundBlur2">
        Upcoming Tours
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
                className="rounded-lg tourShadow aspect-square max-w-[288px] w-full group-hover:scale-[1.025] transition-all ease-in-out"
              />

              <h2 className="font-extrabold text-pink-500 pt-2  tracking-wide text-xl flex flex-col items-center ">
                <span
                  className={`text-white custom:text-shadow-1 text-shadow-2 `}
                >
                  {tour.tourName === 'Private Tour' ? tour.tourName : `${tour.tourDate}`}
                </span>{' '}
                {`¥${tour.tourPrice}`}
                
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
