import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PrayerSection from '../features/prayer/PrayerSection'

export default function PrayerPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <PrayerSection />
      </main>
      <Footer />
    </>
  )
}
