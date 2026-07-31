import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import GallerySection from '../features/gallery/GallerySection'

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <GallerySection />
      </main>
      <Footer />
    </>
  )
}
