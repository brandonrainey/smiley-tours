'use client'

import { useAreaStore } from '@/store/areas'

export default function MobileNav() {
  const { tourRef, eventsRef } = useAreaStore()

  const scrollToRef = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className='m-4 rounded-xl'>
      <ul className="flex justify-around custom:hidden bg-pink-300 p-0 text-white font-semibold text-2xl w-full z-30 rounded-xl border-2  border-yellow-100">
        <li className="hover:text-pink-700 text-shadow-7 flex items-center font-hammersmithone">
          <img src="/ganko.webp" alt="ganko image" className="h-[4rem]" />
          <p onClick={() => scrollToRef(tourRef)} className="cursor-pointer">
            Tours
          </p>
        </li>
        <li className="hover:text-pink-700 text-shadow-7 flex items-center font-hammersmithone">
          <p onClick={() => scrollToRef(eventsRef)} className="cursor-pointer">
            Events
          </p>
          <img src="/bulma.webp" alt="bulma image" className="h-[3rem]" />
        </li>
      </ul>
    </nav>
  )
}
