'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoSidebar from '@/components/InfoSidebar'
import TourSidebar from '@/components/TourSidebar'
import Image from 'next/image'
import React, { useState } from 'react'



export default function Home() {

  const [tours, setTours] = useState([
    {
      tourName: 'Tour 1',
      tourDescription: 'This is the first tour',
      tourImage: '',
      tourId: 1,
      tourPrice: 100,
      tourSpots: 10,
    }, 
    {
      tourName: 'Tour 2',
      tourDescription: 'This is the second tour',
      tourImage: '',
      tourId: 2,
      tourPrice: 200,
      tourSpots: 20,
    }, 
    {
      tourName: 'Tour 3',
      tourDescription: 'This is the third tour',
      tourImage: '',
      tourId: 3,
      tourPrice: 300,
      tourSpots: 30,
    }
  ])

  return (
    <main className='bg-pink-300 w-[100vw] h-[100vh] overflow-x-hidden flex flex-col'>
      <Header />
      <div className='flex w-full justify-between h-full'>
        <InfoSidebar />
        <div className='bg-slate-200 h-full w-full'>
          <h1>Content</h1>  
        </div>
        <TourSidebar tours={tours}/>
      </div>
      <Footer />
    </main>
  )
}
