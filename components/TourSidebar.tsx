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
    <div className=" bg-pink-200 h-auto  min-w-80 relative p-4 font-Varela">
      <Image
        src="/bulma.png"
        width={100}
        height={72}
        alt="bulma image"
        className="absolute -top-12 -left-10 "
      />
      <h1 className="text-center text-4xl font-bold mb-6 mt-4 text-white textShadow2">
        Upcoming Tours
      </h1>
      <ul className="flex flex-col items-center space-y-32">
        {tours.map((tour) => (
          <li
            key={tour.tourId}
            className="w-full h-36 flex flex-col items-center "
          >
            <a href={tour.tourLink} className="flex flex-col items-center">
              <Image
                src={tour.tourImage}
                alt={tour.tourName}
                width={288}
                height={288}
                className="rounded shadow-lg"
              />

              <h2 className="font-bold text-white textShadow tracking-wide text-lg">¥{tour.tourPrice}</h2>
              <h3 className="font-semibold text-white textShadow">
                {tour.tourSpots === 0 ? (
                  <p className="line-through text-slate-300">Sold Out</p>
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
