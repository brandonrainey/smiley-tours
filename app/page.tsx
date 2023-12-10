'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoSidebar from '@/components/InfoSidebar'
import MainContent from '@/components/MainContent'
import TourSidebar from '@/components/TourSidebar'
import MobileTourSidebar from '@/components/MobileTourSidebar'
import MobileMainContent from '@/components/MobileMainContent'
import MobileInfoSidebar from '@/components/MobileInfoSidebar'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0)

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
      tourImage: '/tour-dec15.webp',
      tourId: 2,
      tourPrice: 20000,
      tourSpots: 2,
      tourLink: 'https://smileytour.stores.jp/items/655c100a7588610092ce7347',
    },
    {
      tourName: 'Tour 3',
      tourDescription: 'This is the third tour',
      tourImage: '/tour-dec22.webp',
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

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    updateWindowWidth()
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [])

  return (
    <main className=" bg-pink-300 w-full h-full flex flex-col ">
      <Header />
      <div
        className={`flex  ${
          windowWidth < 1100 ? 'flex-col' : 'flex-row'
        } w-full justify-between flex-grow   `}
      >
        {windowWidth > 1100 ? (
          <InfoSidebar />
        ) : (
          <MobileTourSidebar tours={tours} />
        )}
        {windowWidth > 1100 ? <MainContent /> : <MobileMainContent />}
        {windowWidth > 1100 ? (
          <TourSidebar tours={tours} />
        ) : (
          <MobileInfoSidebar />
        )}
      </div>
      <Footer windowWidth={windowWidth} />
    </main>
  )
}
