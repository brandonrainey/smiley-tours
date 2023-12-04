import React from 'react'

interface TourSidebarProps {    
    tours: any[]
}

export default function TourSidebar({ tours }: TourSidebarProps) {

  return (
    <div className='bg-slate-300 h-full w-60'>
        <h1>Tours</h1>
        <ul>
            {tours.map((tour) => (
                <li key={tour.tourId}>{tour.tourName}</li>
            ))} 
        </ul>
    </div>
  )
}
