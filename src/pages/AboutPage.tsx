import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import VisionSection from '../features/vision/VisionSection'
import MinistrySection from '../features/ministry/MinistrySection'
import MandateSection from '../features/mandate/MandateSection'
import FaithSection from '../features/faith/FaithSection'
import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const fadeIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
}



export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        
        {/* Ambient Background Effects */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(190, 18, 60,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: -1
        }} />
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: -1
        }} />



        <VisionSection />
        <MinistrySection />
        <FaithSection />
      </main>
      <Footer />
    </>
  )
}
