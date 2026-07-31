import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CommunitySection from '../features/community/CommunitySection'

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <CommunitySection />
      </main>
      <Footer />
    </>
  )
}
