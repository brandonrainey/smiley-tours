import React from 'react'
import Image from 'next/image'

interface Tour {
  tourName: string
  tourDescription: string
  tourImage: string
  tourId: number
  tourPrice: number | string
  tourSpots: number | string
  tourLink: string
}

interface TourSidebarProps {
  tours: Tour[]
  windowWidth: number
}

export default function TourSidebar({ tours, windowWidth }: TourSidebarProps) {
  return (
    <section className=" bg-pink-200 h-auto relative custom:p-4 py-4 font-Varela custom:basis-1/4">
      <img
        src="/bulma.webp"
        alt="bulma image"
        className={`absolute custom:-top-12 custom:-left-10 -top-8 right-10 custom:w-[100px] w-[70px] h-auto`}
      />
      {/* <Image
        src="/bulma.webp"
        width={windowWidth > 1100 ? 100 : 70}
        height={72}
        alt="bulma image"
        className={`absolute custom:-top-12 custom:-left-10 -top-8 right-10`}
      /> */}

      <h1
        className={`text-center text-4xl font-semibold mb-6 mt-4  text-white z-20 bg-pink-400/40 rounded-xl w-fit px-2 py-1 mx-auto font-CarterOne custom:text-shadow-3 text-shadow-4`}
      >
        Upcoming Tours
      </h1>

      <ul className="flex custom:flex-col flex-wrap items-center ">
        {tours.map((tour) => (
          <li
            key={tour.tourId}
            className="custom:w-full w-1/2  flex flex-col items-center custom:py-4 mb-2 custom:px-0 px-2 group"
          >
            <a href={tour.tourLink} className="flex flex-col items-center">
              <img
                src={tour.tourImage}
                alt={`${tour.tourName} image `}
                className="rounded tourShadow max-w-[400px] w-full"
              />
              {/* <Image
                src={tour.tourImage}
                alt={tour.tourName}
                sizes="(max-width: 1100px) 100vw, 288px"
                priority={true}
                width={288}
                height={288}
                className="rounded tourShadow"
              /> */}

              <h2 className="font-extrabold text-pink-500 pt-2  tracking-wide text-xl textShadowMobileTourWhite">
                ¥{tour.tourPrice}
              </h2>
              <h3
                className={`font-semibold text-white pb-2 custom:pb-0  custom:text-shadow-1 text-shadow-2 `}
              >
                {/* custom:textShadow textShadowMobileTour */}
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
