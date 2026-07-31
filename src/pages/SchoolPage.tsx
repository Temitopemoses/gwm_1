import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SchoolSection from '../features/school/SchoolSection'

export default function SchoolPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <SchoolSection />
      </main>
      <Footer />
    </>
  )
}
