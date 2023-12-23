'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoSidebar from '@/components/InfoSidebar'
import MainContent from '@/components/MainContent'
import TourSidebar from '@/components/TourSidebar'
import React, { useState, useEffect } from 'react'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(1101)

  const [tours, setTours] = useState([
    {
      tourName: 'Tour 1',
      tourDescription: 'Tour on December 8th',
      tourImage: '/tour-dec8.webp',
      tourId: 1,
      tourPrice: 20000,
      tourSpots: 0,
      tourLink: 'https://smileytour.stores.jp/items/655c0fabc52ca918d3a77bda',
    },
    {
      tourName: 'Tour 2',
      tourDescription: 'Tour on December 15th',
      tourImage: '/tour-dec15.webp',
      tourId: 2,
      tourPrice: 20000,
      tourSpots: 0,
      tourLink: 'https://smileytour.stores.jp/items/655c100a7588610092ce7347',
    },
    {
      tourName: 'Tour 3',
      tourDescription: 'Tour on December 22th',
      tourImage: '/tour-dec22.webp',
      tourId: 3,
      tourPrice: 20000,
      tourSpots: 0,
      tourLink: 'https://smileytour.stores.jp/items/655c10d14e11f11fef524f15',
    },
    {
      tourName: 'Tour 4',
      tourDescription: 'Tour on December 29th',
      tourImage: '/tour-dec29-square.webp',
      tourId: 4,
      tourPrice: 20000,
      tourSpots: 4,
      tourLink: 'https://smileytour.stores.jp/items/655c11154e11f11fef524f43',
    },
    {
      tourName: 'Private Tour',
      tourDescription: 'Private Tour for at least 2 people',
      tourImage: '/private-tour.webp',
      tourId: 5,
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
    <div className=" bg-pink-300 w-full h-full flex flex-col ">
      <Header />
      <div
        className={`flex  ${
          windowWidth < 1100 ? 'flex-col-reverse' : 'flex-row'
        } w-full justify-between flex-grow   `}
      >
        <InfoSidebar windowWidth={windowWidth} />

        <MainContent windowWidth={windowWidth} />

        <TourSidebar tours={tours} windowWidth={windowWidth} />
      </div>
      <Testimonials windowWidth={windowWidth} />
      <Footer windowWidth={windowWidth} />
    </div>
  )
}
