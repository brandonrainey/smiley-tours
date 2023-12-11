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
}

export default function TourSidebar({ tours }: TourSidebarProps) {
  return (
    <div className=" bg-pink-200 h-auto w-full relative p-4 font-Varela">
      <Image
        src="/bulma.png"
        width={70}
        height={72}
        alt="bulma image"
        className="absolute -top-8 right-10 "
      />
      <h1 className="text-center text-4xl font-bold mb-6 mt-4 text-white textShadowMobile">
        Upcoming Tours
      </h1>
      <ul className="flex flex-wrap  items-center">
        {tours.map((tour) => (
          <li
            key={tour.tourId}
            className="w-1/2 h-auto flex flex-col items-center mb-2 px-2 "
          >
            <a href={tour.tourLink} className="flex flex-col items-center ">
              <Image
                src={tour.tourImage}
                alt={tour.tourName}
                width={200}
                height={288}
                className="rounded shadow-lg"
              />

              <h2 className="font-bold text-white textShadowMobile2 tracking-wide text-lg">¥{tour.tourPrice}</h2>
              <h3 className="font-semibold text-white textShadowMobile2">
                {tour.tourSpots === 0 ? (
                  <p className="line-through">Sold Out</p>
                ) : (
                  <p>Book Now!</p>
                )}
              </h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
