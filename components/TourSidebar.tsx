'use client'

import { useAreaStore } from '@/store/areas'
import HeartSolid from './icons/HeartSolid'
import { useEffect, useState } from 'react'
import ArrowRight from './icons/ArrowRight'

const tours = [
  {
    tourArea: 'Asakusa',
    tourImage: '/tours/asakusaTour.webp',
    tourId: 1,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/676cf1cd1a112f05c58a22cd',
  },
  {
    tourArea: 'Shinjuku',
    tourImage: '/tours/shinjukuTour.webp',
    tourId: 2,
    tourPrice: 25000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/676ccb818168c301584176fb',
  },
  {
    tourArea: 'Akihabara',
    tourImage: '/tours/akihabaraTour.webp',
    tourId: 3,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/67712e11fc29e877b59c6ca6',
  },
  {
    tourArea: 'Girls Bar Hopping',
    tourImage: '/tours/barhoppingTour.webp',
    tourId: 4,
    tourPrice: 30000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/676ce9beb9d16e030d836c70',
  },
  {
    tourArea: 'Ueno Tour',
    tourImage: '/tours/uenoTour.webp',
    tourId: 5,
    tourPrice: 20000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/6771315cfc29e878929c6cae',
  },
  {
    tourArea: 'Virtual Day Tour',
    tourImage: '/tours/virtualDayTour.webp',
    tourId: 6,
    tourPrice: 5000,
    tourSpots: 4,
    tourLink: 'https://smileywalk.shop/items/678cb3a49ecae61e3df2e08f',
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
                alt={`${tour.tourArea}`}
                className="rounded-lg tourShadow  max-w-[288px] w-full group-hover:scale-105 transition-all  border-pink-500  object-cover"
              />

              <p className="font-extrabold text-white pt-2  tracking-wide text-xl custom:text-shadow-1 text-shadow-2">
                {tour.tourArea}
              </p>

              <h2 className="font-extrabold text-pink-500 tracking-wide text-xl flex flex-col items-center ">
                {' '}
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

      {numberOfPages > 1 && (
        <div className="flex gap-2 mb-4 text-pink-700">
          <button
            onClick={handlePageDecrease}
            disabled={page === 1}
            className={`${
              page === 1 ? 'opacity-30' : ''
            } font-semibold text-xl`}
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
      )}
    </section>
  )
}
