import { motion } from 'framer-motion'
import { Users, Flame, Crown } from 'lucide-react'

const visions = [
  {
    icon: Users,
    number: '01',
    color: '#1d4ed8',
    gradientBg: 'linear-gradient(135deg, rgba(29,78,216,0.09), rgba(29,78,216,0.02))',
    border: 'rgba(29,78,216,0.2)',
    glow: 'rgba(29,78,216,0.12)',
    title: 'Salvation of Everyone in the World',
    description:
      'To see the salvation of every soul across all the earth — that God who desires all men to be saved would see His heart fulfilled in this generation.',
    scripture: '1 Timothy 2:4',
  },
  {
    icon: Flame,
    number: '02',
    color: '#7c3aed',
    gradientBg: 'linear-gradient(135deg, rgba(124,58,237,0.09), rgba(124,58,237,0.02))',
    border: 'rgba(124,58,237,0.2)',
    glow: 'rgba(124,58,237,0.12)',
    title: 'Revival of Everyone in the Church',
    description:
      'To see the Church awakened, Spirit-filled, and ablaze with power — as it was in the beginning when the Holy Spirit fell on all who believed.',
    scripture: 'Acts 2:4',
  },
  {
    icon: Crown,
    number: '03',
    color: '#d97706',
    gradientBg: 'linear-gradient(135deg, rgba(217,119,6,0.09), rgba(217,119,6,0.02))',
    border: 'rgba(217,119,6,0.2)',
    glow: 'rgba(217,119,6,0.12)',
    title: "God's Kingdom Come",
    description:
      'To see the Kingdom of God advance over every earthly kingdom — that His will is done on earth exactly as it is done in heaven.',
    scripture: 'Matthew 6:10',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
}
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function VisionSection() {
  return (
    <section id="vision" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          width: 700,
          height: 500,
          background:
            'radial-gradient(ellipse, rgba(29,78,216,0.07) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
        }}
      />

      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="badge">Our Vision</span>
          <h2>
            <strong>OUR VISION</strong>
          </h2>
          <p
            style={{
              maxWidth: '44rem',
              marginTop: '1.25rem',
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
            }}
          >
            To see the fulfilment of God's three-fold heart for humanity — salvation for the world,
            revival in the Church, and His Kingdom reigning over all.
          </p>

          {/* Vision image banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              marginTop: '2rem',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 20px 50px -12px rgba(29,78,216,0.2)',
              maxHeight: '300px',
            }}
          >
            <img
              src="/global_vision.jpg"
              alt="Global Gospel reach"
              style={{ width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(14,30,80,0.6) 0%, rgba(124,58,237,0.3) 100%)',
            }} />
            <div style={{
              position: 'absolute', bottom: '1.5rem', left: '2rem',
            }}>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)', fontSize: '1rem', fontWeight: 600 }}>
                From every nation, tribe, and tongue
              </p>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>
                Revelation 7:9 · Acts 1:8
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Vision Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.75rem',
            marginTop: '1.5rem',
          }}
        >
          {visions.map(({ icon: Icon, number, color, gradientBg, border, glow, title, description, scripture }) => (
            <motion.div
              key={number}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: gradientBg,
                border: `1px solid ${border}`,
                borderRadius: 'var(--radius-3xl)',
                padding: '2.25rem 2rem',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Glow blob */}
              <div
                style={{
                  position: 'absolute',
                  right: '-30px',
                  bottom: '-30px',
                  width: '160px',
                  height: '160px',
                  background: glow,
                  borderRadius: '50%',
                  filter: 'blur(35px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Number watermark */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.5rem',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color,
                  opacity: 0.08,
                  fontFamily: 'monospace',
                  lineHeight: 1,
                  pointerEvents: 'none',
                }}
              >
                {number}
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Icon */}
                <div
                  style={{
                    width: 54,
                    height: 54,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `${color}1a`,
                    border: `1px solid ${color}30`,
                    borderRadius: 16,
                    marginBottom: '1.5rem',
                  }}
                >
                  <Icon size={26} color={color} />
                </div>

                {/* Number label */}
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: '0.5rem',
                  }}
                >
                  Vision {number}
                </span>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    lineHeight: 1.35,
                    marginBottom: '0.9rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    color: 'var(--text-secondary)',
                    margin: '0 0 1.5rem',
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
                    background: `${color}12`,
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
