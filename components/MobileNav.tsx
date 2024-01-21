'use client'

import React from 'react'

interface MobileNavProps {
    tourRef: any
    eventsRef: any
    }

export default function MobileNav({tourRef, eventsRef}: MobileNavProps) {

    const scrollToRef = (ref: any) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <nav>
      <ul className="flex justify-around custom:hidden bg-pink-300 p-0 text-white font-semibold text-2xl w-full z-30">
        <li className="hover:text-pink-700 text-shadow-7 flex items-center">
            <img src="/ganko.webp" alt="ganko image" className='h-[4rem]'/>
          <p onClick={() => scrollToRef(tourRef)}>Tours</p>
        </li>
        <li className="hover:text-pink-700 text-shadow-7 flex items-center">
          <p onClick={() => scrollToRef(eventsRef)}>Events</p>
          <img src="/bulma.webp" alt="bulma image" className='h-[3rem]'/>
        </li>
        
      </ul>
    </nav>
  )
}
