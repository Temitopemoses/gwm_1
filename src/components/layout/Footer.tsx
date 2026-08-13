import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Youtube, Instagram, Twitter, Facebook } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface FooterLinkItem {
  label: string
  href: string
}

const footerLinks: Record<string, FooterLinkItem[]> = {
  Ministry: [
    { label: 'Vision & About', href: '/about' },
    { label: 'Community Witnesses', href: '/community' },
    { label: 'Revival Witnesses Network', href: '/revival' },
    { label: 'School of Witnesses', href: '/school' },
  ],
  Outreach: [
    { label: 'Apply for Tracts', href: '/tracts' },
    { label: 'Prayer Request', href: '/prayer' },
    { label: 'Become a Volunteer', href: '/community' },
    { label: 'Outreach Partners', href: '/tracts' },
  ],
  // Resources: [
  //   { label: 'Sermons', href: '/revival' },
  //   { label: 'Bible Studies', href: '/school' },
  //   { label: 'Testimonials', href: '/testimonials' },
  //   { label: 'Newsletter', href: '#newsletter' },
  // ],
  Connect: [
    { label: 'Upcoming Events', href: '/revival' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Give', href: '/community' },
  ],
}

const socialLinks = [
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
]

export default function Footer() {
  const navigate = useNavigate()

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) {
      return // allow default browser action
    }

    e.preventDefault()

    if (href.startsWith('#')) {
      const targetId = href.replace('#', '')
      const elem = document.getElementById(targetId)
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/' + href)
        setTimeout(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
      return
    }

    navigate(href)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '5rem 0 2rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr', //
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
            <button
              onClick={(e) => handleLinkClick(e, '/')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                marginBottom: '1.25rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              aria-label="Go to Home"
            >
              <img 
                src="/logo.png" 
                alt="Global Witnesses Ministry Logo" 
                style={{ height: '80px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }}
              />
            </button>
            <p style={{ fontSize: '0.9375rem', marginBottom: '1.75rem', maxWidth: 280, color: 'var(--text-secondary)' }}>
              Equipping believers to carry the light of the Gospel to every corner of the earth.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { icon: Mail, text: 'contact@globalwitnessesministry.org', href: 'mailto:contact@globalwitnessesministry.org' },
                { icon: Phone, text: '+234 800 000 0000', href: 'tel:+2348000000000' },
                { icon: MapPin, text: 'London', href: 'https://maps.google.com/?q=London' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-700)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <Icon size={14} color="var(--primary-600)" />
                  <span>{text}</span>
                </a>
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
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={(e) => handleLinkClick(e, href)}
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        transition: 'color 0.2s',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-700)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {label}
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
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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
                  t.style.background = 'rgba(190, 18, 60, 0.1)'
                  t.style.borderColor = 'rgba(190, 18, 60, 0.25)'
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

