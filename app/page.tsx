

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoSidebar from '@/components/InfoSidebar'
import MainContent from '@/components/MainContent'
import TourSidebar from '@/components/TourSidebar'
import Testimonials from '@/components/Testimonials'
import MobileNav from '@/components/MobileNav'
import ContentSectionOne from '@/components/ContentSectionOne'
import ContentSectionTwo from '@/components/ContentSectionTwo'
import ContentSectionThree from '@/components/ContentSectionThree'
import AreaSelector from '@/components/AreaSelector'

export default function Home() {
  

  return (
    <div className="  w-full h-full flex flex-col relative">
      <Header />

      <MobileNav />

      <div className="flex flex-col custom:flex-row w-full justify-between flex-grow" >
        <InfoSidebar />

        <main className="flex flex-col items-center custom:order-2 order-1 gap-8">
          <MainContent />

          <AreaSelector />

          <ContentSectionOne />
          <ContentSectionTwo />
          <ContentSectionThree />
        </main>

        <TourSidebar />
      </div>

      <Testimonials />

      <Footer />
    </div>
  )
}
