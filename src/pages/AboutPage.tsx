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

        <section className="section" style={{ padding: '3rem 0 2rem' }}>
          <div className="container">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '3rem',
                alignItems: 'center'
              }}
            >
              {/* Left Column: Text content */}
              <motion.div variants={fadeUp}>
                <span className="badge" style={{ marginBottom: '1.5rem' }}>Acts 1:8</span>
                <h1 style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', 
                  fontWeight: 800, 
                  lineHeight: 1.1,
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)'
                }}>
                  Witness Unto <br />
                  <span style={{
                    background: 'linear-gradient(135deg, var(--primary-600), var(--primary-400))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Jesus Christ Globally.</span>
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

              {/* Right Column: Professional Visual Panel */}
              <motion.div variants={fadeIn} style={{ position: 'relative', minHeight: '460px' }}>

                {/* Floating orb — top right */}
                <div className="animate-float" style={{
                  position: 'absolute', top: '-24px', right: '-20px',
                  width: 120, height: 120,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 35%, rgba(96,165,250,0.35), rgba(29,78,216,0.08))',
                  border: '1px solid rgba(29,78,216,0.12)',
                  zIndex: 0,
                }} />

                {/* Floating orb — bottom left */}
                <div className="animate-float-reverse" style={{
                  position: 'absolute', bottom: '-16px', left: '-20px',
                  width: 80, height: 80,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 35%, rgba(251,191,36,0.28), rgba(29,78,216,0.06))',
                  border: '1px solid rgba(251,191,36,0.15)',
                  zIndex: 0,
                }} />

                {/* Main card */}
                <div style={{
                  position: 'relative', zIndex: 1,
                  borderRadius: '2rem',
                  padding: '0.25rem',
                  background: 'linear-gradient(135deg, rgba(29,78,216,0.18) 0%, rgba(96,165,250,0.10) 50%, rgba(251,191,36,0.10) 100%)',
                  boxShadow: '0 32px 64px -16px rgba(29, 78, 216, 0.18)',
                }}>
                  <div style={{
                    borderRadius: '1.85rem',
                    background: 'linear-gradient(160deg, #f8faff 0%, #eef2ff 50%, #faf8f0 100%)',
                    padding: '2.25rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>

                    {/* Subtle bg grid */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: 'linear-gradient(rgba(29,78,216,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,0.04) 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                      pointerEvents: 'none',
                    }} />

                    {/* Scripture banner */}
                    <div style={{
                      position: 'relative',
                      borderRadius: '1.25rem',
                      padding: '1.25rem 1.5rem',
                      background: 'linear-gradient(135deg, var(--primary-700) 0%, var(--primary-900) 100%)',
                      boxShadow: '0 8px 32px rgba(29,78,216,0.30)',
                      overflow: 'hidden',
                    }}>
                      {/* inner glow */}
                      <div style={{
                        position: 'absolute', top: '-30px', right: '-30px',
                        width: 120, height: 120, borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(96,165,250,0.25), transparent 70%)',
                        pointerEvents: 'none',
                      }} />

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                        <div style={{
                          width: 40, height: 40, borderRadius: '0.75rem',
                          background: 'rgba(255,255,255,0.15)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0, backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255,255,255,0.2)',
                        }}>
                          <Flame size={20} color="rgba(251,191,36,1)" />
                        </div>
                        <div>
                          <p style={{
                            margin: 0, color: 'rgba(255,255,255,0.65)',
                            fontSize: '0.75rem', fontWeight: 600,
                            letterSpacing: '0.08em', textTransform: 'uppercase',
                            marginBottom: '0.35rem',
                          }}>Our Commission</p>
                          <p style={{
                            margin: 0, color: '#ffffff',
                            fontSize: '0.975rem', fontWeight: 500,
                            lineHeight: 1.6,
                          }}>
                            "…ye shall be witnesses unto me…unto the uttermost part of the earth."
                          </p>
                          <p style={{
                            margin: '0.5rem 0 0', color: 'rgba(251,191,36,0.9)',
                            fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em',
                          }}>Acts 1:8</p>
                        </div>
                      </div>
                    </div>


                    {/* Mission pillars */}
                    <div style={{
                      borderRadius: '1.1rem',
                      padding: '1.1rem 1.25rem',
                      background: 'rgba(255,255,255,0.70)',
                      border: '1px solid rgba(29,78,216,0.08)',
                      backdropFilter: 'blur(12px)',
                    }}>
                      <p style={{
                        margin: '0 0 0.75rem',
                        fontSize: '0.72rem', fontWeight: 700,
                        color: 'var(--primary-700)',
                        textTransform: 'uppercase', letterSpacing: '0.09em',
                      }}>Core Mission Pillars</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                        {[
                          'Soul Winning & Evangelism',
                          'Church Revival & Wake-up Call',
                          'Kingdom Advancement Globally',
                        ].map((pillar) => (
                          <div key={pillar} style={{
                            display: 'flex', alignItems: 'center', gap: '0.6rem',
                          }}>
                            <div style={{
                              width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                              background: 'linear-gradient(135deg, var(--primary-600), var(--gold-400))',
                            }} />
                            <span style={{
                              fontSize: '0.855rem', fontWeight: 500,
                              color: 'var(--text-primary)',
                            }}>{pillar}</span>
                          </div>
                        ))}
                      </div>
                    </div>

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

        <MandateSection />
        <VisionSection />
        <MinistrySection />
        <FaithSection />
      </main>
      <Footer />
    </>
  )
}
