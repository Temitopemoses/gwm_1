import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import RevivalSection from '../features/revival/RevivalSection'

export default function RevivalPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <RevivalSection />
      </main>
      <Footer />
    </>
  )
}
