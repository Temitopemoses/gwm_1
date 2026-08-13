import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { motion } from 'framer-motion'
import { HandHeart, Globe2, Flame, Users } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const getInvolvedOptions = [
  {
    icon: HandHeart,
    label: 'Partner With Us',
    desc: 'Support the global mission financially.',
    color: '#059669', // Emerald
  },
  {
    icon: Globe2,
    label: 'Join a Mission',
    desc: 'Travel and witness with our teams.',
    color: '#ea580c', // Orange
  },
  {
    icon: Flame,
    label: 'Prayer Network',
    desc: 'Pray for our leaders and open doors.',
    color: '#7c3aed', // Purple
  },
]

export default function GetInvolvedPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

        {/* Ambient glows */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)', zIndex: -1, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '0%', left: '-10%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(234,88,12,0.05) 0%, transparent 70%)',
          filter: 'blur(80px)', zIndex: -1, pointerEvents: 'none',
        }} />

        {/* ── Hero ── */}
        <section style={{ padding: '5rem 0 3rem' }}>
          <div className="container">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}
            >
              <motion.span variants={fadeUp} className="badge" style={{ marginBottom: '1.25rem' }}>
                <Users size={14} style={{ marginRight: 6 }} />
                Get Involved
              </motion.span>
              <motion.h1
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 800, lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                  color: 'var(--text-primary)',
                }}
              >
                Join the{' '}
                <span style={{
                  background: 'linear-gradient(135deg, var(--primary-600), var(--primary-400))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Movement
                </span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: '1.15rem', lineHeight: 1.8,
                  color: 'var(--text-secondary)', margin: 0,
                }}
              >
                There are many ways you can be a part of the Global Witnesses Ministry. Discover how you can contribute your time, resources, and prayers to impact the world.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── Options Grid ── */}
        <section style={{ padding: '2rem 0 6rem' }}>
          <div className="container">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: 1100,
                margin: '0 auto'
              }}
            >
              {getInvolvedOptions.map(({ icon: Icon, label, desc, color }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="glass-card"
                  style={{ 
                    padding: '3rem 2rem', 
                    borderRadius: '1.5rem', 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.boxShadow = `0 20px 40px ${color}15`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(15, 23, 42, 0.04)'
                  }}
                >
                  <div style={{
                    width: 72, height: 72, borderRadius: '1.25rem',
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}>
                    <Icon size={32} color={color} />
                  </div>
                  <h3 style={{
                    margin: '0 0 1rem', fontSize: '1.4rem', fontWeight: 700,
                    color: 'var(--text-primary)', letterSpacing: '-0.01em',
                  }}>
                    {label}
                  </h3>
                  <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
