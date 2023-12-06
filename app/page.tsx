'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoSidebar from '@/components/InfoSidebar'
import MainContent from '@/components/MainContent'
import TourSidebar from '@/components/TourSidebar'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Home() {
  const [tours, setTours] = useState([
    {
      tourName: 'Tour 1',
      tourDescription: 'This is the first tour',
      tourImage: '/tour-dec8.webp',
      tourId: 1,
      tourPrice: 20000,
      tourSpots: 2,
    },
    {
      tourName: 'Tour 2',
      tourDescription: 'This is the second tour',
      tourImage: '/tour-dec8.webp',
      tourId: 2,
      tourPrice: 20000,
      tourSpots: 4,
    },
    {
      tourName: 'Tour 3',
      tourDescription: 'This is the third tour',
      tourImage: '/tour-dec8.webp',
      tourId: 3,
      tourPrice: 20000,
      tourSpots: 4,
    },
    {
      tourName: 'Private Tour',
      tourDescription: 'Private Tour for at least 2 people',
      tourImage: '/tour-dec8.webp',
      tourId: 4,
      tourPrice: 'TBD',
      tourSpots: 'TBD',
    },
  ])

  return (
    <main className=" bg-pink-300 w-full h-full flex flex-col ">
      <Header />
      <div className="flex w-full justify-between flex-grow border-t-4 border-pink-500 bg-gradient-to-br from-pink-300 via-pink-400 to-pink-300 ">
        <InfoSidebar />
        <MainContent />
        <TourSidebar tours={tours} />
      </div>
      <Footer />
    </main>
  )
}
