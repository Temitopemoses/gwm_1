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
        <section className="section" style={{ padding: '4rem 0', background: 'rgba(190, 18, 60, 0.02)' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Global Witnesses Ministry
            </h2>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              Is a non-denominational Christian movement dedicated to sharing the message of Jesus Christ worldwide through the power of the Holy Spirit.
            </p>
          </div>
        </section>
      
      </main>
      <Footer />
    </>
  )
}

