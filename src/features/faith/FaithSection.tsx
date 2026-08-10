import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

const beliefs = [
  {
    number: '01',
    title: 'God',
    body: 'We believe in one God — Father, Son, and Holy Spirit; Creator of all and sovereign over all.',
    accent: '#1d4ed8',
  },
  {
    number: '02',
    title: 'Jesus Christ',
    body: 'We believe Jesus Christ is Lord and Saviour, fully God and fully man, who died for our sins, rose again, and offers salvation to all who believe.',
    accent: '#7c3aed',
  },
  {
    number: '03',
    title: 'The Holy Spirit',
    body: 'We believe in the power and presence of the Holy Spirit, who regenerates, empowers, and guides believers and strengthens the Church.',
    accent: '#d97706',
  },
  {
    number: '04',
    title: 'The Bible',
    body: 'We believe the Scriptures are the inspired and authoritative Word of God, our guide for faith and life.',
    accent: '#059669',
  },
  {
    number: '05',
    title: 'Salvation',
    body: 'We believe salvation is by grace through faith in Jesus Christ, leading to new birth and transformed living.',
    accent: '#dc2626',
  },
  {
    number: '06',
    title: 'The Church',
    body: 'We believe the Church is the body of Christ, called to worship, disciple, serve, and witness Christ to all nations.',
    accent: '#db2777',
  },
  {
    number: '07',
    title: 'The Kingdom of God',
    body: "We believe God's Kingdom is advancing through the Gospel and will be fully revealed when Christ returns.",
    accent: '#0891b2',
  },
  {
    number: '08',
    title: "Christ's Return",
    body: 'We believe Jesus Christ will return bodily and in glory to judge the world and establish His eternal reign.',
    accent: '#ea580c',
  },
  {
    number: '09',
    title: 'Eternal Life',
    body: 'We believe in the resurrection of the dead and eternal life with God for all who trust in Christ.',
    accent: '#4f46e5',
  },
  {
    number: '10',
    title: 'Christian Living',
    body: 'We believe that believers are called to live holy, Spirit‑led lives marked by love, obedience, prayer, soul-winning, and service. Our lives must reflect Christ\'s character and advance His mission in the world.',
    accent: '#1d4ed8',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function FaithSection() {
  return (
    <section id="faith" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '30%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '600px',
          background:
            'radial-gradient(ellipse, rgba(29,78,216,0.05) 0%, rgba(124,58,237,0.03) 45%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Section header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <span className="badge">What We Believe</span>
          <h2>
            <strong>STATEMENT OF FAITH</strong>
          </h2>
          <p
            style={{
              maxWidth: '46rem',
              marginTop: '1.25rem',
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
            }}
          >
            These are the foundational truths upon which Global Witness Ministry stands — the
            unchanging bedrock of Scripture that defines who we are, what we believe, and how we live.
          </p>
        </motion.div>

        {/* Beliefs grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
            marginTop: '1.75rem',
          }}
        >
          {beliefs.map(({ number, title, body, accent }) => (
            <motion.div
              key={number}
              variants={item}
              whileHover={{ y: -5, scale: 1.015 }}
              style={{
                background: 'linear-gradient(160deg, rgba(255,255,255,0.97), rgba(248,250,252,0.95))',
                border: `1px solid ${accent}20`,
                borderLeft: `4px solid ${accent}`,
                borderRadius: 'var(--radius-3xl)',
                padding: '1.75rem',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
                boxShadow: `0 8px 30px -15px ${accent}20`,
              }}
            >
              {/* Faint glow blob */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '100px',
                  height: '100px',
                  background: `${accent}0e`,
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Number watermark */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  right: '1.25rem',
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: accent,
                  opacity: 0.06,
                  fontFamily: 'monospace',
                  lineHeight: 1,
                  pointerEvents: 'none',
                }}
              >
                {number}
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.85rem',
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      display: 'grid',
                      placeItems: 'center',
                      background: `${accent}15`,
                      border: `1px solid ${accent}28`,
                      borderRadius: '50%',
                      color: accent,
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {parseInt(number, 10)}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      margin: 0,
                    }}
                  >
                    {title}
                  </h3>
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: '0.93rem',
                    lineHeight: 1.8,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65 }}
          style={{
            marginTop: '2rem',
            padding: '2rem 2.5rem',
            background:
              'linear-gradient(135deg, rgba(29,78,216,0.06), rgba(124,58,237,0.04))',
            border: '1px solid rgba(29,78,216,0.15)',
            borderRadius: 'var(--radius-3xl)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(29,78,216,0.18), rgba(124,58,237,0.1))',
              border: '1px solid rgba(29,78,216,0.2)',
              borderRadius: 14,
              flexShrink: 0,
            }}
          >
            <Shield size={24} color="var(--primary-600)" />
          </div>
          <p
            style={{
              margin: 0,
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              flex: 1,
              minWidth: '200px',
            }}
          >
            These beliefs are not merely doctrines — they are the living convictions that drive every
            prayer, every sermon, every mission, and every act of witness that flows from Global
            Witness Ministry.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
