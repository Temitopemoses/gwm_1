import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import JoinCommunityModal from '../../components/modals/JoinCommunityModal'

const headlines = [
  'Carry the Gospel',
  'Ignite Revival',
  'Transform Nations',
  'Witness with Power',
]

const scriptures = [
  { ref: 'Matthew 28:19', text: '"Go therefore and make disciples of all nations."' },
  { ref: 'Acts 1:8', text: '"You will receive power when the Holy Spirit has come upon you."' },
  { ref: 'Isaiah 60:1', text: '"Arise, shine, for your light has come."' },
  { ref: 'Mark 16:15', text: '"Go into all the world and proclaim the gospel."' },
]

const floatingShapes = [
  { size: 300, x: '10%', y: '20%', color: 'rgba(29, 78, 216,0.12)', delay: 0 },
  { size: 200, x: '75%', y: '10%', color: 'rgba(167,139,250,0.08)', delay: 1.5 },
  { size: 150, x: '85%', y: '60%', color: 'rgba(99,102,241,0.10)', delay: 3 },
  { size: 100, x: '5%', y: '70%', color: 'rgba(147,51,234,0.15)', delay: 2 },
]

export default function HeroSection() {
  const [headlineIdx, setHeadlineIdx] = useState(0)
  const [scriptureIdx, setScriptureIdx] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const h = setInterval(() => setHeadlineIdx(i => (i + 1) % headlines.length), 3000)
    const s = setInterval(() => setScriptureIdx(i => (i + 1) % scriptures.length), 4500)
    return () => { clearInterval(h); clearInterval(s) }
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '6rem',
    }}>
      <JoinCommunityModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Background layers */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(29, 78, 216,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      {/* Floating shapes */}
      {floatingShapes.map((s, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: s.delay }}
          style={{
            position: 'absolute',
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            borderRadius: '50%',
            background: s.color,
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />
      ))}

      <div className="container relative" style={{ zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: '54rem', margin: '0 auto', textAlign: 'center' }}>

          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ marginBottom: '1.75rem' }}
          >
            <span className="badge">
              <Sparkles size={13} />
              Join the Movement · Revival is Here
            </span>
          </motion.div>

          {/* Dynamic Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            style={{ marginBottom: '1.5rem' }}
          >
            <h1 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Empowered to
            </h1>
            <div style={{ height: '1.2em', overflow: 'hidden', position: 'relative' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={headlineIdx}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                  }}
                  className="gradient-text"
                >
                  {headlines[headlineIdx]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: 'var(--text-secondary)',
              maxWidth: '40rem',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            A community of bold believers committed to advancing the Kingdom of God through prayer, revival, and radical witness.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.875rem',
              justifyContent: 'center',
              marginBottom: '5rem',
            }}
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary"
              onClick={() => setIsModalOpen(true)}
              style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}
            >
              Join Community
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Scripture rotator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '2.5rem',
              minHeight: '4rem',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={scriptureIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem' }}
              >
                <p style={{
                  fontStyle: 'italic',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9375rem',
                }}>
                  {scriptures[scriptureIdx].text}
                </p>
                <span style={{
                  fontSize: '0.8125rem',
                  color: 'var(--primary-700)',
                  fontWeight: 600,
                }}>
                  — {scriptures[scriptureIdx].ref}
                </span>
              </motion.div>
            </AnimatePresence>
          </motion.div>


        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-muted)',
          fontSize: '0.75rem',
        }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: 24,
            height: 40,
            border: '1.5px solid var(--border-strong)',
            borderRadius: 999,
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 6,
          }}
        >
          <div style={{
            width: 4,
            height: 8,
            background: 'var(--primary-600)',
            borderRadius: 999,
          }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
