import { motion } from 'framer-motion'
import { Flame, Mail, Phone, MapPin, Youtube, Instagram, Twitter, Facebook } from 'lucide-react'

const footerLinks = {
  Ministry: ['Vision', 'Community Witness', 'Revival Network', 'School of Witnesses'],
  Outreach: ['Apply for Tracts', 'Prayer Request', 'Become a Volunteer', 'Outreach Partners'],
  Resources: ['Sermons', 'Bible Studies', 'Testimonials', 'Newsletter'],
  Connect: ['Upcoming Events', 'Gallery', 'Contact Us', 'Give'],
}

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '5rem 0 2rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '4rem',
        }}
          className="footer-grid"
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              marginBottom: '1.25rem',
            }}>
              <img 
                src="/logo.png" 
                alt="Global Witnesses Ministry Logo" 
                style={{ height: '56px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }}
              />
            </div>
            <p style={{ fontSize: '0.9375rem', marginBottom: '1.75rem', maxWidth: 280, color: 'var(--text-secondary)' }}>
              Equipping believers to carry the light of the Gospel to every corner of the earth.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { icon: Mail, text: 'contact@globalwitnessesministry.org' },
                { icon: Phone, text: '+234 800 000 0000' },
                { icon: MapPin, text: 'London' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.875rem',
                }}>
                  <Icon size={14} color="var(--primary-600)" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], colIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: colIdx * 0.08 }}
            >
              <h4 style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1.25rem',
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-700)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} Global Witnesses Ministry. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[
              { icon: Youtube, label: 'YouTube' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Facebook, label: 'Facebook' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                style={{
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(15, 23, 42, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 8,
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget
                  t.style.background = 'rgba(29, 78, 216, 0.1)'
                  t.style.borderColor = 'rgba(29, 78, 216, 0.25)'
                  t.style.color = 'var(--primary-700)'
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget
                  t.style.background = 'rgba(15, 23, 42, 0.04)'
                  t.style.borderColor = 'var(--border-subtle)'
                  t.style.color = 'var(--text-muted)'
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
