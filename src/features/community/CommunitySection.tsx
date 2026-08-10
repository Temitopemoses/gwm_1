import { motion } from 'framer-motion'
import { Globe2, Target, Heart } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    color: '#1d4ed8',
    title: 'The Evangelistic Call',
    body: 'We are committed to witnessing Jesus Christ from community to community — reaching people where they live, work, and gather.',
  },
  {
    icon: Globe2,
    color: '#7c3aed',
    title: 'The Apostolic Mandate',
    body: 'Our mandate is clear: to ensure every person across the world hears the message of salvation and receives the opportunity to believe in Christ.',
  },
  {
    icon: Heart,
    color: '#d97706',
    title: 'The Spirit-Led Method',
    body: 'Through prayer, preaching, and Spirit‑led outreach, Community Witnesses carries the burden that everyone must be reached.',
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

export default function CommunitySection() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '4rem 0 3rem',
          background:
            'linear-gradient(135deg, rgba(29,78,216,0.05) 0%, rgba(124,58,237,0.03) 100%)',
          borderBottom: '1px solid rgba(29,78,216,0.08)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(29,78,216,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}>
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              style={{ maxWidth: '680px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <span className="badge">
                  <Globe2 size={12} />
                  Our Expressions
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#1d4ed8',
                    background: 'rgba(29,78,216,0.08)',
                    border: '1px solid rgba(29,78,216,0.18)',
                    borderRadius: '999px',
                    padding: '0.3rem 0.8rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Community_Witnesses
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem',
                  color: 'var(--text-primary)',
                }}
              >
                Community{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, var(--primary-600), var(--primary-400))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Witnesses
                </span>
              </h1>

              <p style={{ fontSize: '1.1rem', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                This is the <strong>evangelistic and apostolic expression</strong> of Global Witnesses
                Ministry. We are committed to witnessing Jesus Christ from community to community,
                reaching people where they live, work, and gather.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-secondary)' }}>
                Our mandate is clear: to ensure every person across the world hears the message of
                salvation and receives the opportunity to believe in Christ. Through prayer, preaching,
                and Spirit‑led outreach, Community Witnesses carries the burden that{' '}
                <em>everyone must be reached</em>.
              </p>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
              style={{ position: 'relative' }}
            >
              <div style={{
                borderRadius: '1.75rem',
                overflow: 'hidden',
                boxShadow: '0 24px 56px -12px rgba(29,78,216,0.22)',
                position: 'relative',
              }}>
                <img
                  src="/community_outreach.jpg"
                  alt="Community Witnesses doing street evangelism"
                  style={{ width: '100%', height: '380px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(14,30,80,0.65) 0%, transparent 50%)',
                }} />
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                  <p style={{ margin: 0, color: '#ffffff', fontWeight: 700, fontSize: '0.95rem' }}>
                    Reaching Every Community
                  </p>
                  <p style={{ margin: 0, color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem' }}>
                    Acts 1:8 · Luke 14:23
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Three Pillars ── */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge">How We Operate</span>
            <h2><strong>Our Approach</strong></h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '1.5rem',
              marginTop: '1.5rem',
            }}
          >
            {pillars.map(({ icon: Icon, color, title, body }) => (
              <motion.div
                key={title}
                variants={item}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{
                  background: `linear-gradient(135deg, ${color}0e, ${color}03)`,
                  border: `1px solid ${color}28`,
                  borderRadius: 'var(--radius-3xl)',
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute', right: '-20px', bottom: '-20px',
                    width: '120px', height: '120px',
                    background: `${color}10`, borderRadius: '50%', filter: 'blur(25px)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    width: 50, height: 50,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${color}18`, border: `1px solid ${color}30`,
                    borderRadius: 14, marginBottom: '1.25rem',
                  }}
                >
                  <Icon size={24} color={color} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  {title}
                </h3>
                <p style={{ fontSize: '0.93rem', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
