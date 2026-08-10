import { motion } from 'framer-motion'
import { Flame, Radio, Calendar, Globe2, ArrowRight, ChevronRight, Sparkles, Zap } from 'lucide-react'

const pillars = [
  {
    icon: Flame,
    color: '#db2777',
    title: 'Ignite Spiritual Hunger',
    body: 'We create environments where believers encounter the living God afresh — stirring a holy desire for more of His presence and power.',
  },
  {
    icon: Zap,
    color: '#7c3aed',
    title: 'Activate Spiritual Gifts',
    body: 'We teach and release believers to operate in their God-given gifts — because an equipped Church is an effective witness.',
  },
  {
    icon: Sparkles,
    color: '#d97706',
    title: 'Restore Power and Boldness',
    body: 'We pray and preach until every believer is clothed with the fire and boldness of the Holy Spirit to witness Christ to the nations.',
  },
]

const upcomingRevival = [
  {
    title: 'Global Revival Moment',
    date: 'This Saturday',
    location: 'Online (Zoom & YouTube)',
    type: 'Weekly Meeting',
    status: 'Join Now',
  },
  {
    title: 'Global Revival Moment',
    date: 'Next Saturday',
    location: 'Online (Zoom & YouTube)',
    type: 'Weekly Meeting',
    status: 'Upcoming',
  },
  {
    title: 'Global Revival Moment',
    date: 'Following Saturday',
    location: 'Online (Zoom & YouTube)',
    type: 'Weekly Meeting',
    status: 'Upcoming',
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

export default function RevivalSection() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '4rem 0 3rem',
          background:
            'linear-gradient(135deg, rgba(219,39,119,0.05) 0%, rgba(124,58,237,0.04) 100%)',
          borderBottom: '1px solid rgba(219,39,119,0.1)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 60% at 70% 50%, rgba(219,39,119,0.08) 0%, transparent 70%)',
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
                    color: '#db2777',
                    background: 'rgba(219,39,119,0.08)',
                    border: '1px solid rgba(219,39,119,0.2)',
                    borderRadius: '999px',
                    padding: '0.3rem 0.8rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Revival_Witnesses_Network
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
                Revival Witnesses{' '}
                <span style={{ background: 'linear-gradient(135deg, #db2777, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Network
                </span>
              </h1>

              <p style={{ fontSize: '1.1rem', lineHeight: 1.85, color: 'var(--text-secondary)', marginBottom: '1.25rem', maxWidth: '680px' }}>
                This is the <strong>revival and empowerment arm</strong> of the ministry. Its purpose
                is to awaken, strengthen, and renew believers within the Church so they can fully
                embrace the global witnessing mandate of{' '}
                <span style={{ color: '#db2777', fontWeight: 600 }}>Acts 1:8</span>.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-secondary)', maxWidth: '680px', marginBottom: '1.5rem' }}>
                We focus on igniting spiritual hunger, activating spiritual gifts, and restoring power
                and boldness in every believer — preparing them to become effective witnesses of Christ
                to the nations.
              </p>

              {/* Distinction callout */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  display: 'inline-flex',
                  gap: '0.75rem',
                  padding: '1.25rem 1.75rem',
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(219,39,119,0.15)',
                  borderRadius: 'var(--radius-2xl)',
                  boxShadow: '0 8px 30px -10px rgba(219,39,119,0.15)',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', flex: 1, minWidth: '200px' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1d4ed8', marginTop: '0.4rem', flexShrink: 0 }} />
                  <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Community Witnesses</strong> focuses on the world of sin
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', flex: 1, minWidth: '200px' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#db2777', marginTop: '0.4rem', flexShrink: 0 }} />
                  <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Revival Witnesses Network</strong> is for the Church to receive the fire and power of the Holy Spirit to witness
                  </p>
                </div>
              </motion.div>
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
                boxShadow: '0 24px 56px -12px rgba(219,39,119,0.25)',
                position: 'relative',
              }}>
                <img
                  src="/revival_gathering.jpg"
                  alt="Revival Witnesses Network gathering"
                  style={{ width: '100%', height: '420px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(90,10,60,0.75) 0%, transparent 50%)',
                }} />
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                  <p style={{ margin: 0, color: '#ffffff', fontWeight: 700, fontSize: '0.95rem' }}>
                    Fire Falling on the Church
                  </p>
                  <p style={{ margin: 0, color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem' }}>
                    Acts 2:4 · Acts 1:8
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Three Focus Pillars ── */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge">Our Focus</span>
            <h2><strong>What We Do</strong></h2>
            <p>We prepare the Church to witness — through fire, power, and Holy Spirit boldness.</p>
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

      {/* ── Weekly Gathering ── */}
      <section
        className="section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--bg-secondary)',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 50% at 20% 50%, rgba(236,72,153,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 50% 60% at 85% 50%, rgba(29,78,216,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="revival-grid"
          >
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                <Radio size={12} />
                Weekly Gathering
              </span>
              <h2 style={{ marginBottom: '1.25rem' }}>
                The Fires of<br />
                <span className="gradient-text">Revival Are Burning</span>
              </h2>
              <p style={{ fontSize: '1.0625rem', marginBottom: '2rem', lineHeight: 1.75 }}>
                Join believers from different parts of the world for our weekly online gathering
                every Saturday. We meet virtually across all timezones for powerful times of prayer,
                worship, the Word, and Holy Spirit encounters.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { icon: Calendar, label: 'Weekly Every Saturday' },
                  { icon: Globe2, label: 'Global Online Network' },
                  { icon: Flame, label: 'United in Prayer & Worship' },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.875rem',
                      color: 'var(--text-secondary)', fontSize: '0.9375rem',
                    }}
                  >
                    <div
                      style={{
                        width: 36, height: 36,
                        background: 'rgba(236,72,153,0.1)',
                        border: '1px solid rgba(236,72,153,0.2)',
                        borderRadius: 8,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} color="#db2777" />
                    </div>
                    {label}
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-primary"
              >
                Join This Saturday
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>

            {/* Right: Event cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              {upcomingRevival.map(({ title, date, location, type, status }, i) => (
                <motion.div
                  key={date}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                  whileHover={{
                    background: 'rgba(236,72,153,0.05)',
                    borderColor: 'rgba(236,72,153,0.25)',
                    y: -2,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {type}
                      </span>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          padding: '0.125rem 0.5rem',
                          borderRadius: 999,
                          background: status === 'Join Now' ? 'rgba(5,150,105,0.12)' : 'rgba(217,119,6,0.12)',
                          color: status === 'Join Now' ? '#059669' : '#d97706',
                          fontWeight: 600,
                        }}
                      >
                        {status}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h4>
                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Calendar size={11} />{date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Globe2 size={11} />{location}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={18} color="var(--text-muted)" />
                </motion.div>
              ))}
              <div
                style={{
                  textAlign: 'center', marginTop: '0.5rem',
                  color: 'var(--primary-700)', fontSize: '0.875rem', fontWeight: 600,
                  cursor: 'pointer', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: '0.25rem',
                }}
              >
                Get Meeting Link <ArrowRight size={14} />
              </div>
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .revival-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          }
        `}</style>
      </section>
    </>
  )
}
