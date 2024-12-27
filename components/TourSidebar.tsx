'use client'

import { useAreaStore } from '@/store/areas'
import HeartSolid from './icons/HeartSolid'
import { useEffect, useState } from 'react'
import ArrowRight from './icons/ArrowRight'

const tours = [
  {
    tourArea: 'Asakusa',
    tourDate: 'December 26th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 3,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6708f08e3626e40e9827f6e2',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'January 7th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 4,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6708f02b3626e40e9827f67f',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'January 10th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 5,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6708f08e3626e40e9827f6e2',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'January 15th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 6,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6708f02b3626e40e9827f67f',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'January 17th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 7,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6708f08e3626e40e9827f6e2',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'January 22nd',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 8,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6751110882a50904ce548f6a',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'January 24th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 9,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6708f08e3626e40e9827f6e2',
  },

  {
    tourArea: 'Shinjuku',
    tourDate: 'January 28th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 10,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/67051fdea7510904ceaa2cf7',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'January 31st',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 11,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6708f08e3626e40e9827f6e2',
  },

  {
    tourArea: 'Shinjuku',
    tourDate: 'Feburary 4th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 12,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6705202dedfc4e081a7fea49',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'Feburary 7th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 13,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6708f08e3626e40e9827f6e2',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'Feburary 13th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 14,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6708f02b3626e40e9827f67f',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'Feburary 14th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 15,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6708f08e3626e40e9827f6e2',
  },

  {
    tourArea: 'Shinjuku',
    tourDate: 'Febuary 18th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 16,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6705206d712e6e08356be2cb',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'Feburary 21st',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 17,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6708f08e3626e40e9827f6e2',
  },

  {
    tourArea: 'Shinjuku',
    tourDate: 'Febuary 25th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 18,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6705295f712e6e09f76be2d8',
  },
  {
    tourArea: 'Asakusa',
    tourDate: 'Feburary 28th',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 19,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6708f08e3626e40e9827f6e2',
  },

  {
    tourArea: 'Shinjuku',
    tourDate: 'March 11th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 20,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/670520c2bfa2870cda703d87',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'March 18th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 21,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/670520dd835a670c6b38031f',
  },
  {
    tourArea: 'Shinjuku',
    tourDate: 'March 25th',
    tourImage: '/tours/shinjuku-tour.webp',
    tourId: 22,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/670520fbbfa2870cda703d9f',
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
      <h1 className="flex  w-fit items-center justify-center   shadow p-1 px-2 rounded-xl sm:text-4xl text-3xl text-white bg-gradient-to-r from-[#f382bc] to-[#ed3996] mb-6 custom:mt-2 relative contentBackgroundBlur2">
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

                    <div className="flex items-center custom:gap-2 gap-1">
                      <p className="custom:text-lg text-sm">Learn More </p>
                      <ArrowRight size={`w-[1.2rem]`} />
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
