import { motion } from 'framer-motion'
import { Images, ArrowRight } from 'lucide-react'

const galleryItems = [
  { label: 'Open Heavens 2025', desc: 'Lagos · 10,000 attendees', span: 'large', bg: 'linear-gradient(135deg, rgba(29, 78, 216,0.3), rgba(99,102,241,0.2))' },
  { label: 'Street Evangelism', desc: 'Surulere, Lagos', span: 'small', bg: 'linear-gradient(135deg, rgba(236,72,153,0.3), rgba(168,85,247,0.2))' },
  { label: 'School of Witnesses', desc: 'Cohort 3 Graduation', span: 'small', bg: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(99,102,241,0.2))' },
  { label: 'Nations Prayer Summit', desc: 'Abuja · Sept 2025', span: 'medium', bg: 'linear-gradient(135deg, rgba(245,158,11,0.3), rgba(236,72,153,0.2))' },
  { label: 'Campus Outreach', desc: 'UNILAG · 500 reached', span: 'medium', bg: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(59,130,246,0.2))' },
  { label: 'Tract Distribution', desc: 'Market outreach · Balogun', span: 'small', bg: 'linear-gradient(135deg, rgba(249,115,22,0.3), rgba(245,158,11,0.2))' },
  { label: 'Fire on the Campus', desc: 'LASU · Night of Revival', span: 'small', bg: 'linear-gradient(135deg, rgba(168,85,247,0.3), rgba(59,130,246,0.2))' },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge">
            <Images size={12} />
            Gallery
          </span>
          <h2>
            Moments of<br />
            <span className="gradient-text">Kingdom Impact</span>
          </h2>
          <p>Glimpses of what God is doing through our community — from revival nights to street evangelism.</p>
        </motion.div>

        {/* Masonry-style grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'auto',
          gap: '1rem',
        }}
          className="gallery-grid"
        >
          {galleryItems.map(({ label, desc, span, bg }, i) => {
            const colSpan = span === 'large' ? 2 : span === 'medium' ? 2 : 1
            const rowSpan = span === 'large' ? 2 : 1
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                style={{
                  gridColumn: `span ${colSpan}`,
                  gridRow: `span ${rowSpan}`,
                  background: bg,
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-xl)',
                  minHeight: span === 'large' ? 320 : 160,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-card)',
                }}
                whileHover={{ scale: 1.02, boxShadow: 'var(--shadow-card-hover)' }}
              >
                {/* Overlay label */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.25rem',
                }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'white' }}>{label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>{desc}</div>
                </div>

                {/* Decorative pattern */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }} />
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <button className="btn btn-secondary">
            View Full Gallery
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .gallery-grid > div { grid-column: span 1 !important; grid-row: span 1 !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
