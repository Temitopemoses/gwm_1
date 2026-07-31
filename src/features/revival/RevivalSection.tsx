import { motion } from 'framer-motion'
import { Flame, Radio, Calendar, MapPin, ArrowRight, ChevronRight, Globe2 } from 'lucide-react'

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

export default function RevivalSection() {
  return (
    <section id="revival" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 70% 50% at 20% 50%, rgba(236,72,153,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 50% 60% at 85% 50%, rgba(29, 78, 216,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
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
              <Globe2 size={12} />
              Revival Moment Network
            </span>
            <h2 style={{ marginBottom: '1.25rem' }}>
              The Fires of<br />
              <span className="gradient-text">Revival Are Burning</span>
            </h2>
            <p style={{ fontSize: '1.0625rem', marginBottom: '2.5rem', lineHeight: 1.75 }}>
              Join believers from different parts of the world for our weekly online gathering every Saturday. We meet virtually across all timezones for powerful times of prayer, worship, the Word, and Holy Spirit encounters.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {[
                { icon: Calendar, label: 'Weekly Every Saturday' },
                { icon: Globe2, label: 'Global Online Network' },
                { icon: Flame, label: 'United in Prayer & Worship' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.875rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9375rem',
                }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    background: 'rgba(236,72,153,0.1)',
                    border: '1px solid rgba(236,72,153,0.2)',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={16} color="#db2777" />
                  </div>
                  {label}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-primary"
              >
                Join This Saturday
                <ArrowRight size={16} />
              </motion.button>
            </div>
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
                  background: 'rgba(15,23,42,0.02)',
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
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: '#db2777',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}>{type}</span>
                    <span style={{
                      fontSize: '0.7rem',
                      padding: '0.125rem 0.5rem',
                      borderRadius: 999,
                      background: status === 'Join Now' ? 'rgba(5,150,105,0.12)' : 'rgba(217,119,6,0.12)',
                      color: status === 'Join Now' ? '#059669' : '#d97706',
                      fontWeight: 600,
                    }}>{status}</span>
                  </div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h4>
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.8125rem',
                  }}>
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

            <div style={{
              textAlign: 'center',
              marginTop: '0.5rem',
              color: 'var(--primary-700)',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.25rem',
            }}>
              Get Meeting Link <ArrowRight size={14} />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .revival-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
