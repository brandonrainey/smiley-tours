import React from 'react'

export default function MobileNav() {
  return (
    <nav>
      <ul className="flex justify-around custom:hidden bg-pink-300 p-0 text-white font-semibold text-2xl w-full z-30">
        <li className="hover:text-pink-700 text-shadow-7 flex items-center">
            <img src="/ganko.webp" alt="ganko image" className='h-[4rem]'/>
          <a href="#tour">Tours</a>
        </li>
        <li className="hover:text-pink-700 text-shadow-7 flex items-center">
          <a href="#events">Events</a>
          <img src="/bulma.webp" alt="bulma image" className='h-[3rem]'/>
        </li>
        
      </ul>
    </nav>
  )
}
