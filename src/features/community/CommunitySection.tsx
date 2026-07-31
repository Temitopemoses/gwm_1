import { motion } from 'framer-motion'
import { Users, MapPin, MessageCircle, ArrowRight, Globe2 } from 'lucide-react'

const testimonials = [
  {
    name: 'Chukwuemeka Obi',
    location: 'Lagos, Nigeria',
    text: 'Being part of this community changed everything. I went from a passive believer to an active witness.',
  },
  {
    name: 'Miriam Adeyinka',
    location: 'Abuja, Nigeria',
    text: 'The community witness team helped me reach my neighborhood. Over 20 families heard the Gospel last month.',
  },
  {
    name: 'Daniel Mensah',
    location: 'Accra, Ghana',
    text: 'GWM connected me with believers across Africa. The fellowship is real, the mission is urgent.',
  },
]

const regions = [
  { flag: '🇳🇬', country: 'Nigeria', cities: 'Lagos · Abuja · Port Harcourt' },
  { flag: '🇬🇭', country: 'Ghana', cities: 'Accra · Kumasi' },
  { flag: '🇰🇪', country: 'Kenya', cities: 'Nairobi · Mombasa' },
  { flag: '🇿🇦', country: 'South Africa', cities: 'Johannesburg · Cape Town' },
  { flag: '🇬🇧', country: 'United Kingdom', cities: 'London · Birmingham' },
  { flag: '🇺🇸', country: 'United States', cities: 'New York · Houston' },
]

export default function CommunitySection() {
  return (
    <section id="community" className="section" style={{
      background: 'var(--bg-secondary)',
      position: 'relative',
    }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: '10%',
        width: 500,
        height: 500,
        background: 'radial-gradient(ellipse, rgba(29, 78, 216,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge">
            <Globe2 size={12} />
            Community Witness
          </span>
          <h2>
            You're Not<br />
            <span className="gradient-text">Alone in This</span>
          </h2>
          <p>
            A growing family of witnesses — believers from all walks of life, united by one Gospel and one mission. We go together.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '5rem',
        }}>
          {testimonials.map(({ name, location, text }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card"
              style={{ padding: '2rem' }}
            >
              <MessageCircle size={20} color="var(--primary-700)" style={{ marginBottom: '1rem' }} />
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                "{text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, var(--primary-700), var(--primary-500))`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: 'white',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(29, 78, 216,0.25)',
                }}>
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{name}</div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.8125rem',
                  }}>
                    <MapPin size={10} />
                    {location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-3xl)',
            padding: '3rem',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Active in <span className="gradient-text">6+ Nations</span></h3>
            <p style={{ fontSize: '0.9375rem' }}>Our community spans continents. Find a chapter near you.</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}>
            {regions.map(({ flag, country, cities }) => (
              <div
                key={country}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.875rem',
                  padding: '1rem',
                  background: 'rgba(15,23,42,0.02)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(29, 78, 216,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(29, 78, 216,0.2)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(15,23,42,0.02)'
                  e.currentTarget.style.borderColor = 'var(--border-subtle)'
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{flag}</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{country}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{cities}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary"
            >
              <Users size={16} />
              Join Our Community
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
