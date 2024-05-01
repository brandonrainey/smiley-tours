import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import TourSidebar from '@/components/TourSidebar'
import AreaSelector from '@/components/AreaSelector'
import dynamic from 'next/dynamic'
import { fetchCommunityPostContent } from './action'

const InfoSidebar = dynamic(() => import('@/components/InfoSidebar'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})

const SectionCarousel = dynamic(() => import('@/components/SectionCarousel'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true,
  loading: () => <p>Loading...</p>,
})

export default async function Home() {
  const postContent = await fetchCommunityPostContent()

  return (
    <div className="  w-full h-full flex flex-col relative">
      <Header />

      <div className="flex flex-col w-full justify-between flex-grow relative">
        <InfoSidebar postContent={postContent} />

        <main className="flex flex-col items-center order-1 gap-8  w-full">
          <MainContent />
        </main>

        <div className="flex flex-col items-center order-3">
          <AreaSelector />

          <SectionCarousel />
        </div>

        <TourSidebar />
      </div>

      <Testimonials />

      <Footer />
    </div>
  )
}
