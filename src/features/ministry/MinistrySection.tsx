import { motion } from 'framer-motion'
import { BookOpen, Zap, HandHeart, Radio, Globe, Users, ArrowRight } from 'lucide-react'

const missionPoints = [
  {
    number: '01',
    color: '#be123c',
    glow: 'rgba(190, 18, 60,0.1)',
    title: 'Pray and Preach Jesus Christ as Lord and Saviour Across the World',
    description:
      'We will continuously devote ourselves to prayer and the ministry of the Word — proclaiming Jesus Christ as the only Lord and Saviour to every nation.',
    scripture: 'Acts 6:4',
  },
  {
    number: '02',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.1)',
    title: 'Pray and Preach for a Fresh Outpouring of the Holy Spirit upon the Church Globally',
    description:
      'We will intercede and proclaim for the Holy Spirit to fall afresh on the Church worldwide — igniting genuine revival and supernatural power.',
    scripture: 'Acts 1:8',
  },
  {
    number: '03',
    color: '#d97706',
    glow: 'rgba(217,119,6,0.1)',
    title: "Pray and Preach for God's Kingdom to Replace the Kingdoms of This World",
    description:
      'We will pray and preach until the kingdoms of this world become the Kingdom of our Lord and of His Christ, and He shall reign forever and ever.',
    scripture: 'Revelation 11:15',
  },
]

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
    color: '#e11d48',
    gradient: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(37,99,235,0.02))',
    border: 'rgba(37,99,235,0.18)',
    tag: 'Training',
    title: 'School of Witnesses',
    description: 'A transformative training program equipping believers with tools, theology, and confidence to witness.',
    cta: 'Enroll Now',
  },
  {
    icon: HandHeart,
    color: '#be123c',
    gradient: 'linear-gradient(135deg, rgba(190, 18, 60,0.08), rgba(190, 18, 60,0.02))',
    border: 'rgba(190, 18, 60,0.18)',
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
    <section id="ministry" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          right: '-100px',
          top: '20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          {/* <span className="badge">Our Mission</span> */}
          <h2>
            <strong>OUR MISSION</strong>
          </h2>
          <p
            style={{
              maxWidth: '48rem',
              marginTop: '1.25rem',
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
            }}
          >
            To achieve the above God-given vision, we will do the following:
          </p>
        </motion.div>

        {/* Mission Points — three pillars */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '1.5rem',
          }}
        >
          {missionPoints.map(({ number, color, glow, title, description, scripture }, index) => (
            <motion.div
              key={number}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.96))',
                border: `1px solid ${color}22`,
                borderTop: `3px solid ${color}`,
                boxShadow: `0 20px 50px -20px ${color}22`,
                borderRadius: 'var(--radius-3xl)',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: 'absolute',
                  right: '-20px',
                  bottom: '-20px',
                  width: '140px',
                  height: '140px',
                  background: glow,
                  borderRadius: '50%',
                  filter: 'blur(28px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Large number watermark */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1.5rem',
                  fontSize: '3rem',
                  fontWeight: 900,
                  color,
                  opacity: 0.07,
                  fontFamily: 'monospace',
                  lineHeight: 1,
                  pointerEvents: 'none',
                }}
              >
                {index + 1}
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Number badge */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: '50%',
                    background: `${color}18`,
                    border: `1px solid ${color}30`,
                    color,
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {index + 1}
                </div>

                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    lineHeight: 1.45,
                    marginBottom: '0.85rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    margin: '0 0 1.5rem',
                    lineHeight: 1.8,
                    fontSize: '0.93rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {description}
                </p>

                {/* Scripture pill */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.35rem 0.85rem',
                    background: `${color}10`,
                    border: `1px solid ${color}25`,
                    borderRadius: '999px',
                    color,
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                  }}
                >
                  📖 {scripture}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
