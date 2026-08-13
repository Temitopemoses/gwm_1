import { motion } from 'framer-motion'
import { BookOpen, CheckCircle2, ArrowRight, Clock, Users, Star } from 'lucide-react'

const modules = [
  'Biblical Foundations of Evangelism',
  'The Power of the Holy Spirit',
  'Practical Witnessing Techniques',
  'Apologetics & Common Objections',
  'Urban & Campus Missions',
  'Discipleship & Follow-Up',
  'Prayer as a Weapon',
  'Launching Your Own Outreach',
]

const tracks = [
  {
    name: 'Foundations',
    weeks: '4 Weeks',
    level: 'Beginner',
    color: '#10b981',
    description: 'A foundational course for new believers ready to share their faith confidently.',
  },
  {
    name: 'Advanced Witness',
    weeks: '8 Weeks',
    level: 'Intermediate',
    color: '#a855f7',
    description: 'Deep-dive training in apologetics, urban missions, and personal evangelism.',
  },
  {
    name: 'Ministry Leadership',
    weeks: '12 Weeks',
    level: 'Advanced',
    color: '#f59e0b',
    description: 'Train to lead evangelism teams, plan outreaches, and multiply your impact.',
  },
]

export default function SchoolSection() {
  return (
    <section id="school" className="section" style={{
      background: 'var(--bg-secondary)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        left: '50%',
        top: 0,
        transform: 'translateX(-50%)',
        width: 800,
        height: 400,
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge">
            <BookOpen size={12} />
            School of Witnesses
          </span>
          <h2>
            Get Equipped.<br />
            <span className="gradient-text">Go with Power.</span>
          </h2>
          <p>
            A structured, transformative program designed to turn hesitant believers into confident, Spirit-led witnesses. Theory, practice, and community — all in one.
          </p>
        </motion.div>




        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '4rem',
          alignItems: 'start',
        }}
          className="school-grid"
        >
          {/* Curriculum */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>What You'll Learn</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {modules.map((mod, i) => (
                <motion.div
                  key={mod}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    padding: '0.875rem 1rem',
                    background: 'rgba(15,23,42,0.02)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    transition: 'all 0.2s',
                  }}
                  whileHover={{ background: 'rgba(190, 18, 60,0.06)', borderColor: 'rgba(190, 18, 60,0.2)' }}
                >
                  <CheckCircle2 size={16} color="var(--primary-700)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>{mod}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tracks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Choose Your Track</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {tracks.map(({ name, weeks, level, color, description }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  style={{
                    background: `linear-gradient(135deg, ${color}10, ${color}03)`,
                    border: `1px solid ${color}25`,
                    borderRadius: 'var(--radius-xl)',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  whileHover={{ y: -4, boxShadow: `0 8px 30px ${color}18` }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-primary)' }}>{name}</span>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <span style={{
                        padding: '0.2rem 0.6rem',
                        background: `${color}18`,
                        borderRadius: 999,
                        fontSize: '0.75rem',
                        color,
                        fontWeight: 600,
                      }}>{level}</span>
                      <span style={{
                        padding: '0.2rem 0.6rem',
                        background: 'rgba(15,23,42,0.05)',
                        borderRadius: 999,
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                      }}>{weeks}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem', color: 'var(--text-secondary)' }}>{description}</p>
                  <span style={{
                    color,
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}>
                    Enroll Now <ArrowRight size={14} />
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}
            >
              <BookOpen size={16} />
              Enroll in School of Witnesses
            </motion.button>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .school-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}
