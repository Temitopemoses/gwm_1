import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe2, Flame, ChevronDown } from 'lucide-react'

import { useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

const expressionLinks = [
  {
    label: 'Community Witnesses',
    href: '/community',
    icon: Globe2,
    color: '#1d4ed8',
    tag: 'Community_Witnesses',
    desc: 'Evangelistic & apostolic outreach to the world',
  },
  {
    label: 'Revival Witnesses Network',
    href: '/revival',
    icon: Flame,
    color: '#db2777',
    tag: 'Revival_Witnesses_Network',
    desc: 'Revival & empowerment for the Church',
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [expressionsOpen, setExpressionsOpen] = useState(false)
  const [mobileExpressionsOpen, setMobileExpressionsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setExpressionsOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    setExpressionsOpen(false)
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
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '0.5rem 0.875rem',
                  color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500,
                  fontFamily: 'var(--font-sans)', borderRadius: '999px', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(15,23,42,0.05)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-secondary)' }}
              >
                {link.label}
              </button>
            ))}

            {/* Our Expressions Dropdown */}
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setExpressionsOpen(v => !v)}
                style={{
                  background: expressionsOpen ? 'rgba(29,78,216,0.07)' : 'none',
                  border: 'none', cursor: 'pointer',
                  padding: '0.5rem 0.875rem',
                  color: expressionsOpen ? 'var(--primary-700)' : 'var(--text-secondary)',
                  fontSize: '0.9rem', fontWeight: 500,
                  fontFamily: 'var(--font-sans)', borderRadius: '999px', transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(15,23,42,0.05)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                onMouseLeave={e => { if (!expressionsOpen) { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-secondary)' } }}
              >
                Our Expressions
                <motion.span animate={{ rotate: expressionsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {expressionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    style={{
                      position: 'absolute', top: 'calc(100% + 0.5rem)', left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(255,255,255,0.97)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(15,23,42,0.1)',
                      borderRadius: 16,
                      boxShadow: '0 16px 40px rgba(15,23,42,0.12)',
                      padding: '0.75rem',
                      minWidth: '300px',
                      zIndex: 200,
                    }}
                  >
                    {expressionLinks.map(({ label, href, icon: Icon, color, tag, desc }) => (
                      <button
                        key={href}
                        onClick={() => { setExpressionsOpen(false); handleNav(href) }}
                        style={{
                          display: 'flex', alignItems: 'flex-start', gap: '0.875rem',
                          width: '100%', padding: '0.875rem 1rem',
                          background: 'none', border: 'none', borderRadius: 12,
                          cursor: 'pointer', textAlign: 'left',
                          transition: 'background 0.15s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = `${color}08` }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
                      >
                        <div style={{
                          width: 36, height: 36, flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: `${color}14`, border: `1px solid ${color}25`, borderRadius: 10,
                          marginTop: '0.1rem',
                        }}>
                          <Icon size={17} color={color} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>{label}</div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', lineHeight: 1.5 }}>{desc}</div>
                          <div style={{ fontSize: '0.7rem', fontWeight: 600, color, letterSpacing: '0.05em' }}>{tag}</div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNav('/school')}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '0.5rem 0.875rem',
                color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500,
                fontFamily: 'var(--font-sans)', borderRadius: '999px', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(15,23,42,0.05)'; e.currentTarget.style.color = 'var(--text-primary)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-secondary)' }}
            >
              School
            </button>
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
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '0.875rem 1rem',
                  color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 500,
                  fontFamily: 'var(--font-sans)', borderRadius: 12, textAlign: 'left',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(15,23,42,0.05)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-secondary)' }}
              >
                {link.label}
              </motion.button>
            ))}

            {/* Our Expressions group in mobile */}
            <div>
              <button
                onClick={() => setMobileExpressionsOpen(v => !v)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  width: '100%', padding: '0.875rem 1rem',
                  background: mobileExpressionsOpen ? 'rgba(29,78,216,0.06)' : 'none',
                  border: 'none', cursor: 'pointer',
                  color: mobileExpressionsOpen ? 'var(--primary-700)' : 'var(--text-secondary)',
                  fontSize: '1rem', fontWeight: 500, fontFamily: 'var(--font-sans)',
                  borderRadius: 12, transition: 'all 0.2s',
                }}
              >
                Our Expressions
                <motion.span animate={{ rotate: mobileExpressionsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={15} />
                </motion.span>
              </button>

              <AnimatePresence>
                {mobileExpressionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ overflow: 'hidden', paddingLeft: '0.5rem' }}
                  >
                    {expressionLinks.map(({ label, href, icon: Icon, color, tag }) => (
                      <button
                        key={href}
                        onClick={() => handleNav(href)}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '0.75rem',
                          width: '100%', padding: '0.75rem 1rem',
                          background: 'none', border: 'none', borderRadius: 10,
                          cursor: 'pointer', textAlign: 'left', transition: 'background 0.15s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = `${color}08` }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
                      >
                        <div style={{
                          width: 30, height: 30, flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: `${color}14`, border: `1px solid ${color}25`, borderRadius: 8,
                        }}>
                          <Icon size={14} color={color} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{label}</div>
                          <div style={{ fontSize: '0.72rem', color, fontWeight: 600, letterSpacing: '0.04em' }}>{tag}</div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNav('/school')}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '0.875rem 1rem',
                color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 500,
                fontFamily: 'var(--font-sans)', borderRadius: 12, textAlign: 'left',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(15,23,42,0.05)'; e.currentTarget.style.color = 'var(--text-primary)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-secondary)' }}
            >
              School
            </button>
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
