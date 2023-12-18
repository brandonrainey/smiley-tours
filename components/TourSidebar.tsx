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
    <section className=" bg-pink-200 h-auto relative p-4 font-Varela basis-1/4">
      <Image
        src="/bulma.webp"
        width={100}
        height={72}
        alt="bulma image"
        className="absolute -top-12 -left-10 "
      />
      <h1 className="text-center text-4xl font-bold mb-6 mt-4  text-white textShadow3 ">
        Upcoming Tours
      </h1>

      <ul className="flex flex-col items-center ">
        {tours.map((tour) => (
          <li
            key={tour.tourId}
            className="w-full  flex flex-col items-center py-4 group"
          >
            <a href={tour.tourLink} className="flex flex-col items-center">
              <Image
                src={tour.tourImage}
                alt={tour.tourName}
                width={288}
                height={288}
                className="rounded newShadow"
              />

              <h2 className="font-bold text-slate-800  tracking-wide text-xl pt-2">
                ¥{tour.tourPrice}
              </h2>
              <h3 className="font-semibold text-white textShadow">
                {tour.tourSpots === 0 ? (
                  <p className="line-through text-slate-300 text-lg">
                    Sold Out
                  </p>
                ) : (
                  <div className="flex items-center gap-2 ">
                    <i className="fas fa-heart fa-sm text-pink-500 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all ease-in-out"></i>
                    <p className="text-lg">Book Now!</p>
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
