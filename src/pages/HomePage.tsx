import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../features/hero/HeroSection'
import VisionSection from '../features/vision/VisionSection'
import MinistrySection from '../features/ministry/MinistrySection'
import CommunitySection from '../features/community/CommunitySection'
import RevivalSection from '../features/revival/RevivalSection'
import SchoolSection from '../features/school/SchoolSection'
import TractsSection from '../features/tracts/TractsSection'
import EventsSection from '../features/events/EventsSection'
import SermonsSection from '../features/sermons/SermonsSection'
import GallerySection from '../features/gallery/GallerySection'
import TestimonialsSection from '../features/testimonials/TestimonialsSection'
import PrayerSection from '../features/prayer/PrayerSection'
import NewsletterSection from '../features/newsletter/NewsletterSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* <VisionSection />
        <MinistrySection />
        <CommunitySection />
        <RevivalSection />
        <SchoolSection />
        <TractsSection />
        <EventsSection />
        <SermonsSection />
        <GallerySection />
        <TestimonialsSection />
        <PrayerSection /> */}
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}

