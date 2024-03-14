import Header from '@/components/Header'
import InfoSidebar from '@/components/InfoSidebar'
import MainContent from '@/components/MainContent'
import TourSidebar from '@/components/TourSidebar'
import MobileNav from '@/components/MobileNav'
import AreaSelector from '@/components/AreaSelector'
import dynamic from 'next/dynamic'

const SectionCarousel = dynamic(() => import('@/components/SectionCarousel'), {
  ssr: false,
})

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  ssr: true,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true,
})

export default function Home() {
  return (
    <div className="  w-full h-full flex flex-col relative">
      <Header />

      <MobileNav />

      <div className="flex flex-col custom:flex-row w-full justify-between flex-grow">
        <InfoSidebar />

        <main className="flex flex-col items-center custom:order-2 order-1 gap-8">
          <MainContent />

          <AreaSelector />

          <SectionCarousel />

        </main>

        <TourSidebar />
      </div>

      <Testimonials />

      <Footer />
    </div>
  )
}
