import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, ArrowRight, ChevronRight } from 'lucide-react'

const events = [
  {
    date: { month: 'AUG', day: '15' },
    title: 'Open Heavens Lagos 2026',
    description: 'Three nights of worship, prayer, and apostolic preaching that will shake the nation.',
    location: 'National Stadium, Lagos',
    time: '5:00 PM WAT',
    type: 'Revival Conference',
    featured: true,
  },
  {
    date: { month: 'AUG', day: '24' },
    title: 'Campus Outreach Sunday',
    description: 'A day of evangelism on the campuses of Lagos. All believers are invited to participate.',
    location: 'UNILAG & LASU Campuses',
    time: '10:00 AM WAT',
    type: 'Outreach',
    featured: false,
  },
  {
    date: { month: 'SEP', day: '05' },
    title: 'Nations Prayer Summit',
    description: 'Intercessors from across the continent gather to pray for continental revival.',
    location: 'Abuja ICC',
    time: '9:00 AM WAT',
    type: 'Prayer Summit',
    featured: false,
  },
  {
    date: { month: 'SEP', day: '20' },
    title: 'School of Witnesses — New Cohort',
    description: 'A new cohort of the School of Witnesses begins. Foundations track open for registration.',
    location: 'Online & Lagos Hub',
    time: 'Self-paced',
    type: 'Training',
    featured: false,
  },
  {
    date: { month: 'OCT', day: '10' },
    title: 'Fire on the Campus',
    description: 'The Holy Spirit comes to the campus. A night of testimonies, prayer, and salvation.',
    location: 'University of Lagos Auditorium',
    time: '6:00 PM WAT',
    type: 'Campus Revival',
    featured: false,
  },
  {
    date: { month: 'OCT', day: '28' },
    title: 'Annual Thanksgiving Crusade',
    description: 'An open-air crusade bringing the community together in praise, testimonies, and the Gospel.',
    location: 'Ojota Grounds, Lagos',
    time: '4:00 PM WAT',
    type: 'Crusade',
    featured: false,
  },
]

const typeColors: Record<string, string> = {
  'Revival Conference': '#a855f7',
  'Outreach': '#10b981',
  'Prayer Summit': '#f43f5e',
  'Training': '#f59e0b',
  'Campus Revival': '#ec4899',
  'Crusade': '#f97316',
}

export default function EventsSection() {
  return (
    <section id="events" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge">
            <Calendar size={12} />
            Upcoming Events
          </span>
          <h2>
            Don't Miss<br />
            <span className="gradient-text">What God is Doing</span>
          </h2>
          <p>
            Revivals, prayer summits, outreaches, and training programs. There's always something happening in the Kingdom.
          </p>
        </motion.div>

        {/* Featured event */}
        {events.filter(e => e.featured).map(event => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, rgba(190, 18, 60,0.06), rgba(99,102,241,0.03))',
              border: '1px solid rgba(190, 18, 60,0.2)',
              borderRadius: 'var(--radius-3xl)',
              padding: '2.5rem',
              marginBottom: '2rem',
              display: 'flex',
              gap: '2.5rem',
              alignItems: 'center',
              flexWrap: 'wrap',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: 'var(--shadow-card)',
            }}
            whileHover={{ y: -4, boxShadow: 'var(--shadow-card-hover)' }}
          >
            <div style={{
              textAlign: 'center',
              flexShrink: 0,
              background: 'rgba(190, 18, 60,0.1)',
              border: '1px solid rgba(190, 18, 60,0.2)',
              borderRadius: 'var(--radius-xl)',
              padding: '1.25rem 1.75rem',
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-700)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {event.date.month}
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>
                {event.date.day}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.625rem', flexWrap: 'wrap' }}>
                <span style={{
                  padding: '0.2rem 0.75rem',
                  background: `${typeColors[event.type]}18`,
                  color: typeColors[event.type],
                  borderRadius: 999,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}>{event.type}</span>
                <span style={{
                  padding: '0.2rem 0.75rem',
                  background: 'rgba(217,119,6,0.1)',
                  color: '#d97706',
                  borderRadius: 999,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}>⭐ Featured</span>
              </div>
              <h3 style={{ fontSize: '1.375rem', marginBottom: '0.625rem' }}>{event.title}</h3>
              <p style={{ fontSize: '0.9375rem', marginBottom: '1rem' }}>{event.description}</p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <MapPin size={13} />{event.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <Clock size={13} />{event.time}
                </span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary"
              style={{ flexShrink: 0 }}
            >
              Register
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        ))}

        {/* Other events */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1rem',
        }}>
          {events.filter(e => !e.featured).map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                display: 'flex',
                gap: '1.25rem',
                padding: '1.5rem',
                background: 'rgba(15,23,42,0.02)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-xl)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                alignItems: 'flex-start',
              }}
              whileHover={{
                background: 'rgba(15,23,42,0.04)',
                borderColor: `${typeColors[event.type]}30`,
                y: -2,
              }}
            >
              <div style={{
                textAlign: 'center',
                flexShrink: 0,
                background: `${typeColors[event.type]}12`,
                border: `1px solid ${typeColors[event.type]}25`,
                borderRadius: 'var(--radius-lg)',
                padding: '0.625rem 1rem',
                minWidth: 56,
              }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 700, color: typeColors[event.type], letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {event.date.month}
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.1 }}>
                  {event.date.day}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: typeColors[event.type],
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}>
                  {event.type}
                </span>
                <h4 style={{ fontSize: '0.9875rem', margin: '0.25rem 0 0.5rem', color: 'var(--text-primary)' }}>{event.title}</h4>
                <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                    <MapPin size={11} />{event.location.split(',')[0]}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                    <Clock size={11} />{event.time}
                  </span>
                </div>
              </div>
              <ChevronRight size={16} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <button className="btn btn-secondary">
            View Full Calendar
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
