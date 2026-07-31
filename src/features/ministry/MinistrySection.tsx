import { motion } from 'framer-motion'
import { BookOpen, Users, Zap, HandHeart, Radio, Globe, ArrowRight } from 'lucide-react'

const expressions = [
  {
    icon: Zap,
    color: '#d97706',
    gradient: 'linear-gradient(135deg, rgba(217,119,6,0.08), rgba(217,119,6,0.02))',
    border: 'rgba(217,119,6,0.18)',
    tag: 'Evangelism',
    title: 'Community Witness',
    description: 'Street evangelism, campus outreach, and community missions that bring the Gospel to everyday spaces.',
    cta: 'Join a Team',
  },
  {
    icon: Radio,
    color: '#db2777',
    gradient: 'linear-gradient(135deg, rgba(219,39,119,0.08), rgba(219,39,119,0.02))',
    border: 'rgba(219,39,119,0.18)',
    tag: 'Revival',
    title: 'Revival Moment Network',
    description: 'A network of revival gatherings, prayer movements, and spiritual awakening events across the nation.',
    cta: 'Register Now',
  },
  {
    icon: BookOpen,
    color: '#2563eb',
    gradient: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(37,99,235,0.02))',
    border: 'rgba(37,99,235,0.18)',
    tag: 'Training',
    title: 'School of Witnesses',
    description: 'A transformative training program equipping believers with tools, theology, and confidence to witness.',
    cta: 'Enroll Now',
  },
  {
    icon: HandHeart,
    color: '#1d4ed8',
    gradient: 'linear-gradient(135deg, rgba(29, 78, 216,0.08), rgba(29, 78, 216,0.02))',
    border: 'rgba(29, 78, 216,0.18)',
    tag: 'Outreach',
    title: 'Apply for Tracts',
    description: 'Request printed gospel tracts, evangelism handbooks, and outreach materials for your community.',
    cta: 'Apply Today',
  },
  {
    icon: Users,
    color: '#059669',
    gradient: 'linear-gradient(135deg, rgba(5,150,105,0.08), rgba(5,150,105,0.02))',
    border: 'rgba(5,150,105,0.18)',
    tag: 'Discipleship',
    title: 'Prayer & Intercession',
    description: 'Unceasing prayer is the engine of revival. Join our prayer network and become an intercessor.',
    cta: 'Request Prayer',
  },
  {
    icon: Globe,
    color: '#ea580c',
    gradient: 'linear-gradient(135deg, rgba(234,88,12,0.08), rgba(234,88,12,0.02))',
    border: 'rgba(234,88,12,0.18)',
    tag: 'Missions',
    title: 'Global Missions',
    description: 'Short-term and long-term mission trips to unreached peoples and underserved communities worldwide.',
    cta: 'Get Involved',
  },
]

const missionPoints = [
  {
    title: 'Witness with Holy Spirit power',
    description: 'We shall witness for Jesus Christ through the power of the Holy Spirit globally.',
    accent: 'Spirit-led witness to the ends of the earth.',
  },
  {
    title: 'Teach every heart to know God',
    description: 'We shall teach all men to know God and witness for Jesus Christ globally.',
    accent: 'Teaching that turns believers into witnesses.',
  },
  {
    title: 'Awaken believers to their assignment',
    description: 'We shall awaken believers to their ultimate assignment of witness for Jesus Christ globally.',
    accent: 'From dormant faith to active kingdom purpose.',
  },
  {
    title: 'Influence every sphere of society',
    description: 'We shall influence all systems and structures of the world for God, individually and corporately as God gives us influence globally.',
    accent: 'Every system, every structure, every sphere.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function MinistrySection() {
  return (
    <section id="ministry" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge">Our Mission</span>
          <h2>
            <strong>OUR MISSION</strong>
          </h2>
          <p style={{ maxWidth: '45rem', marginTop: '1.25rem', fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            We are moving with Kingdom momentum — bearing witness through Spirit-led power, training every heart, awakening believers, and influencing the world with God’s authority.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            marginTop: '2rem',
          }}
        >
          {missionPoints.map(({ title, description, accent }, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.96))',
                border: '1px solid rgba(29, 78, 216,0.14)',
                boxShadow: '0 20px 50px -30px rgba(29, 78, 216,0.25)',
                borderRadius: 'var(--radius-3xl)',
                padding: '1.75rem',
                minHeight: '220px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                right: '-24px',
                top: '-12px',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'rgba(29, 78, 216,0.08)',
                filter: 'blur(18px)',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(29, 78, 216,0.18), rgba(29, 78, 216,0.05))',
                  color: 'var(--primary-700)',
                  fontWeight: 700,
                  marginBottom: '1rem',
                }}>
                  {index + 1}
                </div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.85rem', color: 'var(--text-primary)' }}>{title}</h3>
                <p style={{ margin: '0 0 1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>{description}</p>
                <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-700)' }}>{accent}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem',
          }}
        >
          {expressions.map(({ icon: Icon, color, gradient, border, tag, title, description, cta }) => (
            <motion.div
              key={title}
              variants={item}
              style={{
                background: gradient,
                border: `1px solid ${border}`,
                borderRadius: 'var(--radius-3xl)',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              {/* Icon */}
              <div style={{
                width: 48,
                height: 48,
                background: `${color}18`,
                border: `1px solid ${color}30`,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
                <Icon size={22} color={color} />
              </div>

              {/* Tag */}
              <span style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                fontWeight: 600,
                color,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.5rem',
              }}>
                {tag}
              </span>

              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>{title}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{description}</p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                color,
                fontWeight: 600,
                fontSize: '0.875rem',
              }}>
                {cta}
                <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
