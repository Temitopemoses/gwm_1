import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import MandateSection from '../features/mandate/MandateSection'

export default function MandatePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        <MandateSection />
      </main>
      <Footer />
    </>
  )
}
