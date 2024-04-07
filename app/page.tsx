import Header from '@/components/Header'
import InfoSidebar from '@/components/InfoSidebar'
import MainContent from '@/components/MainContent'
import TourSidebar from '@/components/TourSidebar'
import AreaSelector from '@/components/AreaSelector'
import dynamic from 'next/dynamic'
import { fetchCommunityPostContent } from './action'


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

      <div className="flex flex-col custom:flex-row w-full justify-between flex-grow">
        <InfoSidebar postContent={postContent} />

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


