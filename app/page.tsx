'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoSidebar from '@/components/InfoSidebar'
import MainContent from '@/components/MainContent'
import TourSidebar from '@/components/TourSidebar'
import React, { useRef } from 'react'
import Testimonials from '@/components/Testimonials'
import MobileNav from '@/components/MobileNav'

export default function Home() {

  const tourRef = useRef()
  
  const eventsRef = useRef()
  
  return (
    <div className="  w-full h-full flex flex-col relative">
      
      <Header />

      <MobileNav tourRef={tourRef} eventsRef={eventsRef}/>

      <div
        className='flex flex-col custom:flex-row w-full justify-between flex-grow'  
      >
        <InfoSidebar eventsRef={eventsRef}/>

        <MainContent />

        <TourSidebar tourRef={tourRef}/>

      </div>

      <Testimonials />

      <Footer />
    </div>
  )
}
