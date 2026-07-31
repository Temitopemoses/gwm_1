import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import TestimonialsSection from '../features/testimonials/TestimonialsSection'

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}
