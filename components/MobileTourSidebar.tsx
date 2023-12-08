import React from 'react'
import Image from 'next/image'

interface TourSidebarProps {
  tours: any[]
}

export default function TourSidebar({ tours }: TourSidebarProps) {
  return (
    <div className=" bg-pink-200 h-[1000px] w-full relative p-4 font-Varela">
      <Image src='/bulma.png' width={100} height={72} alt='bulma image' className='absolute -top-12 -left-10 '/>
      <h1 className='text-center text-4xl font-bold mb-6 mt-4 text-white ' style={{ textShadow: '4px 2px 8px rgba(243, 15, 133, 0.8)' }}>Upcoming Tours</h1>
      <ul className='flex flex-wrap  items-center '>
        {tours.map((tour) => (
          <li key={tour.tourId} className="w-1/2 h-auto flex flex-col items-center mb-2">
            <a href={tour.tourLink}>
              <Image src={tour.tourImage} alt={tour.tourName} width={200} height={288} className='rounded shadow-lg'/>
            </a>
            

            <h2 className='font-bold'>¥{tour.tourPrice}</h2>
            <h3 className='font-semibold text-white textShadow'>{tour.tourSpots === 0 ? (<p className='line-through'>Sold Out</p>) : (<p><span className='text-xl'>{tour.tourSpots}</span> spots left!</p>)}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}