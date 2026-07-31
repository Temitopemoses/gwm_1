import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, Check, Sparkles } from 'lucide-react'

const interests = [
  'Revival Updates', 'Sermon Releases', 'Event Announcements',
  'Prayer Needs', 'Tract Availability', 'Ministry News',
]

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [selected, setSelected] = useState<string[]>(['Revival Updates', 'Event Announcements'])
  const [submitted, setSubmitted] = useState(false)

  const toggle = (tag: string) => {
    setSelected(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="newsletter" className="section" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 70% 80% at 50% 100%, rgba(29, 78, 216,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: 680,
            margin: '0 auto',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(29, 78, 216,0.06), rgba(99,102,241,0.03))',
            border: '1px solid rgba(29, 78, 216,0.15)',
            borderRadius: 'var(--radius-3xl)',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div style={{
            width: 56,
            height: 56,
            background: 'linear-gradient(135deg, var(--primary-700), var(--primary-500))',
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            boxShadow: '0 8px 24px rgba(29, 78, 216,0.25)',
          }}>
            <Mail size={24} color="white" />
          </div>

          <span className="badge" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={12} />
            Newsletter
          </span>

          <h2 style={{ marginBottom: '1rem' }}>
            Stay in the<br />
            <span className="gradient-text">Revival Loop</span>
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            Get anointed updates, revival reports, event announcements, and fresh sermons delivered to your inbox. Join 8,000+ believers.
          </p>

          {/* Interest tags */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}>
            {interests.map(tag => {
              const isSelected = selected.includes(tag)
              return (
                <motion.button
                  key={tag}
                  onClick={() => toggle(tag)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    padding: '0.4rem 0.875rem',
                    borderRadius: 999,
                    border: `1px solid ${isSelected ? 'rgba(29, 78, 216,0.35)' : 'var(--border-default)'}`,
                    background: isSelected ? 'rgba(29, 78, 216,0.12)' : 'rgba(15,23,42,0.03)',
                    color: isSelected ? 'var(--primary-700)' : 'var(--text-secondary)',
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    fontFamily: 'var(--font-sans)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                  }}
                >
                  {isSelected && <Check size={11} />}
                  {tag}
                </motion.button>
              )
            })}
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                padding: '1.5rem',
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.2)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎉</div>
              <div style={{ fontWeight: 700, color: '#10b981', marginBottom: '0.25rem' }}>You're in!</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Welcome to the GWM family. Check your inbox for a confirmation.
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'flex',
                gap: '0.75rem',
                flexWrap: 'wrap',
              }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="input"
                  style={{ flex: 1, minWidth: 220 }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-primary"
                  style={{ flexShrink: 0 }}
                >
                  Subscribe
                  <ArrowRight size={16} />
                </motion.button>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
