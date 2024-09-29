'use client'

import { useAreaStore } from '@/store/areas'
import HeartSolid from './icons/HeartSolid'
import { useEffect, useState } from 'react'
import ArrowRight from './icons/ArrowRight'

const tours = [
  {
    tourArea: 'Asakusa',
    tourDate: 'September 30th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 6,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66b438ae5c88a2002e8295ac',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'October 3rd',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 7,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c309cd9a7b2101b1b50b30',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'October 4th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 8,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d40b9f4b15c016039fac38',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'October 10th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 9,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c309a11b56ba02a17d8313',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'October 11th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 10,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d40b62e2dc7a64ec9b4819',
  },
  {
    tourArea: 'Tokyo',
    tourDate: 'October 15th',
    tourImage: '/tours/hiddenTour.webp',
    tourId: 111,
    tourPrice: 50000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66f413229b0fd5508c04a592',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'October 17th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 11,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c30b95827c0203a8467283',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'October 18th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 12,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d40bda9b4c191e399dad59',
  },
  {
    tourArea: 'Tokyo',
    tourDate: 'October 22nd',
    tourImage: '/tours/hiddenTour.webp',
    tourId: 131,
    tourPrice: 50000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66f413a3f6dd213339ae106f',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'October 24th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 13,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c30bcb3fed3c029db7ce8c',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'October 25th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 14,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d410809b4c191fb09dad1d',
  },
  {
    tourArea: 'Tokyo',
    tourDate: 'October 29th',
    tourImage: '/tours/hiddenTour.webp',
    tourId: 151,
    tourPrice: 50000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66f41566f325fc0ce95849a1',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'October 31st',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 15,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c30c00f0a6af02a564b867',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'November 1st',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 16,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d410f95106c222bfd7685e',
  },
  {
    tourArea: 'Akihabara',
    tourDate: 'November 5th',
    tourImage: '/tours/akihabaraTour.webp',
    tourId: 17,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66bef6c2f848b1051513923e',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'November 7th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 18,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66ca7ace2ead37049e24510b',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'November 8th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 19,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d411474b15c017959fac36',
  },
  {
    tourArea: 'Akihabara',
    tourDate: 'November 11th',
    tourImage: '/tours/akihabaraTour.webp',
    tourId: 20,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66ca7ace2ead37049e24510b',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'November 14th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 21,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66ca7a96c7ed9a02434b8fbf',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'November 15th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 22,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d41178c56f48302f6365f9',
  },
  {
    tourArea: 'Akihabara',
    tourDate: 'November 19th',
    tourImage: '/tours/akihabaraTour.webp',
    tourId: 23,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d41d5f9b4c1922909dad4e',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'November 21st',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 24,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c317d070810903f0d7fc47',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'November 22nd',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 25,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d411bb4b15c017959fac81',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'November 28th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 26,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66c317fa3c173d03a903c598',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'November 29th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 27,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d411ee888a2e1b95e14eac',
  },
  {
    tourArea: 'Akihabara',
    tourDate: 'December 3rd',
    tourImage: '/tours/akihabaraTour.webp',
    tourId: 28,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d41fa14b15c01b1f9fac3a',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'December 5th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 29,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66ca7ace2ead37049e24510b',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'December 6th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 30,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d4123c888a2e1b7be14f17',
  },
  {
    tourArea: 'Akihabara',
    tourDate: 'December 10th',
    tourImage: '/tours/akihabaraTour.webp',
    tourId: 31,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d41fc09b4c1923449dad1f',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'December 12th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 32,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66ca7b18b90fcc36d006f698',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'December 13th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 33,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d4126c4b15c017b99faca7',
  },
  {
    tourArea: 'Akihabara',
    tourDate: 'December 17th',
    tourImage: '/tours/akihabaraTour.webp',
    tourId: 34,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d41fe44b15c01abb9facac',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'December 19th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 35,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66ca7b45b90fcc36d006f6b6',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'December 20th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 36,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d412a25106c222ebd768ad',
  },
  {
    tourArea: 'Akihabara',
    tourDate: 'December 24th',
    tourImage: '/tours/akihabaraTour.webp',
    tourId: 37,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d4240db363bc3bc06ff12c',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'December 26th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 38,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66ca7b812ead3704dd245144',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'December 27th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 39,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/66d412c74b15c017fd9fac41',
  },
]

export default function TourSidebar() {
  const { tourRef } = useAreaStore()

  const numberOfPages = Math.ceil(tours.length / 15)

  const [page, setPage] = useState(1)

  const [newTours, setNewTours] = useState(tours.slice(0, 16))

  function handlePageIncrease() {
    setPage((prevPage) => prevPage + 1)
  }

  function handlePageDecrease() {
    setPage((prevPage) => prevPage - 1)
  }

  function handlePageClick(pageNumber: number) {
    setPage(pageNumber)
  }

  useEffect(() => {
    const startIndex = (page - 1) * 16
    const endIndex = startIndex + 16
    setNewTours(tours.slice(startIndex, endIndex))
  }, [page, tours])

  return (
    <section
      className=" h-auto relative custom:p-4 py-4  custom:basis-1/4  order-2  flex flex-col items-center"
      id="tour"
      ref={tourRef}
    >
      <h1 className="flex  w-fit items-center justify-center   shadow p-1 px-2 rounded-xl sm:text-4xl text-3xl text-white bg-gradient-to-r from-[#f382bc] to-[#ed3996] mb-4 relative contentBackgroundBlur2">
       Tours
      </h1>

      <ul className="custom:flex custom:flex-wrap grid grid-cols-2 justify-center items-center transition-all duration-150 ease-in-out max-w-[1600px] custom:gap-x-16">
        {newTours.map((tour) => (
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
                alt={`${tour.tourArea} ${tour.tourDate}`}
                className="rounded-lg tourShadow aspect-square max-w-[288px] w-full group-hover:border-2  border-pink-500  object-cover"
              />

              <p className="font-extrabold text-white pt-2  tracking-wide text-xl custom:text-shadow-1 text-shadow-2">
                {tour.tourArea}
              </p>

              <h2 className="font-extrabold text-pink-500 tracking-wide text-xl flex flex-col items-center ">
                <span
                  className={`text-white custom:text-shadow-1 text-shadow-2 `}
                >
                  {`${tour.tourDate}`}
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

                  <div className='flex items-center custom:gap-2 gap-1'>
                    <p className="custom:text-lg text-sm">Learn More </p>
                    <ArrowRight size={`w-[1.2rem]`}/>
                  </div>
                    
                    <HeartSolid />
                  </div>
                )}
              </h3>
            </a>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 mb-4 text-pink-700">
        <button
          onClick={handlePageDecrease}
          disabled={page === 1}
          className={`${page === 1 ? 'opacity-30' : ''} font-semibold text-xl`}
        >
          {'<'}
        </button>
        <div className="flex gap-2">
          {Array.from({ length: numberOfPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <div
                key={pageNumber}
                className={`p-1 px-3 rounded-full cursor-pointer hover:bg-pink-500 hover:text-white font-semibold text-xl ${
                  page === pageNumber ? 'underline-offset-2 underline' : ''
                }`}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </div>
            )
          )}
        </div>
        <button
          onClick={handlePageIncrease}
          disabled={page === numberOfPages}
          className={`${
            page === numberOfPages ? 'opacity-30' : ''
          } font-semibold text-xl`}
        >
          {'>'}
        </button>
      </div>
    </section>
  )
}
