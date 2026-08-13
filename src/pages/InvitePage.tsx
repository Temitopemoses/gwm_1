import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { motion } from 'framer-motion'
import { CalendarDays, Flame, BookOpen, Zap, Wind, HandHeart } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const scriptures = [
  { ref: 'Matthew 3:11', text: 'Experiencing the baptism of fire of the Holy Spirit.', icon: Flame, color: '#ea580c' },
  { ref: 'Hebrews 1:7', text: 'Preaching the Gospel with passion and burning for God for soul-winning.', icon: BookOpen, color: '#dc2626' },
  { ref: 'Acts 1:8', text: 'Receiving supernatural power to become global witnesses.', icon: Zap, color: '#ca8a04' },
  { ref: 'Acts 2:4', text: 'Experiencing fresh outpouring and utterance of the Spirit.', icon: Wind, color: '#0284c7' },
  { ref: 'Acts 10:38', text: 'Walking in the divine anointing to heal, deliver, and do good.', icon: HandHeart, color: '#16a34a' },
]

export default function InvitePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        
        {/* Background Effects */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '50vw', height: '50vh',
          background: 'radial-gradient(circle, rgba(2ea,88,12,0.08) 0%, transparent 60%)',
          filter: 'blur(80px)', zIndex: -1, pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0,
          width: '40vw', height: '40vh',
          background: 'radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 60%)',
          filter: 'blur(80px)', zIndex: -1, pointerEvents: 'none'
        }} />

        <section style={{ padding: '4rem 0 5rem' }}>
          <div className="container">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              style={{ maxWidth: 860, margin: '0 auto' }}
            >
              
              {/* Header */}
              <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <span className="badge" style={{ marginBottom: '1.25rem' }}>
                  <CalendarDays size={14} style={{ marginRight: 6 }} />
                  Invite Us
                </span>
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '1.5rem',
                  color: 'var(--text-primary)'
                }}>
                  Revival Meetings, Conferences & Crusades
                </h1>
                <p style={{
                  fontSize: '1.15rem',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  maxWidth: 720,
                  margin: '0 auto'
                }}>
                  Partner with our ministry to bring the life-transforming power of the Holy Spirit to your city. We would be overjoyed to witness a fresh outpouring of fire and Holy Spirit power upon everyone in your congregation.
                </p>
                <p style={{
                  fontSize: '1.15rem',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  maxWidth: 720,
                  margin: '1.25rem auto 0'
                }}>
                  Our goal is to see believers burning for God and supernaturally equipped to boldly go out and witness to the world, in perfect alignment with foundational scriptures.
                </p>

                {/* Hero Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                  style={{ marginTop: '3.5rem', position: 'relative' }}
                >
                  <img 
                    src="/dove.jpeg" 
                    alt="Holy Spirit Fire" 
                    style={{ 
                      width: '100%', 
                      maxWidth: '860px', 
                      height: 'auto', 
                      borderRadius: '1.5rem', 
                      boxShadow: '0 24px 50px rgba(234,88,12,0.15)',
                      display: 'block',
                      margin: '0 auto'
                    }} 
                  />
                </motion.div>
              </motion.div>

              {/* Scriptures Grid */}
              <motion.div variants={stagger} style={{ display: 'grid', gap: '1.25rem' }}>
                {scriptures.map((s, i) => (
                  <motion.div
                    key={s.ref}
                    variants={fadeUp}
                    className="glass-card"
                    style={{
                      padding: '1.75rem',
                      borderRadius: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem'
                    }}
                  >
                    <div style={{
                      width: 56, height: 56, borderRadius: '1rem',
                      background: `${s.color}15`,
                      border: `1px solid ${s.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <s.icon size={24} color={s.color} />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.375rem'
                      }}>
                        {s.ref}
                      </h3>
                      <p style={{
                        fontSize: '0.95rem',
                        color: 'var(--text-secondary)',
                        margin: 0,
                        lineHeight: 1.5
                      }}>
                        {s.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Call to Action */}
              <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: '4rem' }}>
                <a href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                  Send an Invitation
                </a>
              </motion.div>

            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
