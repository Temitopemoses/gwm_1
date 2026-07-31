import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../features/hero/HeroSection'
import NewsletterSection from '../features/newsletter/NewsletterSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
