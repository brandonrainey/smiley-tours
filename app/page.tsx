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
      tourSpots: 0,
      tourLink: 'https://smileytour.stores.jp/items/655c0fabc52ca918d3a77bda',
    },
    {
      tourName: 'Tour 2',
      tourDescription: 'This is the second tour',
      tourImage: '/tour-dec15.avif',
      tourId: 2,
      tourPrice: 20000,
      tourSpots: 2,
      tourLink: 'https://smileytour.stores.jp/items/655c100a7588610092ce7347',
    },
    {
      tourName: 'Tour 3',
      tourDescription: 'This is the third tour',
      tourImage: '/tour-dec22.avif',
      tourId: 3,
      tourPrice: 20000,
      tourSpots: 4,
      tourLink: 'https://smileytour.stores.jp/items/655c10d14e11f11fef524f15',
    },
    {
      tourName: 'Private Tour',
      tourDescription: 'Private Tour for at least 2 people',
      tourImage: '/private-tour.webp',
      tourId: 4,
      tourPrice: 'TBD',
      tourSpots: 'TBD',
      tourLink: 'https://smileytour.stores.jp/items/649e31d385e3630037cff96e',
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
