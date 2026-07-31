import { motion } from 'framer-motion'
import { Eye, Target, Globe2, Heart } from 'lucide-react'

const pillars = [
  {
    icon: Eye,
    title: 'See the Vision',
    description: 'We believe in a world transformed by the power of the Gospel — where every soul encounters the living God.',
  },
  {
    icon: Target,
    title: 'Pursue the Mission',
    description: 'Intentional, strategic, and Spirit-led. We train and equip witnesses to reach their communities and beyond.',
  },
  {
    icon: Globe2,
    title: 'Reach the Nations',
    description: 'From local streets to distant shores, our mandate is global. No geography is beyond the reach of the Gospel.',
  },
  {
    icon: Heart,
    title: 'Build the Community',
    description: 'Revival flourishes in community. We are family — rooted in love, accountability, and shared kingdom purpose.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function VisionSection() {
  return (
    <section id="vision" className="section" style={{ position: 'relative' }}>
      {/* Subtle glow */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600,
        height: 400,
        background: 'radial-gradient(ellipse, rgba(29, 78, 216,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="badge">Our Vision</span>
          <h2>
            <strong>OUR VISION</strong>
          </h2>
          <p style={{ maxWidth: '44rem', marginTop: '1.25rem', fontSize: '1rem', lineHeight: 1.8 }}>
            We are declaring a kingdom imagination where faith awakens every soul, destiny is recovered, believers stand in fullness, and the world is rewritten by the rule of God.
          </p>
          <div style={{
            marginTop: '2rem',
            display: 'grid',
            gap: '1rem',
            padding: '1.75rem',
            background: 'rgba(29, 78, 216,0.05)',
            border: '1px solid rgba(29, 78, 216,0.18)',
            borderRadius: 'var(--radius-3xl)',
            boxShadow: 'var(--shadow-card)',
          }}>
            {[
              'To see that all men believe in the Word and are saved unto God.',
              'To see that all men come to full knowledge of God and their purpose in God.',
              'To see that all believers realise their ultimate purposes in God.',
              'To see that all kingdoms of this world become the kingdom of God.',
            ].map((text, index) => (
              <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '2.75rem',
                  height: '2.75rem',
                  display: 'grid',
                  placeItems: 'center',
                  background: 'linear-gradient(135deg, rgba(29, 78, 216,0.25), rgba(79,70,229,0.12))',
                  color: 'var(--primary-700)',
                  fontWeight: 700,
                  borderRadius: '1rem',
                }}>
                  {index + 1}
                </div>
                <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
