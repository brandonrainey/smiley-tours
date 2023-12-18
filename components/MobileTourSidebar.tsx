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
    <section className=" bg-pink-200 h-auto w-full relative p-4 font-Varela">
      <Image
        src="/bulma.webp"
        width={70}
        height={72}
        alt="bulma image"
        className="absolute -top-8 right-10 "
      />
      <h1 className="text-center text-4xl font-bold mb-6 mt-4 text-white textShadow3Mobile">
        Upcoming Tours
      </h1>
      <ul className="flex flex-wrap  items-center">
        {tours.map((tour) => (
          <li
            key={tour.tourId}
            className="w-1/2 h-auto flex flex-col items-center mb-2 px-2 group"
          >
            <a href={tour.tourLink} className="flex flex-col items-center ">
              <Image
                src={tour.tourImage}
                alt={tour.tourName}
                width={200}
                height={288}
                className="rounded newShadow"
              />

              <h2 className="font-bold text-slate-800  tracking-wide text-lg">
                ¥{tour.tourPrice}
              </h2>
              <h3 className="font-semibold text-white textShadowMobile2">
                {tour.tourSpots === 0 ? (
                  <p className="line-through text-slate-300">Sold Out</p>
                ) : (
                  <div className="flex items-center gap-2 ">
                    <i className="fas fa-heart fa-sm text-pink-500 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all ease-in-out"></i>
                    <p className="">Book Now!</p>
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
