import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import TractsSection from '../features/tracts/TractsSection'

export default function TractsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <TractsSection />
      </main>
      <Footer />
    </>
  )
}
