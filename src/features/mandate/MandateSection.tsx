import { motion } from 'framer-motion'
import { BookOpen, Flame, Sparkles, Heart, ChevronRight } from 'lucide-react'

const pillars = [
  {
    icon: Heart,
    color: '#7c3aed',
    gradientBg: 'linear-gradient(135deg, rgba(124,58,237,0.09), rgba(124,58,237,0.02))',
    border: 'rgba(124,58,237,0.2)',
    glowColor: 'rgba(124,58,237,0.15)',
    number: '01',
    tag: 'Foundation',
    title: 'Prayer Prepares the Ground',
    description:
      'True witnessing begins on our knees. It invites the Kingdom of God to break into human hearts.',
    scripture: 'Matt 6:9-10 · Col 4:3',
  },
  {
    icon: BookOpen,
    color: '#be123c',
    gradientBg: 'linear-gradient(135deg, rgba(190, 18, 60,0.09), rgba(190, 18, 60,0.02))',
    border: 'rgba(190, 18, 60,0.2)',
    glowColor: 'rgba(190, 18, 60,0.15)',
    number: '02',
    tag: 'Proclamation',
    title: 'Preaching Provides the Truth',
    description:
      'People cannot believe unless they hear the truth of the Gospel clearly spoken.',
    scripture: 'Romans 10:14',
  },
  {
    icon: Sparkles,
    color: '#d97706',
    gradientBg: 'linear-gradient(135deg, rgba(217,119,6,0.09), rgba(217,119,6,0.02))',
    border: 'rgba(217,119,6,0.2)',
    glowColor: 'rgba(217,119,6,0.15)',
    number: '03',
    tag: 'Confirmation',
    title: 'The Holy Spirit Provides the Proof',
    description:
      'Preaching alone can be just words, but the Holy Spirit provides "signs and wonders" to prove that the message is alive and true.',
    scripture: 'Mark 16:20',
  },
  {
    icon: Flame,
    color: '#dc2626',
    gradientBg: 'linear-gradient(135deg, rgba(220,38,38,0.09), rgba(220,38,38,0.02))',
    border: 'rgba(220,38,38,0.2)',
    glowColor: 'rgba(220,38,38,0.15)',
    number: '04',
    tag: 'Ultimate Goal',
    title: 'Salvation is the Ultimate Goal',
    description:
      'The signs and power are never just for entertainment; their sole purpose is to draw people to repentance so they can be saved.',
    scripture: 'John 3:16-17',
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

export default function MandateSection() {
  return (
    <section id="mandate" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '40%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 600,
          background:
            'radial-gradient(ellipse, rgba(190, 18, 60,0.06) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <span className="badge">Acts 1:8</span>
          <h2>
            <strong>THE MANDATE</strong>
          </h2>
          <p
            style={{
              maxWidth: '52rem',
              marginTop: '1.25rem',
              fontSize: '1.1rem',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
            }}
          >
            Is to witness unto Jesus Christ globally, with the power of the Holy Spirit.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ marginTop: '2.5rem', marginBottom: '1rem' }}
          >
            <img 
              src="/cross-map.jpeg" 
              alt="Global Mission" 
              style={{ 
                width: '100%', 
                maxWidth: '760px', 
                height: 'auto',
                borderRadius: '1.5rem', 
                boxShadow: '0 24px 50px rgba(190, 18, 60,0.12)', 
                display: 'block', 
                margin: '0 auto' 
              }} 
            />
          </motion.div>

          {/* Core definition card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            style={{
              marginTop: '2rem',
              padding: '2rem 2.5rem',
              background:
                'linear-gradient(135deg, rgba(190, 18, 60,0.07), rgba(124,58,237,0.05))',
              border: '1px solid rgba(190, 18, 60,0.2)',
              borderRadius: 'var(--radius-3xl)',
              borderLeft: '4px solid var(--primary-600)',
              boxShadow: '0 16px 40px -20px rgba(190, 18, 60,0.15)',
              textAlign: 'left',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '180px',
                height: '180px',
                background:
                  'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: '1.05rem',
                lineHeight: 1.9,
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
              }}
            >
              <span
                style={{
                  fontSize: '1.5rem',
                  color: 'var(--primary-600)',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  marginRight: '0.25rem',
                }}
              >
                "
              </span>
              To witness is to pray and preach for the Kingdom of God to come in the power of the
              Holy Spirit, confirming the Word so that many will believe and be saved.
              <span
                style={{
                  fontSize: '1.5rem',
                  color: 'var(--primary-600)',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  marginLeft: '0.25rem',
                }}
              >
                "
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* Four Pillars */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
          {pillars.map(({ icon: Icon, color, gradientBg, border, glowColor, number, tag, title, description, scripture }) => (
            <motion.div
              key={number}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: gradientBg,
                border: `1px solid ${border}`,
                borderRadius: 'var(--radius-3xl)',
                padding: '2rem',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              {/* Glow blob */}
              <div
                style={{
                  position: 'absolute',
                  right: '-30px',
                  bottom: '-20px',
                  width: '140px',
                  height: '140px',
                  background: glowColor,
                  borderRadius: '50%',
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Number badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  color,
                  opacity: 0.45,
                  fontFamily: 'monospace',
                }}
              >
                {number}
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `${color}18`,
                    border: `1px solid ${color}30`,
                    borderRadius: 14,
                    marginBottom: '1.25rem',
                  }}
                >
                  <Icon size={24} color={color} />
                </div>

                {/* Tag */}
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem',
                  }}
                >
                  {tag}
                </span>

                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    color: 'var(--text-secondary)',
                    margin: '0 0 1.25rem',
                  }}
                >
                  {description}
                </p>

                {/* Scripture reference */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color,
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  <ChevronRight size={13} />
                  {scripture}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            marginTop: '2.5rem',
            padding: '2.5rem 3rem',
            background:
              'linear-gradient(135deg, rgba(190, 18, 60,0.92), rgba(124,58,237,0.85))',
            borderRadius: 'var(--radius-3xl)',
            boxShadow: '0 24px 60px -16px rgba(190, 18, 60,0.35)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          {/* Decorative circles */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              left: '-60px',
              width: '220px',
              height: '220px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-80px',
              right: '-40px',
              width: '280px',
              height: '280px',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
            <Flame
              size={32}
              color="rgba(255,255,255,0.8)"
              style={{ marginBottom: '1.25rem' }}
            />
            <p
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                lineHeight: 1.85,
                color: 'rgba(255,255,255,0.92)',
                fontStyle: 'italic',
                fontWeight: 500,
                margin: 0,
              }}
            >
              As John was sent to witness to His first coming, even so{' '}
              <strong style={{ color: '#ffffff', fontWeight: 800 }}>
                we are sent to witness to the second coming
              </strong>{' '}
              of our Lord and Saviour Jesus Christ!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
