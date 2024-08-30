'use client'

import { useAreaStore } from '@/store/areas'
import HeartSolid from './icons/HeartSolid'

const tours = [
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
    tourName: 'Shinjuku, Tokyo Tour October 3rd',
    tourDescription: 'Tour on October 3rd',
    tourDate: 'October 3rd',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 11,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c309cd9a7b2101b1b50b30',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour October 10th',
    tourDescription: 'Tour on October 10th',
    tourDate: 'October 10th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 12,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c309a11b56ba02a17d8313',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour October 17th',
    tourDescription: 'Tour on October 17th',
    tourDate: 'October 17th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 13,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c30b95827c0203a8467283',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour October 24th',
    tourDescription: 'Tour on October 24th',
    tourDate: 'October 24th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 14,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c30bcb3fed3c029db7ce8c',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour October 31st',
    tourDescription: 'Tour on October 31st',
    tourDate: 'October 31st',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 15,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c30c00f0a6af02a564b867',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour November 7th',
    tourDescription: 'Tour on November 7th',
    tourDate: 'November 7th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 16,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c31768827c0204a04672e9',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour November 14th',
    tourDescription: 'Tour on November 14th',
    tourDate: 'November 14th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 17,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c31799f0a6af045664b56a',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour November 21st',
    tourDescription: 'Tour on November 21st',
    tourDate: 'November 21st',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 18,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c317d070810903f0d7fc47',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour November 28th',
    tourDescription: 'Tour on November 28th',
    tourDate: 'November 28th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 19,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c317fa3c173d03a903c598',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour December 5th',
    tourDescription: 'Tour on December 5th',
    tourDate: 'December 5th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 20,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66ca7ace2ead37049e24510b',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour December 12th',
    tourDescription: 'Tour on December 12th',
    tourDate: 'December 12th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 21,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66ca7b18b90fcc36d006f698',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour December 19th',
    tourDescription: 'Tour on December 19th',
    tourDate: 'December 19th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 22,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66ca7b45b90fcc36d006f6b6',
  },
  {
    tourName: 'Shinjuku, Tokyo Tour December 26th',
    tourDescription: 'Tour on December 26th',
    tourDate: 'December 26th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 23,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66ca7b812ead3704dd245144',
  },
  {
    tourName: 'Private Tour',
    tourDescription: 'Private Tour for at least 2 people',
    tourImage: '/tours/private-tour.webp',
    tourId: 24,
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
                className="rounded-lg tourShadow aspect-square max-w-[288px] w-full group-hover:scale-[1.025] transition-all ease-in-out object-cover"
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
