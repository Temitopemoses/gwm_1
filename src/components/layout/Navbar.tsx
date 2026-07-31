import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Flame } from 'lucide-react'

import { useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Revival', href: '/revival' },
  { label: 'School', href: '/school' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    navigate(href)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '0.875rem 1.5rem' : '1.25rem 1.5rem',
          transition: 'padding 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container)',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: scrolled
              ? 'rgba(255, 255, 255, 0.88)'
              : 'rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${scrolled ? 'rgba(15, 23, 42, 0.12)' : 'rgba(15, 23, 42, 0.06)'}`,
            borderRadius: '999px',
            padding: '0.6rem 0.75rem 0.6rem 1.25rem',
            boxShadow: scrolled ? '0 8px 32px rgba(15, 23, 42, 0.08)' : '0 2px 12px rgba(0,0,0,0.02)',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => handleNav('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
            }}
            aria-label="Go to top"
          >
            <img 
              src="/logo.png" 
              alt="Global Witnesses Ministry Logo" 
              style={{ height: '44px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }}
            />
          </button>

          {/* Desktop Nav */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }} className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 0.875rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans)',
                  borderRadius: '999px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget
                  t.style.background = 'rgba(15, 23, 42, 0.05)'
                  t.style.color = 'var(--text-primary)'
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget
                  t.style.background = 'none'
                  t.style.color = 'var(--text-secondary)'
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => handleNav('/tracts')}
              className="btn btn-primary desktop-nav"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
            >
              Apply for Tracts
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="mobile-nav"
              style={{
                background: 'rgba(15, 23, 42, 0.05)',
                border: '1px solid rgba(15, 23, 42, 0.1)',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                color: 'var(--text-primary)',
                display: 'flex',
              }}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: 80,
              left: 16,
              right: 16,
              zIndex: 99,
              background: 'rgba(255, 255, 255, 0.96)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(15, 23, 42, 0.12)',
              boxShadow: '0 16px 40px rgba(15, 23, 42, 0.12)',
              borderRadius: 20,
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.375rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
                onClick={() => handleNav(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.875rem 1rem',
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans)',
                  borderRadius: 12,
                  textAlign: 'left',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(15, 23, 42, 0.05)'
                  e.currentTarget.style.color = 'var(--text-primary)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'none'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <div style={{ marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }}>
              <button
                onClick={() => handleNav('/tracts')}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Apply for Tracts
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </>
  )
}
