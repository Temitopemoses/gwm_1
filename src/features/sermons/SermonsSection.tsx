import { motion } from 'framer-motion'
import { Play, Clock, Eye, ArrowRight, Headphones } from 'lucide-react'

const sermons = [
  {
    title: 'The Anatomy of Revival',
    speaker: 'Pastor Daniel Ade',
    duration: '52 min',
    views: '14.2K',
    series: 'Revival Series',
    color: '#a855f7',
    date: 'Jul 20, 2026',
  },
  {
    title: 'Your Assignment in This Hour',
    speaker: 'Evang. Grace Okonkwo',
    duration: '38 min',
    views: '9.7K',
    series: 'Call to Witness',
    color: '#ec4899',
    date: 'Jul 13, 2026',
  },
  {
    title: 'When the Spirit Moves',
    speaker: 'Pastor Daniel Ade',
    duration: '61 min',
    views: '21.5K',
    series: 'Holy Spirit Series',
    color: '#f43f5e',
    date: 'Jul 6, 2026',
  },
  {
    title: 'The Power of a Praying Community',
    speaker: 'Min. Ruth Adeleke',
    duration: '44 min',
    views: '7.3K',
    series: 'Prayer & Intercession',
    color: '#10b981',
    date: 'Jun 29, 2026',
  },
  {
    title: 'Arise and Shine',
    speaker: 'Pastor Daniel Ade',
    duration: '49 min',
    views: '18.1K',
    series: 'Revival Series',
    color: '#f59e0b',
    date: 'Jun 22, 2026',
  },
  {
    title: 'Go Into All The World',
    speaker: 'Evang. Grace Okonkwo',
    duration: '35 min',
    views: '11.4K',
    series: 'Great Commission',
    color: '#f97316',
    date: 'Jun 15, 2026',
  },
]

export default function SermonsSection() {
  return (
    <section id="sermons" className="section" style={{
      background: 'var(--bg-secondary)',
      position: 'relative',
    }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge">
            <Headphones size={12} />
            Sermons
          </span>
          <h2>
            Feed Your Spirit.<br />
            <span className="gradient-text">Grow in the Word.</span>
          </h2>
          <p>
            Anointed messages on revival, evangelism, prayer, and kingdom purpose — available wherever you are.
          </p>
        </motion.div>

        {/* Featured sermon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(99,102,241,0.03))',
            border: '1px solid rgba(168,85,247,0.2)',
            borderRadius: 'var(--radius-3xl)',
            padding: '2.5rem',
            marginBottom: '2rem',
            display: 'flex',
            gap: '2.5rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div style={{
            width: 80,
            height: 80,
            background: 'linear-gradient(135deg, var(--primary-700), var(--primary-500))',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 8px 24px rgba(190, 18, 60,0.3)',
            cursor: 'pointer',
          }}>
            <Play size={30} color="white" fill="white" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.625rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary-700)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                🔥 Most Watched This Month
              </span>
            </div>
            <h3 style={{ fontSize: '1.375rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{sermons[0].title}</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>
              {sermons[0].speaker} · {sermons[0].series}
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <Clock size={13} />{sermons[0].duration}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <Eye size={13} />{sermons[0].views} views
              </span>
            </div>
          </div>
        </motion.div>

        {/* Sermon grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}>
          {sermons.slice(1).map(({ title, speaker, duration, views, series, color, date }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                display: 'flex',
                gap: '1rem',
                padding: '1.25rem',
                background: 'rgba(15,23,42,0.02)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-xl)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                alignItems: 'flex-start',
              }}
              whileHover={{
                background: `${color}08`,
                borderColor: `${color}25`,
                y: -2,
              }}
            >
              <div style={{
                width: 44,
                height: 44,
                background: `${color}18`,
                border: `1px solid ${color}30`,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Play size={16} color={color} fill={color} />
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {series}
                </span>
                <h4 style={{ fontSize: '0.9375rem', margin: '0.25rem 0 0.375rem', lineHeight: 1.35, color: 'var(--text-primary)' }}>{title}</h4>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{speaker}</div>
                <div style={{ display: 'flex', gap: '0.875rem', marginTop: '0.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                    <Clock size={10} />{duration}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                    <Eye size={10} />{views}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-primary"
          >
            Watch All Sermons
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
