import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import VisionSection from '../features/vision/VisionSection'
import MinistrySection from '../features/ministry/MinistrySection'
import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
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
          background: 'radial-gradient(circle, rgba(29, 78, 216,0.06) 0%, transparent 70%)',
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

        <section className="section" style={{ padding: '6rem 0 4rem' }}>
          <div className="container">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '4rem',
                alignItems: 'center'
              }}
            >
              {/* Left Column: Text content */}
              <motion.div variants={fadeUp}>
                <span className="badge" style={{ marginBottom: '1.5rem' }}>The Mandate</span>
                <h1 style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', 
                  fontWeight: 800, 
                  lineHeight: 1.1,
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)'
                }}>
                  A Global <br />
                  <span style={{
                    background: 'linear-gradient(135deg, var(--primary-600), var(--primary-400))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Wake-Up Call.</span>
                </h1>
                
                <div style={{ 
                  fontSize: '1.125rem', 
                  lineHeight: 1.8, 
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem'
                }}>
                  <p>
                    <strong>Global Witness Ministry</strong> is a nondenominational Christian mandate, born out of the need to aggressively win souls for the growth of the church and advancement of the Kingdom of God.
                  </p>
                  <p>
                    The realization that the church has gone asleep and the enemies are desperately taking over in many of our cities and nations across the world necessitated a fresh and loud wake-up call for all believers, irrespective of denomination.
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Premium Visual Card */}
              <motion.div variants={fadeUp} style={{ position: 'relative' }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.65)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(29, 78, 216, 0.15)',
                  borderRadius: '2rem',
                  padding: '3rem 2.5rem',
                  boxShadow: '0 24px 50px -12px rgba(29, 78, 216, 0.15)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Decorative corner accent */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '150px',
                    height: '150px',
                    background: 'linear-gradient(135deg, rgba(29, 78, 216, 0.1), transparent)',
                    borderRadius: '0 2rem 0 100%',
                  }} />

                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: 'linear-gradient(135deg, var(--primary-600), var(--primary-800))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '2rem',
                    boxShadow: '0 8px 24px rgba(29, 78, 216, 0.3)'
                  }}>
                    <Flame size={28} color="white" />
                  </div>
                  
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    Arise as Soldiers
                  </h3>
                  
                  <p style={{ 
                    fontSize: '1.05rem', 
                    lineHeight: 1.7, 
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem'
                  }}>
                    We are called to violently go to the highways and the hedges to compel multitudes to come into the Kingdom and to take over all nations by force unto God, that the kingdom of this world shall become the Kingdom of our Lord Jesus Christ.
                  </p>

                  <div style={{
                    padding: '1.25rem',
                    background: 'rgba(29, 78, 216, 0.05)',
                    borderRadius: '1rem',
                    borderLeft: '4px solid var(--primary-600)'
                  }}>
                    <p style={{ 
                      margin: 0, 
                      fontWeight: 700, 
                      color: 'var(--primary-800)',
                      fontSize: '0.95rem',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase'
                    }}>
                      So, this is the message behind the name.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Subtle Divider */}
        <div style={{ 
          width: '100%', 
          height: '1px', 
          background: 'linear-gradient(90deg, transparent, rgba(29, 78, 216,0.1), transparent)',
          marginBottom: '2rem'
        }} />

        <VisionSection />
        <MinistrySection />
      </main>
      <Footer />
    </>
  )
}
